$(document).ready(function(){	
	$('.ball5').on({
        'click': function(){
            var imgId = "#" + this.id            
            $(imgId).css("bottom") === "95px"? $(imgId).css("bottom", "53px"):$(imgId).css("bottom", "95px");
        }
    });

    $('.lower > img').on({
        'click': function (){
        	var idStr = this.id;
        	var numId = idStr.slice(-1);
        	var imgId = "#" + idStr.slice(0, idStr.length-1) + numId;
	        var baseBottomValue = $(".ball"+numId).css("bottom");
	        var newBottomValue = (parseInt(baseBottomValue.slice(0, baseBottomValue.length-2)) + 78).toString() + "px";  

        	if ($(imgId).css("bottom") !== newBottomValue){
	            for (var i = numId; i < 5; i++) {   

	            	imgId = "#" + idStr.slice(0, idStr.length-1) + i;
	            	baseBottomValue = $(".ball"+i).css("bottom");
	            	newBottomValue = (parseInt(baseBottomValue.slice(0, baseBottomValue.length-2)) + 78).toString() + "px";   

	            	if ($(imgId).css("bottom") !== newBottomValue){
	            		$(imgId).css("bottom", newBottomValue); 
	            	}            	
	            } 
	        } else{

	            for (var i = numId; i > 0; i--) {   

	            	imgId = "#" + idStr.slice(0, idStr.length-1) + i;
	            	baseBottomValue = $(".ball"+i).css("bottom");	            	   

	            	if ($(imgId).css("bottom") !== baseBottomValue){
	            		$(imgId).css("bottom", baseBottomValue); 
	            	}            	
	            }    
	        }           	
        }            
    });
});

