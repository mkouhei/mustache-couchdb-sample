function(doc, req) {

    start({
        "headers" : {
            "Content-type": "text/html"
        }
    });

    var mustache = require("vendor/couchapp/lib/mustache");
    var data = {
	"title": doc.title,
	"hello": doc.hello,
	"world": doc.world
    };
    
    return mustache.to_html(this.templates.moge, data);

}