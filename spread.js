$(document).ready(function() {
    $(document).scroll(function() { 
    var wy=0;
     wy=$(document).scrollTop();
    if(wy>=2367){
    $("#icon_1").animate({
        top:'40px',
        left:'36%'
    },"slow");
    $("#icon_2").animate({
        top:'0px',
        left:'44%' 
    });
    $("#icon_3").animate({
        top:'0px',
        left:'53%'   
    },"slow");
    $("#icon_4").animate({
        top:'40px',
        left:'60%'     
    });
    $("#icon_5").animate({
        top:'130px',
        left:'31%' 
    },"slow");
    $("#icon_6").animate({
        top:'130px',
        left:'65%'   
    });
    $("#icon_7").animate({
        top:'230px',
        left:'33%'   
    },"slow");
    $("#icon_8").animate({
        top:'230px',
        left:'63%'
    });
    $("#icon_9").animate({
        top:'320px',
        left:'31%'     
    },"slow");
    $("#icon_10").animate({
        top:'320px',
        left:'65%'  
    });
    $("#icon_11").animate({
        top:'370px',
        left:'39%'    
    },"slow");
    $("#icon_12").animate({
        top:'370px',
        left:'57%' 
    });
    $("#icon_13").animate({
        top:'400px',
        left:'48%'
    },"slow");
    }
    });
});
