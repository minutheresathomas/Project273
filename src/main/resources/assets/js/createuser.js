$(":button").click(function () {

	var userIdText=document.getElementsByName('emailsignup');
	var pswText=document.getElementsByName('passwordsignup');
	var userNameText=document.getElementsByName('name');
	var countryText=document.getElementsByName('country');
	alert(userIdText);
	alert(pswText);

	jQuery.ajax({
		type: "POST",
		url: "http://localhost:8080/sms-voting/v1/polls/createUser",
		contentType: "application/json",
		dataType: "json",
		data: JSON.stringify({
			"user_id": userIdText,
			"password": pswText,
			"name": userNameText,
			"country": countryText
		}),
		success: function (data) {
		alert("success");
		},
		error: function () {
		alert("failed");
		}
	});
});