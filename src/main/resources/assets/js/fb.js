$(":#fb").click(function() {
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '{627796963977885}',
      status     : true,
      cookie	 : true,
      xfbml      : true
    });
  };
  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/all.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
  
   FB.login(function(response) {
	   if (response.authResponse) {
	     console.log('Welcome!  Fetching your information.... ');
	     FB.api('/me', function(response) {
	       console.log('Good to see you, ' + response.name + '.');
	     });
	   } else {
	     console.log('User cancelled login or did not fully authorize.');
	   }
	 });
});