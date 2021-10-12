
// console.log("mohamed");

// var username = "mohamed";
// var n = 10;
// var type = typeof(n);
// console.log(type);

// console.log(typeof(username));
// document.write(typeof(username));
// document.write(username + " <br>");
// document.write(username + " <br>");

// document.write(username + " <br>");
// document.write(username + " <br>");




// console.log(10 + 10);


// console.log(10 < 5);


// var age = 20;
// console.log(age);

// console.log(document);
// console.log(tag);

// document.getElementById("name").innerText = "ahmed";
// alert("mohamed");

// document.getElementById("btn").onclick = function(){alert("ww")};




// var nametitle =  document.getElementById("name");
// var green = document.getElementById("green");
// var blue = document.getElementById("blue");

// green.onclick = function(){nametitle.style.color = "green";}; 
// blue.onclick = function(){nametitle.style.color = "blue";};


// document.getElementById("result").onclick = function(){
    
//     var age =  document.getElementById("age").value;
//     if(age > 50){
//         document.getElementById("flag").style.color = "red";
//     }else{
//         document.getElementById("flag").style.color = "green";
//     }
// }



// document.getElementById("show").onclick = function(){
  
//     if(document.getElementById("password").type == "password"){
//         document.getElementById("password").type = "text";
//         document.getElementById("show").innerText = "hide";
//     }else{
//         document.getElementById("password").type = "password";
//         document.getElementById("show").innerText = "show";

//     }
// }



document.getElementById("sayhi").onclick = function(){
    var nametext =  document.getElementById("name").value;
    document.getElementById("output").innerText = "hi "+ " " + nametext;
}