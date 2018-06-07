$("h4, h3").css("color", "#D04171");

$("header").on("click",function(){
	$("h1").css("border-color", "#D04171");
	$("h1").text("Ouch, you clicked me!");

});

$('.btn-attend').on("click",function(){
	var name=$(".input-name").val();
	$("form").remove();
	$(".signup").html('<div class="alert"> Thanks for attending '+name+'</div>');
	$('.alert').fadeIn(600);
});

// GETTING DATA WITH AJAX

var url="http://js-steer.herokuapp.com/event/1";
$.getJSON(url, function(response){

	if(response.result==="success"){
		var data=response.data;
		var ticketsForSale= data.max_count - data.count;
		var message="there are currently " + ticketsForSale +" tickets left";
	}
	else {
		console.warn(response.data.message);
	}
});

// HOME PAGE

$(".view-events").on("click", function(){
	$(this).css("background-color", "#D04171");
	$(this).parent().next().slideToggle();
	$(this).parent().toggleClass("selected");
})


 $(".item-body").hide();

// LIGHTBOX JS - Data Attributes

$(".event").on("click", function(){

	var eventName = $(this).data("name");
	var imageName = $(this).data("image");
	var user = $(this).data("user")
	var attendees = $(this).data("attendees");
	var date = $(this).data(date)

	$(".lightbox-inner img").attr("src","images/" + imageName + ".jpg")
	
	$(".lightbox-content h2").text(eventName);
	$(".lightbox-content .creator").text(user);
	$(".lightbox-content .date").text(date);
	$(".lightbox-content .attendees").text(attendees);

	
	$(".lightbox-inner").animate({
		"top":"50%",
	});

	$("#lightbox").fadeIn();

});

// click event for fading out lightbox

$("#lightbox").on("click", function(){

	$(".lightbox-inner").animate({
		'top':'40%'
	},1000, function(){
		console.log("where am I!!");
		$(".lightbox-inner").css("top", "60%");
	});

	$(this).fadeOut();
})

// instagramUrl = 'http://instagram.com/api/v1';


$('.btn').on('click', function(){	
	$(this).css('background-color','#D04171')
 	var url = 'http://js-steer.herokuapp.com/events/'
});

$('.btn').on('click',function(){
	var url = 'http://js-steer.herokuapp.com/events/'
	
	$.getJSON(url,function(response){
		if( response.result === "success" ){
			var events=response.data.events;
		} 
	})
});
