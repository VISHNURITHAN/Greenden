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

// product search functionality

var productcontainer = document.getElementById("productcontainer")
var Search = document.getElementById("Search")
var productlist = productcontainer.querySelectorAll("div")


Search.addEventListener("keyup", function(event){
    var enteredValue = event.target.value.toUpperCase();

    for(count=0;count<productlist.length;count++)
    {
        var productname = productlist[count].querySelector("h1").textContent
        if(productname.toUpperCase().indexOf(enteredValue)<0)
        {
            productlist[count].style.display="none"
        }
        else
        {
             productlist[count].style.display="block"
        }
    }
})