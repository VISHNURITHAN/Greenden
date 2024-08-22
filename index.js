// selecting  Side navbar ,MenuIcon
var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")

// function call on menu click
menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})
// function call to close on menu
var closenav = document.getElementById("closenav")

closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})