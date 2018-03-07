$("#datePicker").click(
                    function() {
                        $("#date").datepicker("disable");
                        $("#dialog").dialog("open");
                        $("#date").datepicker("enable");
                        return false;
                    }
                  );

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

var btn = document.querySelectorAll('ul li a');
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


  
