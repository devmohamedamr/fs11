
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



// document.getElementById("sayhi").onclick = function(){
//     var nametext =  document.getElementById("name").value;
//     document.getElementById("output").innerText = "hi "+ " " + nametext;
// }


// document.getElementById("calc").onclick = function(){

//     var x = +(document.getElementById("x").value);
//     // console.log(x);
//     var y = +(document.getElementById("y").value);

//     var o = document.getElementById("o").value;

    // if(o == '+'){
    //     console.log(x+y);
    // }
    
    // else if(o == '-'){
    //     console.log(x-y);
    // }

    // else if(o == '*'){
    //     console.log(x*y);
    // }

    // else if(o == '/'){
    //     console.log(x/y);
    // }
    // else{
    //     console.log("errrrrrror");
    // }
    // switch(o){
    //     case "+":
    //         console.log(x+y);
    //     break;
    //     case "-":
    //         console.log(x-y);
    //     break;
    //     case "*":
    //         console.log(x*y);
    //     break;
    //     case "/":
    //         console.log(x/y);
    //     break;
    // }
// }

// document.getElementById("change").onclick = function(){
//     document.getElementById("color").type = "text";
// }

//              0           1          2        3       4       5 
// var items = ["ramy",true,11,2.5];
// console.log(items);
// console.log(items);
// console.log(typeof(items));
// var users = [];

// document.getElementById("add").onclick = function(){
    
//     var inpname =  document.getElementById("name").value;
    // users.push(inpname);
    // document.getElementById("name").value = "";
//     document.getElementById("res").innerText = "items count is : "+users.length;

//     console.log(users);
// }


// console.log("welcom ya araf");

// console.log("welcom ya sara");



// function syhi(name,age){
//     console.log("welcom ya "+name+" age is : "+age);
// }

// syhi("arafa",10);
// syhi("sara",10);
// syhi("mohamed",10);











// var number = function(n){
//     console.log(n);
// }

// alert(number);
// console.log(number(20) + 20);

// document.getElementById("add").onclick = function(){
//     alert("test");
// }



//  function test(){
//     alert("test");
// }

// function tax(){

//     var salary = document.getElementById("salary").value;
//     if(salary < 1000){
//         document.getElementById("tax").value =  salary*0.1;
//         document.getElementById("net").value = salary - (salary*0.1);
//     }else if (salary >= 1000 && salary <= 9000){
//         document.getElementById("tax").value =  salary*0.2;
//         document.getElementById("net").value = salary-(salary*0.2);    
//     }else{
//         document.getElementById("tax").value =  salary*0.3;
//         document.getElementById("net").value = salary-(salary*0.3);    

//     }
// }


// loop
//  for , while , do while 
// var i = 1;
// while(20>i){
//     i = i+1;
//     console.log("test");
// }



var item = ["mohamed","eslam","ahmed","radwa","sara"];

// var count = item.length;
// for(var i = 0;i<count; i++ ){
//     console.log(item[i]);
// }

// console.log(item.pop())


// while( x = item.pop()){
//     console.log(x);
// }

// console.log(item);

// var numbers  = [3000,20,50,1,65,5,100,567,7,1000];

// var numbers2  = [34,3000,20,50,65,5,100,567,7,1000];

// min(numbers2);



// function min(n){
//     var count = n.length;
//     var m = n[0];
//     for(var i = 0;i<count;i++){
//           if(n[i] < m){
//             m  = n[i];
//           }
//     }
//     console.log(m);
// }


// CRUD - CREATE , READ , UPDATE , DELETE

var tasks = [];
function add(){
    var task = document.getElementById("task").value;
    tasks.push(task);
    document.getElementById("task").value = "";

    view();
}

function view(){
    // console.log(tasks);
    var text = '';
    var count = tasks.length;
    for(var i =0;i<count;i++){
       text  += "<li ondblclick='destroy("+ i +")' >"+tasks[i]+"</li>  <span style='color:green' onclick='update("+i+")'>update</span>";
    }
    // console.log(text);
    document.getElementById("result").innerHTML = text;
}


function destroy(index){
    // alert(index);
    tasks.splice(index,1);
    view();
}

function update(index){

     document.getElementById("task").value = tasks[index];
     document.getElementById("update").style.display = "inline-block";
     document.getElementById("add").style.display = "none";
     document.getElementById("index").value = index;

}


function edit(){
    var task = document.getElementById("task").value;
    var index =  document.getElementById("index").value;
    tasks[index] = task;
    document.getElementById("task").value = "";
    document.getElementById("update").style.display = "none";
    document.getElementById("add").style.display = "inline-block";

    view();
}
