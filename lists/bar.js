function(head, req) {

    start({
        "headers" : {
            "Content-type": "text/html"
        }
    });

    var mustache = require("vendor/couchapp/lib/mustache");
    var datalist = [];

    while(row = getRow()) {
	datalist.push({
	    "hello": row.value.hello,
	    "world": row.value.world
	});
    }

    var data = {
	"title": "タイトル4",
	"datalist": datalist
    };

    return mustache.to_html(this.templates.fuga, data);

}