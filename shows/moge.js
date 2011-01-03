function(head, req) {

    start({
        "headers" : {
            "Content-type": "text/html"
        }
    });

    var mustache = require("vendor/couchapp/lib/mustache");
    var datalist = {
        "title": "タイトル",
        "hello": "やあ",
        "world": "ヒゲさん。"
    };
    
    return mustache.to_html(this.templates.moge, datalist);

}