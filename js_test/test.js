var arr={
    "mongo":[],
    "express":[],
    "react":[],
    "node":[]
}
var arr2=[]
Object.keys(arr).forEach(function(item){
    arr2.push(item)
}
    
);
var pavan=arr2.reduce(function(oldone,newone){
    return oldone+" "+newone
}," ")
console.log(pavan)