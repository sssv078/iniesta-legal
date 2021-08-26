
//var arrow=document.getElementsByClassName("arrow");
document.getElementById("slider").style.backgroundImage="url('images/0.jpg')";


var message="";


var play=setInterval(auto,8000);


function auto(){
	var slider=document.getElementById("slider");
	var sname=slider.style.backgroundImage;
	//var htxt=document.getElementById("htxt");
	setTimeout(function(){
	    var s_int=(parseInt(sname.match(/\d+/g))+1)%3;
		if(s_int==0){
			message="";
		}
		else if(s_int==1){
			message="";
		}
		else if(s_int==2){
			message="";
		}
	    slider.style.backgroundImage="url('images/"+s_int+".jpg')";
	},1600);
	setTimeout(function(){
		slider.classList.remove("anim");
		//htxt.classList.remove("anim");
	},3200);
	slidemation();
	
}


function slidemation(){
	var slider=document.getElementById("slider");
	//var htxt=document.getElementById("htxt");
	slider.className+=" anim";
	//htxt.className+=" anim";
}

function resetAnim(){
	clearInterval(play);
	play=setInterval(auto,8000);
}