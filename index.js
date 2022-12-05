// document.getElementById("count").innerText = 5

let count = 0

// count + 1
// count = count + 1 

console.log(count)

function myfunction (){
    document.getElementById(`count-el`).innerHTML = count + 1
    count = count + 1
    
    if (count>0){
     document.getElementById(`display`).innerHTML= ``
    
    
}
}

function myfunction2 (){
    if (count>0){
    document.getElementById(`count-el`).innerHTML = count - 1
    count = count - 1
   
    } 
    
    else{
        document.getElementById(`display`).innerHTML= `People Can't Be Negetive Bruh`
    }
    


}

function myfunction3 (){
    document.getElementById(`count-el`).innerHTML = 0
    document.getElementById(`display`).innerHTML= ``
}

function save (){
    let store = document.getElementById(`store`)
    store.innerHTML=count
}