//Language control functions
//by Jose Luis Campaña Perez
var fileExtension = ".html";
var globalLanguage="";
var defaultLanguage="EN";
var spanishSufix = "_es" + fileExtension;
var langCookie="LANG";
var separadorURL="/";
var mainHtmlPage="index";

function getUrlLanguage(url){
	var language="EN";
	var pos=url.indexOf(spanishSufix);
	if (pos>-1) language="ES";
	
	return language;
}

function changeLanguage(newLanguage){
	
	//Check if we need to do changes or not
	if (newLanguage!=globalLanguage){
	
		globalLanguage=newLanguage;
		writeConfig();
		redirect(newLanguage);
	}
}

//Reads the stored cookie
function readConfig(){

	if (document.cookie.length>0){
		var i=document.cookie.indexOf("=");
		var j=document.cookie.length;
		globalLanguage=document.cookie.substring(i+1,j);
	}
	else 
		globalLanguage=defaultLanguage;	

	writeConfig();
}

//Write the cookie
function writeConfig(){	
	document.cookie=langCookie + "=" + globalLanguage;
}

//This function is loaded in the <body onload="javascript:iniLanguage();">
function iniLanguage(){

	var urlLanguage=getUrlLanguage(window.location.pathname);
	
	readConfig();
	
	if (urlLanguage!=globalLanguage)
		redirect(globalLanguage);	
	
}

//Redirects the link depending of the language
function redirect(language){
	var urlLanguage=getUrlLanguage(window.location.pathname);
	var currentURL=window.location.pathname;
	
	//Redundant checkin (but...)
	if (urlLanguage!=language){
		//currentURL has the last part of the URL...
		
		if (language=="ES"){
		
			var i=currentURL.indexOf(fileExtension);
			if (i<0)
				var newURL= "/" + mainHtmlPage + spanishSufix;
			else
				var newURL=currentURL.substring(0,i) + spanishSufix;
			
		}else{
		
			var j=currentURL.length;
			var k=spanishSufix.length;
			var i=j-k;
			var newURL=currentURL.substring(0,i) + fileExtension;

		}
		
		newURL=window.location.protocol + "//" + window.location.host + newURL;
	
		//Redirecting...
		top.location=newURL;		
	}
	
}

