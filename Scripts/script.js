//functions index.html
/*.ready function to load the images into the index.html (home) list
including the image names and descriptions*/
$().ready(function(){
	$.getJSON('Data/products.json?v=3', function(jsonData){
	for (var x in jsonData){
		$("#content").append(formatProductIndexList(jsonData[x]))
		}
	})
});
/*formatter fot the html string used in above .ready
function to load in images and image info*/
function formatProductIndexList(prodObj){
	let ret="";
	ret= "<div id='content-grid'>"+"<img src='" + prodObj.img +"'>"+"<div>"+"<h3>"+prodObj.name+"</h3>"+prodObj.desc+"<br>"+prodObj.dim+"<br><br>"+prodObj.price+"</div>"+"</div>";
	return ret;
}
//functions portfolio.html
//.ready function to load image contents of the products.json file into the portfolio grid
$().ready(function(){
	$.getJSON('Data/products.json?v=1', function(jsonData){
		for (var x in jsonData){
		$("#portfolio-grid").append(formatProductPortfList(jsonData[x]))
		}
	})
});
/*formatter for the html string used in above .ready 
function to build the image grid on the portfolio.html*/
function formatProductPortfList(prodObj){
	let ret="";
	ret=  "<img class='gallery-img' id = '"+prodObj.id+"' src='" + prodObj.img + "' onclick='openSlideShow(this.id)'"+">";
	return ret;
}
// function contact.html
/*validate form function to check the contents of the contact form 
have been typed in correctly and no required fields are left empty */
function validateForm(){
  //store fields in variables
  const x = document.forms["contactForm"]["fname"].value;
  const y = document.forms["contactForm"]["subject"].value;
  const z = document.forms["contactForm"]["message"].value;
  const v = document.forms["contactForm"]["email"].value;
  //check if fields are empty and alert if they are
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
  else
  {
      alert("Email has been sent.");
  }
}
//Slideshow code
/* function to open the slideshow upon clicking on a small sized image
store the clicked images current id in id variable */
function openSlideShow(id){
  //open the mySlides container for the fullscreen image
 $(".mySlides").show();
 //close the grid view of all images
 $(".portfolio-grid").hide();
 //get productsLarge.json data (large images for full screen)
 $.getJSON('Data/products.json?v=3', function(jsonData){
   //find the image by id in the json file to get the large sized image version
  let imgItem = jsonData.find(item => item.id === id)
  //set src and id attribute of img tag to large sized image json params
  document.getElementById("imageid").src=imgItem.imgLarge;
  document.getElementById("imageid").id=imgItem.id;
  })
}
/* close large sized image */
function closeSlideShow(){
  $(".mySlides").hide();
  $(".portfolio-grid").show();
  //get current class for current image
  let currentSlide = document.getElementsByClassName("currentSlide");
  // reset id and src attribute when closing large image
  currentSlide[0].id="imageid";
  currentSlide[0].src="";
 }
/* function to scroll through large sized images by selecting next or previous 
item in the json file*/
 function plusSlides(n){
   let pic = document.getElementsByClassName("currentSlide");
   let currentId = pic[0].id;
  // open json file for large images
  $.getJSON('Data/products.json?v=3', function(jsonData){
    //match current image in json file
    let imgItem = jsonData.find(item => item.id === currentId);
    //get current index in json file of current image
    let index = jsonData.indexOf(imgItem);
    //find the next json item by adding or substracting 1 from the index
    let nextItem = jsonData[index+n];
    //get current tag img tag by class name
    let currentSlide = document.getElementsByClassName("currentSlide");
    console.log(nextItem.img);
    console.log(nextItem.imgLarge);
    //set src and id attribute of current img tag to next json item
    currentSlide[0].src=nextItem.imgLarge;
    currentSlide[0].id=nextItem.id;
  })
 }