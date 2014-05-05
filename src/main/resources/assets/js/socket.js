$(document).ready(function() {
	
var ajax_call = function() {
	var pollId = getElementById("#button");
	var destinationUrl = "http://localhost:8080/sms-voting/v1/polls/"+user_id+"/"+id+;
	var button = ':button#'+id;
	jQuery.ajax({
	    type: "GET",
	    url: destinationUrl,
	    contentType: "application/json",
	    success : function ()
	    {
	    	alert('success');
	    	
	    },
		failure : function ()
		{
			alert('failure...');
		}
	});
};

var interval = 1000 * 60 * 3; // where X is your every X minutes
setInterval(ajax_call, interval);
});
