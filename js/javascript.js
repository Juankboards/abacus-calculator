$(document).ready(function(){
	var number = 0;

	//---- This gives movement to the balls ----// 
    $('#framework img').on({
        'click': function (){
        	var idStr = this.id;
        	var numId = idStr.slice(-1);
        	var imgId = "#" + idStr;

        	if (numId==5){        		        
           		if ($(imgId).css("bottom") === "96px"){
           			$(imgId).css("bottom", "56px");
           			number += parseInt(numId)*Math.pow(10, idStr[3]);
           		} else {
           			$(imgId).css("bottom", "96px");
           			number -= parseInt(numId)*Math.pow(10, idStr[3]);
           		}
        	}
        	
	        var baseBottomValue = $(".ball"+numId).css("bottom");
	        var newBottomValue = (parseInt(baseBottomValue.slice(0, baseBottomValue.length-2)) + 71).toString() + "px";  

        	if ($(imgId).css("bottom") !== newBottomValue){
	            for (var i = numId; i < 5; i++) {   

	            	imgId = "#" + idStr.slice(0, idStr.length-1) + i;
	            	baseBottomValue = $(".ball"+i).css("bottom");
	            	newBottomValue = (parseInt(baseBottomValue.slice(0, baseBottomValue.length-2)) + 71).toString() + "px";   

	            	if ($(imgId).css("bottom") !== newBottomValue){
	            		$(imgId).css("bottom", newBottomValue);
	            		number += Math.pow(10, idStr[3]); 
	            		
	            	}            	
	            } 
	        } else{

	            for (var i = numId; i > 0; i--) {   

	            	imgId = "#" + idStr.slice(0, idStr.length-1) + i;
	            	baseBottomValue = $(".ball"+i).css("bottom");	            	   

	            	if ($(imgId).css("bottom") !== baseBottomValue){
	            		$(imgId).css("bottom", baseBottomValue); 
	            		number -= Math.pow(10, idStr[3]); 
	            	}            	
	            }    
	        }           	
        }  
    });
	
	//---- This transform the position of the balls of the abacus in a number ----//
	$('#framework img').on({
        'click': function (){
        	$("#number").text(number);
        }
    });




});

