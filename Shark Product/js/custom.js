function playAgain(){count=0,inputId="14MCA0009",url="",counter=0,$(".one").hide(),$(".three").hide(),$(".four").hide(),$(".two").addClass("animated fadeInDown").show(),$(".score").text(count),$(".inputId").val(""),$(".reason").val(""),$(".blockw").show()}function check(){var t=$(".circle").width();$(".shot").offset().left>=$(".circle").offset().left&&$(".shot").offset().left<=$(".circle").offset().left+t?($(".shot").removeClass("play"),$(".shot").addClass("up"),add(),setTimeout(function(){$(".shot").removeClass("up"),$(".shot").addClass("play")},500)):remove(),$(".score").text(count)}function listen(){$(window).keypress(function(t){(0===t.keyCode||32===t.keyCode)&&(t.preventDefault(),check())})}function unlisten(){$(window).unbind("keypress")}function add(){count++}function remove(){count--}function timer(){var t=setInterval(function(){counter++,$(".time").text(Math.abs(counter-60)),60==counter&&(clearInterval(t),$(".shot").removeClass("play"),$(".three").hide().addClass("animated "),$(".four").show().addClass("animated fadeInDown"),unlisten(),makeImage(),publishScore())},500)}function countDown(){var t=setInterval(function(){$(".that").text(countD),countD++,console.log(),countD>=5&&(clearInterval(t),$(".that").hide(),console.log())},800)}function trigger(){$(".that").show(),countDown(),setTimeout(function(){$(".shot").addClass("play"),timer(),listen()},5e3),inputId=$(".input-id").val(),url="https://academics.vit.ac.in/student/view_photo_2.asp?rgno="+inputId,$(".shot").css("background-image","url("+url+")","background-color","white")}function makeImage(){var t=document.getElementById("img"),e=t.getContext("2d");reason=$(".reason").val(),t.width=1e3,t.height=500,e.font="32px Aller",e.textAlign="center",e.fillStyle="#FFffff",e.fillRect(0,0,t.width,t.height),e.fillStyle="#999999",stringresult=inputId+", got killed "+count+" times by "+name,stringresultbig=stringresult+" Because '"+reason+"'",e.fillText(stringresult,500,60),e.font="25px Aller",e.fillText("Reason: "+reason,500,100);var n=new Image,a=new Image,o=new Image;o.onload=function(){n.onload=function(){e.drawImage(o,250,140,200,200*n.height/n.width),e.drawImage(n,550,140,200,200*n.height/n.width)},n.src=url,a.crossOrigin="anonymous",a.onload=function(){e.drawImage(a,200,120)}},o.src=fbimg,o.crossOrigin="anonymous"}function publishScore(){ref.push({score:count,name:name,reason:reason,victim:inputId,time:Firebase.ServerValue.TIMESTAMP})}function shareOnFacebook(){FB.ui({method:"feed",name:stringresult,link:"http://inational.in/shark",caption:"Shark Attack Vit Version",description:stringresultbig,picture:fbimg},function(t){t&&t.post_id})}var count=0,inputId="14MCA0009",url="",counter=0,resp={},name="John Doe",fbimg,reason="";$("a.playnow").on("click",function(t){t.preventDefault(),FB.login(function(t){"connected"===t.status?($(".one").hide(),$(".two").show().addClass("animated fadeInDown"),FB.api("/me?fields=first_name",function(t){name=t.first_name,resp=t,$(".name").text(name)}),FB.api("/me","GET",{fields:"picture.width(200).height(200)"},function(t){resp=t,fbimg=resp.picture.data.url})):"not_authorized"===t.status})}),$("#input-thing").submit(function(t){$("#input-thing").removeClass("animated shake"),t.preventDefault(),""==$(".input-id").val()||""==$(".reason").val()?($("#input-thing").addClass("animated shake"),t.preventDefault()):(t.preventDefault(),$(".two").hide(),$(".blockw").hide(),$(".three").show().addClass("animated fadeInDown"),trigger())}),$(".click").on("click",function(){$(".two").hide(),$(".blockw").hide(),$(".three").show().addClass("animated fadeInDown"),$(".input-id").val("14MCA0009"),$(".reason").val("On Random Hunt Streak!"),trigger()});var countD=1,stringresult="",stringresultbig="";$("a").on("click",function(t){t.preventDefault(),$(this).hasClass("topScore")&&$("#topScore").modal().addClass("animated fadeInDown"),$(this).hasClass("comment")&&$("#comments").modal().addClass("animated fadeInDown"),$(this).hasClass("how")&&$("#how").modal().addClass("animated fadeInDown"),$(this).hasClass("contribute")&&$("#contribute").modal().addClass("animated fadeInDown")}),$(".four .those a").on("click",function(){"share"==$(this).attr("thing")&&shareOnFacebook(),"replay"==$(this).attr("thing")&&playAgain(),"modal"==$(this).attr("thing")&&$("#topScore").modal().addClass("animated fadeInDown")});var ref=new Firebase("https://shark-attack-vit.firebaseio.com/score");ref.orderByChild("score").on("child_added",function(t){var e=moment(t.val().time).format("DD-MM-YYYY h:mm:ss"),n="<tr><td>"+e+"</td><td>"+t.val().name+"</td><td>"+t.val().score+"</td><td>"+t.val().victim+"</td><td>"+t.val().reason+"</td></tr>";$(".insert-data-here").append(n)});

console.error("i know, there's tons of stuffs leaking out of here. ");
console.error("you could hack in stuffs quite easily! however it take courage to play the way it is meant to be, people are smart, be wise instead!");
console.error("if you think you could fix these hacker stuffs, then tweet me at @saarabpreet");