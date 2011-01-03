function(head, req) {

    start({
        "headers" : {
            "Content-type": "text/html"
        }
    });

    var mustache = require("vendor/couchapp/lib/mustache");
    var data = {
	"title": "タイトル2",
	"datalist": [
	    {
		"hello": "やあ",
		"world": "ヒゲさん。"
	    },
	    {
		"hello": "こんにちは",
		"world": "ボーズ。"
	    }
	]
    };
    
    return mustache.to_html(this.templates.fuga, data);

}