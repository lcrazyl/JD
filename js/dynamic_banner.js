// var dynamicUl = document.querySelector("#dynamic .d-right .d-right-ul");
// var  dynamicIdx = 0;
// function dynamicRun() {
//     dynamicIdx++;
//     animate(dynamicUl,{left:-dynamicIdx * 1},10,function() {
//         if(dynamicIdx === 2000){    
//           dynamicUl.style.left = 0;
//             dynamicIdx = 0;
      
//         }
//     })
// }
// var dynamicTimer = setInterval(function() {
//     dynamicRun();
// },10)


var dynamicIdx=0;
var timer = setInterval(function(){
    Run();
    dynamicIdx++;
},10)
function Run() {
    $("#dynamic .d-right .d-right-ul").animate({
        "left":-1*dynamicIdx
    },10,function(){
        // console.log(dynamicIdx)
        // console.log(new Date().getSeconds())
        if(dynamicIdx >= 2000){    
            dynamicIdx = 0;
  $("#dynamic .d-right .d-right-ul").css("left",0) 
        }
    })
}
