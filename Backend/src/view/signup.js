$(init);

function init(){
	$('#showTerms').click(function(){
        $('#terms').dialog({modal:true});   
    });
    $("#hidecard").click(function(){
    	$(".hidecard").toggle();
	});
    $("#hidelocation").click(function(){
    	$(".hidelocation").toggle();
	});
    $("#hidename").click(function(){
    	$(".hidename").toggle();
	});
	$( "#accordion" ).accordion({
      collapsible: true,
      autoFill:true,

    });
    $(".ui-accordion-content").show();

	$( "#accordion-resizer" ).resizable({
      minHeight: 100,
      minWidth: 150,
      resize: function() {
        $( "#accordion" ).accordion( "refresh" );
      }
    });
}


//Label colour chances when mouse hovers labels
var label = document.getElementsByTagName("label");
	console.log(label);

	for(var i=0; i<label.length; i++){

		label[i].addEventListener("mouseover", function(){
		 this.style.color = "blue";
		});

		label[i].addEventListener("mouseout", function(){
		 this.style.color = "black";
		});
	};		
	

//Changes Background colour to red
function chBackcolor() {
	document.body.style.background = "red";
 }
 function chBackcolory() {
	document.body.style.background = "yellow";
 }

 function changepic(){
	document.getElementById('myImage').src='http://localhost:3050/static/welcome.gif'
 }

/*var btn = document.querySelectorAll('ul li a');
var drp = document.querySelector('ol');
    for(var b = 0; b < btn.length; b++){
      btn[b].onclick = function()
      {		if (this.innerHTML == 'Show Pizzas') {
			this.innerHTML = 'Hide Pizzas';
	  		} else {
			this.innerHTML = 'Show Pizzas';
	  }
          if(this.parentNode.querySelector('ol') != null){
          	this.parentNode.querySelector('ol').classList.toggle('drop');
          }
      }
	}
	
	function ilovepizza() {
		document.getElementById("demo").innerHTML = "I love Pizza";
	}
*/

  
function ilovepizza() {
	alert('I love pizza, Click Ok To create account and signup from home page!')
	// var m
	// console.log('Function called')
	// m = document.getElementById("fn")
	// var v = '{"UserName" : {"firstName":"'
	// console.log(document.getElementById("fn").value)
	// v = v +  document.getElementById("fn").value
	// console.log(document.getElementById("ln").value)
	// v =v+'", "lastName":"' + document.getElementById("ln").value
	// console.log(document.getElementById("email").value)
	// v = v +'"}, "email" : "'+ document.getElementById("email").value
	// console.log(document.getElementById("password").value)
	
	// v = v +'", "phoneNumber" :"'+document.getElementById("phone").value
	// console.log(document.getElementById("phone").value)
	// console.log(document.getElementById("datePicker").value)
	// v = v + '","address":{"line1":"' + document.getElementById("addline1").value
	// console.log(document.getElementById("addline1").value)
	// v = v + '", "city":"' + document.getElementById("city").value
	// v = v +'", "state":"' + document.getElementById("state").value
	// v = v +'", "zip":"' + document.getElementById("zip").value + '"}'

	// console.log(document.getElementById("zip").value)
	// console.log(document.getElementById("state").value)
	// console.log(document.getElementById("city").value)
	// v = v +', "password" :"'+document.getElementById("password").value+ '"}'
	// alert(`Your name is ${(v)}`)
	// var settings = {
	// 	"async": true,
	// 	"crossDomain": true,
	// 	"url": "http://localhost:3000/user/"+document.getElementById("email").value,
	// 	"method": "POST",
	// 	"headers": {
	// 	  "content-type": "application/x-www-form-urlencoded",
	// 	  "cache-control": "no-cache",
	// 	  "postman-token": "6acee27d-cce3-1a9e-da4b-30b9903e3161"
	// 	},
	// 	"data": {
	// 	  "UserName.firstName": "Utsav",
	// 	  "UserName.lastName": "Jain",
	// 	  "email": "utsav@jain.com",
	// 	  "phoneNumber": "9998487226",
	// 	  "address.line1": "190 Ryland Street",
	// 	  "address.line2": "5402 Fountain Plaza",
	// 	  "address.city": "San Jose",
	// 	  "address.state": "California",
	// 	  "address.zip": "95110",
	// 	  "password": "12345"
	// 	}
	//   }
	  
	//   $.ajax(settings).done(function (response) {
	// 	console.log(response);
	//   });
}
function deleteaccount(email){
	// var settings = {
	// 	"url": "http://localhost:3000/user/"+email,
	// 	"method": "DELETE",
	// 	"headers": {
	// 	  "content-type": "application/x-www-form-urlencoded",
	// 	  "Access-Control-Allow-Credentials": "false"
	// 	}
	//   }
	  
	//   $.ajax(settings).done(function (response) {
	// 	console.log(response);
	//   });
	// console.log(email);
	alert("Deleting Accocunt " + email)
}
