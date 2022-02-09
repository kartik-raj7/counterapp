let countp=document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0;
console.log(saveEl)
function increment(){
    count++
    countp.textContent = count
}
/*function decrement(){
    count--
    countp.innerText = count
}*/
function save(){
let countstr = count + " - "
saveEl.textContent += countstr
console.log(count)
}







//document.getElementById("count-el").innerText = count
