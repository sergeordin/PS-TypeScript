enum MethodFormat {
    Get = 'GET',
    Post = 'POST',
}

interface Url {
    url: string;
    method: MethodFormat;
    headers: string;
}

class FetchBuilder {
    private methods: MethodFormat[] = [];
    private urls: Url[] = [];
    private headers: string[] = [];

    addUrl(url: any) {
        this.urls.push(url);
        return this;
    }

    addGet() {
        this.methods.push(MethodFormat.Get);
        return this;
    }

    addPost() {
        this.methods.push(MethodFormat.Post);
        return this;
    }

    addHeaders(header: string) {
        this.headers.push(header);
        return this;
    }

    build() {
        const res = [];
        for (const m of this.methods) {
            for (const u of this.urls) {
                for (const h of this.headers) {
                    res.push({
                        url: u,
                        method: m,
                        headers: h,
                    });
                }
            }
        }
        return res;
    }
}

//Use

console.log(
    new FetchBuilder()
        .addGet()
        .addUrl('https://test.com')
        .addHeaders('header')
        .build()
);
