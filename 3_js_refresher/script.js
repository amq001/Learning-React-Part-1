// console.log("hello")
function hi(){
  // console.log("Hi")
}
hi()
// object---------------------------------------------------------------------------------------------------
let obj = {
  name: "Aqib",
  class: "bscs",
  // Function in object
  fun: function func(no){
    // console.log("My function is running with a value of " + no)
  }
}
obj.fun(1)

// Event Listener-------------------------------------------------------------------------------------------
let a = document.getElementById("first")
a.addEventListener("click", function click() {
  // console.log("hello jee kese ho ***************")
  // confirm
  let c = confirm("Are you sure ?")
  // console.log(c)
})

// For loop--------------------------------------------------------------------------------------------------
// for (let \ = 0; \ < array.length; \++) {
//   const element = array[\];
  
// }

// while loop
// while (condition) {
// }


// Array---------------------------------------------------------------------------------------------------
let arr = [10,20,30]
// console.log(arr)
// arr.forEach()
// arr.map()


// switch statement
// if else
// break continue used in loops
// return


// Functions -------------------------------------------------------------------------------------------------
// console.log(this)
// normal
let obj1 = {
  a:this,
  fun1 : function(number){
  console.log(this)
}
}// This gets local value ---- a wali value nhi hogi balkay a ka object hoga
obj1.fun1()
console.log(obj1.a)

// arrow
let obj2 = {
  a:this,
  fun2 : (number)=>{
  console.log(this)
}
}// This gets global value --- a wali value hi hogi yani k window object
obj2.fun2()
console.log(obj2.a)
console.log("--------------------------------------------------------------")

// callbacks & setTimeOut------------------------------------------------------------------------------------------
setTimeout(()=>{
  console.log("hello G")
},1000)
console.log("Set timeout k baad ho mai")

// Promises -------------------------------------------------------------------------------------------------------

