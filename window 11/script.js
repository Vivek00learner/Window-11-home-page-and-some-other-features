taskbar = document.getElementsByClassName("taskbar")[0]
startmenu = document.getElementsByClassName("startmenu")[0]

taskbar.addEventListener("click",()=>{
    console.log("clicked");
    if (startmenu.style.bottom == "50px"){
        startmenu.style.bottom ="-107px"
    }
    else{
        startmenu.style.bottom = "50px"
    }

})