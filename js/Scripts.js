window.onload = function(){
//
}; //anything that needs to be called on load goes here

setInterval(function(){
    document.getElementById('clock').innerHTML = new Date().toLocaleString();
}, 1000)