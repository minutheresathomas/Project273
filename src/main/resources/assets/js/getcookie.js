$(document).ready(function getCookie(cnme)
{
var name = "username=";
var ca = document.cookie;
for(var i=0; i<ca.length; i++) 
  {
  var c = ca[i].trim();
  if (c.indexOf(name)==0) 
	  {
	  	alert("value of cookei : username : "+c.substring(name.length,c.length));
	  	return c.substring(name.length,c.length);
	  }
  }
return "";
});