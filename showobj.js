function createXMLHTTP(){
	var request;
	var browser = navigator.appName;
	if(browser=="Microsoft Internet Explorer"){
		var arrVersions=["Microsoft.XMLHttp","MSXML2.XMLHttp.4.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp","MSXML2.XMLHttp.5.0"];
		for(var i=0;i<arrVersions.length;i++){
			try{
				request=new ActiveXObject(arrVersions[i]);
				return request;
			}catch(exception){}
		}
	}
	else{
		request=new XMLHttpRequest();
		if(request.overrideMimeType){
			request.overrideMimeType('text/xml');
		}
		return request;
	}
}
var http=createXMLHTTP();
function load(divid,htmlurl){
	http.open("GET",htmlurl,true);
	http.onreadystatechange=function(){
		if(http.readyState==4){
			if(http.status==200){
				var jieguo=http.responseText;
				document.getElementById(divid).innerHTML=jieguo;
			}
		}
	}
	http.send(null);
	return;
}

var MM_FlashCanPlay;
var MM_contentVersion = 6;
function showobj(fname,iname,divid,usewidth,useheight,expressInstall,htmlurl){
	var plugin = (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"]) ? navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin : 0;
	if ( plugin ) {
		var words = navigator.plugins["Shockwave Flash"].description.split(" ");
		for (var i = 0; i < words.length; ++i){
			if (isNaN(parseInt(words[i])))
				continue;
			var MM_PluginVersion = words[i];
		}
		MM_FlashCanPlay = MM_PluginVersion >= MM_contentVersion;
	}else if( navigator.userAgent && navigator.userAgent.indexOf("MSIE")>=0 && (navigator.appVersion.indexOf("Win") != -1) ) {
		document.write('<SCR' + 'IPT LANGUAGE=VBScript\> \n');
		document.write('on error resume next \n');
		document.write('MM_FlashCanPlay = ( IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash." & MM_contentVersion)))\n');
		document.write('</SCR' + 'IPT\> \n');
	}
	if ( MM_FlashCanPlay ) {
		swfobject.embedSWF(fname, divid, usewidth, useheight, "9.0.0", expressInstall,null,null,{wmode:'transparent'});
	}else{
		addLoadEvent(function(){
			load(divid,htmlurl);
		});
	}
}
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {  
		window.onload = function() {
			oldonload();
			func();
		}
	}
}