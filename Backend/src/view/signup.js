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
	

