$(document).ready(function(){
	
	let i=0;let k=0;
	//()=>$.post( "/number", { number : ++i })
	$(".cart").click(function(){
		if($(this).attr('name')=='1')
		$.ajax({
			    url: '/number',
			    type: 'PUT',
			    data: JSON.stringify({number : ++ i , book : $(this).attr('name')}),
			    contentType: 'application/json; charset=utf-8',
			    dataType: 'json',
			    async: false,
			    success: function(res){
			    	$("#book1").html(res.value);
			    }
				});
	 if($(this).attr('name')=='2')
				$.ajax({
			    url: '/number',
			    type: 'PUT',
			    data: JSON.stringify({number : ++ k , book : $(this).attr('name')}),
			    contentType: 'application/json; charset=utf-8',
			    dataType: 'json',
			    async: false,
			      success: function(res){

			    	$("#book2").html(res.value);
			    }
			    })
});
});