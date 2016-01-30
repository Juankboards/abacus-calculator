BALLS_INITIAL_POSITION = {
	".ball5": "96px",
	".ball4": "192px",
	".ball3": "212px",
	".ball2": "232px",
	".ball1": "252px"
};

BALLS_SECOND_POSITION = {
	".ball4": "263px",
	".ball3": "283px",
	".ball2": "303px",
	".ball1": "323px"
};



$(document).ready(function(){
	var number = 0;
	var canContinue = true;		
	
	//---- This gives movement to the balls and translate the movement of the balls of the abacus in a number ----// 
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
        	    	
	        var baseBottomValue = BALLS_INITIAL_POSITION[".ball"+numId];
	        var newBottomValue = BALLS_SECOND_POSITION[".ball"+numId];
	    
        	if ($(imgId).css("bottom") !== newBottomValue){
	            for (var i = numId; i < 5; i++){   

	            	imgId = "#" + idStr.slice(0, idStr.length-1) + i;
	            	baseBottomValue = BALLS_INITIAL_POSITION[".ball"+i];
	            	newBottomValue = BALLS_SECOND_POSITION[".ball"+i];

	            	if ($(imgId).css("bottom") !== newBottomValue){
	            		$(imgId).css("bottom", newBottomValue);
	            		number += Math.pow(10, idStr[3]); 		            		
	            	}            	
	            } 
	        }else{
	            for (var i = numId; i > 0; i--) {   

	            	imgId = "#" + idStr.slice(0, idStr.length-1) + i;
	            	baseBottomValue = BALLS_INITIAL_POSITION[".ball"+i];           	   

	            	if ($(imgId).css("bottom") !== baseBottomValue){
	            		$(imgId).css("bottom", baseBottomValue); 
	            		number -= Math.pow(10, idStr[3]); 
	            	}            	
	        	}
	        }    
	    }	          
    });

	//---- This add functionality to the operators images ----//

	
	var expressionArray = [];
	var expression = "";


	function clean(){
		for (var i = 0; i < 11; i++) {  
    			for (var j = 0; j <6; j++) { 
    				imgId = "#col" + i + "-" + j;
    				$(imgId).css("bottom", BALLS_INITIAL_POSITION[".ball"+j]);
    			}
    		}
    	number = 0;    	
	}

	function expressionJoin(){
		expression = expressionArray.join("");
	}

	function operation(){
		switch (idStr){
			case "clean":  
				clean();      		
				expression = "";  
				expressionArray = []; 
				$("#number").text("0");          		  		
				break;  
			case "add":  
				expressionArray.push(number+"+");
				expressionJoin();        			
				clean();    
				$("#number").text(expression);   		        		
				break;
			case "extract":
				expressionArray.push(number+"-"); 
				 expressionJoin();        			
				clean();    
				$("#number").text(expression);  
				break;
			case "multiply":
				expressionArray.push(number+"*");
				expressionJoin();        			
				clean();    
				$("#number").text(expression);  
				break;
			case "divide":
				expressionArray.push(number+"/");
				expressionJoin();        			
				clean();    
				$("#number").text(expression);  
				break;
			case "result":       		
				if (number==0){
					$("#number").text(eval(expression.slice(0,-1)));			
				} else {
					$("#number").text(eval(expression + number));			
				}	        		
				clean();      		
				expression = "";  
				expressionArray = [];
				break; 	
		}        
	}	

	$('#operators img').on({
        'click': function (){ 
        	idStr= this.id;        	
	        
	        operation();
	        	 
        	      
	        if (expression.length>23){
	        	$("#number").text("THAT IS A REALLY BIG EXPRESSION");
	        	canContinue = true;
        		clean();      		
				expression = "";  
				expressionArray = []; 		        	
	        }        
	    }        	
	});
		
		
		//---- This shows the position of the balls of the abacus as a number ----//
	
	$('#framework img').on({
        'click': function (){
        	$("#number").text(expression+number);        	
        }
    });
	
})