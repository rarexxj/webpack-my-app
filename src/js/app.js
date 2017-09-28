// alert(require('./people.js'))
// 
// 
// 
let people=require('./people.js');
let $=require("jquery");

require("../css/style.css")

$.each(people,function(key,val){
	$("body").append("<h1>"+people[key].name+"</h1>")
})

console.log(people[0].name);