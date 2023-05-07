const menu = document.getElementById("white")
const sideBar = document.getElementById("sidebar")
const sideBar2 = document.getElementById("sidebar2")
const sideBarList = document.getElementsByClassName("sidebar-list")
const sideBarList2 = document.getElementsByClassName("sidebar-list2")
menu.addEventListener('click', function click(){
    // sideBar.setAttribute('style', "width:20px; height:40px");
    // for (let x in sideBarList){
    //     sideBarList[x].setAttribute('style', "display: none")
    // }
    sideBar.setAttribute('class', "sidebar2");
    menu.setAttribute('class', "white1");
    
    for (let x in sideBarList){
        sideBarList[x].setAttribute('class', "sidebar-list2")
    }
    // sideBar.setAttribute('class', "sidebar2");
    // for (let x in sideBarList){
    //     sideBarList[x].setAttribute('class', "sidebar-list2")
    // }


    
})

