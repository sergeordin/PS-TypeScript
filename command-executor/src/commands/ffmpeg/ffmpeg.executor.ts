import { ChildProcessWithoutNullStreams, spawn } from 'child_process';
import { CommandExecutor } from '../../core/executor/command.executor.js';
import { StreamLogger } from '../../core/handlers/stream-logger.interface.js';
import { CommandExecFfmpeg, FfmpegInput } from './ffmpeg.types';
import { FileService } from '../../core/files/file.service.js';
import { PromptService } from '../../core/propmt/promt.service.js';
import { FfmpegBuilder } from './ffmpeg.builder.js';
import { StreamHandler } from '../../core/handlers/stream.handler.js';

export class FfmpegExecutor extends CommandExecutor<FfmpegInput> {
    private fileService: FileService = new FileService();
    private promptService: PromptService = new PromptService();

    constructor(logger: StreamLogger) {
        super(logger);
    }

    protected async prompt(): Promise<FfmpegInput> {
        const width = await this.promptService.input<number>(
            'Ширина',
            'number'
        );
        const height = await this.promptService.input<number>(
            'Высота',
            'number'
        );
        const path = await this.promptService.input<string>(
            'Путь до файла',
            'input'
        );
        const name = await this.promptService.input<string>('Имя', 'input');
        return { width, height, path, name };
    }
    protected build({
        width,
        height,
        path,
        name,
    }: FfmpegInput): CommandExecFfmpeg {
        const output = this.fileService.setFilePath(path, name, 'mp4');
        const args = new FfmpegBuilder()
            .input(path)
            .setVideoSize(width, height)
            .output(output);

        return { command: 'ffmpeg', args, output };
    }
    protected spawn({
        output,
        command,
        args,
    }: CommandExecFfmpeg): ChildProcessWithoutNullStreams {
        this.fileService.deleteFileIfExist(output);
        return spawn(command, args);
    }
    protected processStream(
        stream: ChildProcessWithoutNullStreams,
        logger: StreamLogger
    ): void {
        const handler = new StreamHandler(logger);
        handler.processOutput(stream);
    }
}
