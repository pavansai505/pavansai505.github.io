var pavan=sessionStorage.getItem("value");
document.getElementById("username").innerHTML=`<strong>${pavan}</strong>`;
var arr={
    "mongo":["comments:"],
    "express":["comments:"],
    "react":["comments:"],
    "node":["comments:"]
};
console.log(arr)
var extra_elements=["HTML","CSS"]
function extras(){
    var menu_list=document.getElementById("extras_data");
    console.log(extra_elements)
    var mapped_data_for_extras=extra_elements.map(function(data_for_extras){
        
        return `<li><a class="dropdown-item" href="#">${data_for_extras}</a></li>`
    })
    console.log(mapped_data_for_extras)
    var final_list_for_extras=mapped_data_for_extras.reduce(function(oldone,newone){
        return oldone+" "+newone
    }," ")
    console.log(final_list_for_extras)
    menu_list.innerHTML=final_list_for_extras;
}
extras()
function add_extras(){
    var new_extra=document.getElementById("extra_data").value;
    extra_elements.push(new_extra);
    document.getElementById("extra_data").value="";
    
    console.log(extra_elements)
    extras()
}

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