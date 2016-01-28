$(document).ready(function(){
	//function moveFive(clicked_id){
    //	$(clicked_id).css("bottom") === "84px"? $(clicked_id).css("bottom", "52px"):$(clicked_id).css("bottom", "84px");	
	//}

	$('.five').on({
        'click': function(){
            var imgId = "#" + this.id
            console.log(imgId);
            $(imgId).css("bottom") === "84px"? $(imgId).css("bottom", "52px"):$(imgId).css("bottom", "84px");
        }
    });

	
});

