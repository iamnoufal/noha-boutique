var menu = document.getElementById("menu");
var header = document.getElementById("header");
var headerName = document.getElementById("name");
var menuName = document.getElementById("headerName");
var headerMaskElement = document.getElementById("header-mask");
var vh = header.offsetHeight;
var menuNameIncrement=0

window.addEventListener("scroll",()=>{
  if (window.pageYOffset<header.offsetHeight) {
    // headerName.style.lineHeight=header.offsetHeight-window.pageYOffset+'px';
    // header.style.height=header.offsetHeight-window.pageYOffset+'px';
    menu.classList.remove("menu-fix");
    menuNameIncrement=window.pageYOffset/vh;
    menuName.style.fontSize='0'
    // menuName.style.display='none'
    // menuName.style.fontSize=(window.pageYOffset/header.offsetHeight)*5+'vw';
  } else {
    // header.style.height=header.offsetHeight-window.pageYOffset+'px';
    menu.classList.add("menu-fix");
    // menuName.style.display='block';
    menuName.style.fontSize=menuNameIncrement*5+'vw';
  }
  headerName.style.lineHeight=(vh-window.pageYOffset)-(vh*(6/100))+'px';
  // headerName.style.fontSize=(vh/window.pageYOffset)/1.5+'rem'
  header.style.height=vh-window.pageYOffset+'px';
})

var menuHome = document.getElementById("menu-home");
var menuCollections = document.getElementById("menu-collections");
var menuConnect = document.getElementById("menu-connect");
var menuYou = document.getElementById("menu-you");

function menuFill() {
  if (header.offsetWidth<=800) {
    console.log('yes');
    menuHome.innerHTML="<i class='material-icons'>home</i>";
    menuCollections.innerHTML="<i class='material-icons'>collections</i>";
    menuConnect.innerHTML="<i class='material-icons'>connect_without_contact</i>";
    menuYou.innerHTML="<i class='material-icons'>account_circle</i>";
  } else {
    console.log("no");
    menuHome.innerHTML="Home";
    menuCollections.innerHTML="Collections";
    menuConnect.innerHTML="Connect";
    menuYou.innerHTML="You";
  }
}
menuFill()
window.addEventListener("resize",()=>{menuFill()})