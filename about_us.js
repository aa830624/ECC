$(document).ready(function() {
	/*$("a").click(function(){
	  var scroll = $(this).attr("href");
	  $("body").animate({scrollTop: $(scroll).offset().top}, 1500);
	  return false;
	});*/  
    shownew();
    
}); 

    var NewsTime = 2000;      
    var TextTime = 100;     
    
    var newsi = 0;
    var txti = 0;
    var txttimer;
    var newstimer;
    
    var newstitle = new Array();       
    var newshref = new Array();     
	
	newstitle[0] = "當使用者收到換課通知之後，可有10小時考慮使否接受，只有兩方都按下「同意邀請」後，系統將會同時送出聯絡資料，方便對方進一步連絡。";
	

    newstitle[1] = "反之，如果只有一人同意、或是沒人接受邀請，系統便不會洩漏任何個人資料，並在否決當下或超過限定時間重新配對。";    
    newshref[1] = "http://www.cnblogs.com/guihailiuli/";
   
    function shownew(){
        hwnewstr=newstitle[newsi];      
        newslink=newshref[newsi];		 
         
        if(txti>=hwnewstr.length){
            clearInterval(txttimer);
            clearInterval(newstimer);
            newsi++;
            
            if(newsi>=newstitle.length){
                newsi = 0;
            }
            newstimer = setInterval("shownew()",NewsTime);
            txti = 0;
            return;
        }
        clearInterval(txttimer);
        document.getElementById("Hotnews").href = newslink;
        document.getElementById("Hotnews").innerHTML = hwnewstr.substring(0,txti+1);    
        txti++;
        txttimer = setInterval("shownew()",TextTime);
    }
    


