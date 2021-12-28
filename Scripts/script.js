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
	ret=  "<img src="+"'" + prodObj.img + "'"+">";
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