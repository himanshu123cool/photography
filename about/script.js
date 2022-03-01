var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}





const sidebar = document.getElementById('slider')
const open_btn =document.getElementById('open')
const close_btn =document.getElementById('closed')

function side_open(){
    sidebar.style.display="block";
    open_btn.style.display="none";
    close_btn.style.display="block";
}

function side_close(){
    sidebar.style.display="none";
    close_btn.style.display="none";
    open_btn.style.display="block";
}

var nav_bar = document.getElementById('navbar');

window.onscroll = function navchange(){
   if(document.body.scrollTop>250 || document.documentElement.scrollTop>250){
       nav_bar.style.backgroundColor="var(--main-dark-green)";
   }
   else{
    nav_bar.style.backgroundColor="var(--dark-color)";
   }
}