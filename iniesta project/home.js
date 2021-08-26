var $win=$(window);
var $slide=$('#s1');
var $header=$('#header');
$win.on('scroll',()=>{
    if($win.scrollTop()>=345){
        $slide.css('display','none');
    }
    else{
        $slide.css('display','block');
    }
    if($win.scrollTop()>=545){
        $header.css('background-color','#000000')
    }
    else{
        $header.css('background-color','rgb(0,0,0,0.6)')
    }
})




//var arrow=document.getElementsByClassName("arrow");
document.getElementById("slider").style.backgroundImage="url('images/0.jpg')";


var message="";


var play=setInterval(auto,8000);


function auto(){
	var slider=document.getElementById("slider");
	var sname=slider.style.backgroundImage;
    var htxt=document.getElementById("h");
    var p=document.getElementById("p");
	setTimeout(function(){
	    var s_int=(parseInt(sname.match(/\d+/g))+1)%3;
		if(s_int==0){
            message="";
            htxt.style.color="#fbdd7d";
            p.style.color="#fbdd7d";
		}
		else if(s_int==1){
            htxt.style.color="#ffffff";
            p.style.color="#ffffff";
		}
		else if(s_int==2){
			message="";
		}
	    slider.style.backgroundImage="url('images/"+s_int+".jpg')";
	},1600);
	setTimeout(function(){
		slider.classList.remove("anim");
        htxt.classList.remove("animt");
        p.classList.remove("animp");
	},3200);
	slidemation();
	
}


function slidemation(){
	var slider=document.getElementById("slider");
    var htxt=document.getElementById("h");
    var p=document.getElementById("p");    
	slider.className+=" anim";
    htxt.className+=" animt";
    p.className+=" animp";
}

function resetAnim(){
	clearInterval(play);
	play=setInterval(auto,8000);
}
