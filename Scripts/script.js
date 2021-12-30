// functions index.html
$().ready(function(){
	$.getJSON('Data/products.json', function(jsonData){
	for (var x in jsonData){
		$("#content").append(formatProductIndexList(jsonData[x]))
		}
	})
});

function formatProductIndexList(prodObj){
	var ret="";
	ret= "<div id='content-grid'>"+"<img src='" + prodObj.img +"'>"+"<div>"+"<h3>"+prodObj.name+"</h3>"+prodObj.desc+"<br>"+prodObj.dim+"</div>"+"</div>";
	return ret;
}
// functions portfolio.html
$().ready(function(){
	$.getJSON('Data/products.json', function(jsonData){
		for (var x in jsonData){
		$("#portfolio-grid").append(formatProductPortfList(jsonData[x]))
		}
	})
});

function formatProductPortfList(prodObj){
	var ret="";
	ret=  "<img class='gallery-img' id = '"+prodObj.id+"' src='" + prodObj.img + "' onclick='openSlideShow(this.id)'"+">";
	return ret;
}

// function contact.html

$().ready(function(){
	$("#contact").submit(function() {
        //$(".container").hide();
        //$(".thankYou").show();
         alert("Email has been sent.");
    });
});

function validateForm() {
  var x = document.forms["contactForm"]["fname"].value;
  var y = document.forms["contactForm"]["subject"].value;
  var z = document.forms["contactForm"]["message"].value;
  var v = document.forms["contactForm"]["email"].value;
  if (x == "") {
    alert("First name must be filled out");
    return false;
  }
  if (y == "") {
    alert("Please provide a Title for the email.");
    return false;
  }
  if (z == "") {
    alert("Please provide a message.");
    return false;
  }
  if (v == "") {
    alert("Please provide an e-mail address");
    return false;
  }
}

//Slideshow code

function openSlideShow(id){
 //alert("You clicked the element: "+ id);
 $(".mySlides").show();
 $(".portfolio-grid").hide();
 
 $.getJSON('Data/productsLarge.json', function(jsonData){
  var imgItem = jsonData.find(item => item.id === id)
  document.getElementById("imageid").src=imgItem.img;
  document.getElementById("imageid").id=imgItem.id;
  })
}

function closeSlideShow(){
  //alert("You clicked the element: "+ id);
  $(".mySlides").hide();
  $(".portfolio-grid").show();
  
  var currentSlide = document.getElementsByClassName("currentSlide");
  currentSlide[0].id="imageid";
  currentSlide[0].src="";
 }

 function plusSlides(n){
   var pic = document.getElementsByClassName("currentSlide");
   var currentId = pic[0].id;
  
  $.getJSON('Data/productsLarge.json', function(jsonData){
    var imgItem = jsonData.find(item => item.id === currentId);
    var index = jsonData.indexOf(imgItem);
    var nextItem = jsonData[index+n];
    var currentSlide = document.getElementsByClassName("currentSlide");
    currentSlide[0].src=nextItem.img;
    currentSlide[0].id=nextItem.id;
  })
 }