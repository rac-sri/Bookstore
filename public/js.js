$(document).ready(function(){
	
	let i=0;
	//()=>$.post( "/number", { number : ++i })
	$(".cart").click(function(){
		$.ajax({
    url: '/number',
    type: 'POST',
    data: JSON.stringify({number : ++ i}),
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    async: false,
    success: function() {
        console.log("success");
    }
	});
	
});
});