$("#login").click(function setCookie() {
	var user_id = document.getElementById("username").value;
	document.cookie =  "username=" + user_id;
	
	jQuery.ajax({
		type: "GET",
		url: "http://localhost:8080/sms-voting/v1/polls/"+user_id,
		contentType: "application/json",
		dataType: "json",
		success: function (data) {
		alert("success");
		},
		error: function () {
		alert("failed");
		}
	});
});