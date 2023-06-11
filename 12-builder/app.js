"use strict";
var MethodFormat;
(function (MethodFormat) {
    MethodFormat["Get"] = "GET";
    MethodFormat["Post"] = "POST";
})(MethodFormat || (MethodFormat = {}));
class FetchBuilder {
    methods = [];
    urls = [];
    headers = [];
    addUrl(url) {
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
    addHeaders(header) {
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
console.log(new FetchBuilder()
    .addGet()
    .addUrl('https://test.com')
    .addHeaders('header')
    .build());
