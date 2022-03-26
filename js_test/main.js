var pavan=sessionStorage.getItem("value");
document.getElementById("username").innerHTML=`<strong>${pavan}</strong>`;
var arr={
    "mongo":["comments:"],
    "express":["comments:"],
    "react":["comments:"],
    "node":["comments:"]
};
console.log(arr)

function display_data(){
    Object.keys(arr).forEach(function(item){
        var row_data=document.getElementById(item);
        var mapped_data=arr[item].map(function(information){
            return `<li class="list-group-item">${information}</li>`
        })
        var final_list=mapped_data.reduce(function(oldone,newone){
            return oldone+" "+newone
        }," ")
        row_data.innerHTML=final_list;
    })
}
function add_comment(subject_name){
    var comment_data=document.getElementById(subject_name+"_comment").value;
    document.getElementById(subject_name+"_comment").value="";
    arr[subject_name].push(comment_data)
    display_data()
}
display_data()