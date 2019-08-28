function echo(content) {  
    var e = document.createElement("p");
    e.innerHTML = content;
    document.currentScript.parentElement.replaceChild(document.currentScript, e);
}

var params = window
    .location
    .search
    .replace('?','')
    .split('&')
    .reduce(
        function(p,e){
            var a = e.split('=');
            p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
            return p;
        },
        {}
    );

echo(params['data']);
