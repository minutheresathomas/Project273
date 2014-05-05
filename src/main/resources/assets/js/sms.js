$(document).ready(function() {
	$(":button").click(function() {
		var id = this.id;
		var selectedVal = "";
		var selected = $("input[type='radio'][name='option']:checked");
		//alert('length : '+selected.length)
		if (selected.length > 0) {
		    selectedVal = selected.val();
		    //alert('selected value is : '+selectedVal);
		    localStorage.clear();
		    localStorage.setItem('selectedOpt', selectedVal);
		}
		var destinationUrl = "http://localhost:8080/sms-voting/v1/polls/"+user_id+"/participate/"+id+"?option="+selectedVal;
		var button = ':button#'+id;
		jQuery.ajax({
		    type: "PUT",
		    url: destinationUrl,
		    contentType: "application/json",
		    success : function ()
		    {
		    	alert('success');
		    	location.reload();
		    	
		    },
			failure : function ()
			{
				alert('failure...');
			}
		});
		$(button).attr("disabled", true);
	});
	
	 // Retrieve the radio button value from the local storage
	 var savedOption = localStorage.getItem('selectedOpt');
	 $('input[name=option][value=' + savedOption + ']').attr('checked', 'checked');
}); 

