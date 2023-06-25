declare module 'sort-by' {
    function sortBy<T>(
        sortKeys: string | ((item: T) => any) | (string | ((item: T) => any))[],
        desc?: boolean
    ): (a: T, b: T) => number;
    export = sortBy;
}
