'use strict';

function domainName(url) { 
    const a = /^(http[s]?:\/\/)*[www]*[\.]*/;
    const b = /[A-Z0-9_-]*/i;
    return url.replace(a, '').match(b, '')[0];
}

console.log(domainName("9d9eguj2w.biz/img/"));
console.log(domainName("http://github.com/carbonfive/raygun"));
console.log(domainName("https://www.zly4a6bs8op7yhthtiu3-8e-o.tv"));
console.log(domainName("www.xakep.ru"));

/*
Write a function that when given a URL as a string, 
parses out just the domain name and returns it as a string. 
For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"

*/