let btnclose = document.querySelector(".closebtn");
let asidebar = document.getElementsByTagName("aside")[0];
let openbtn = document.querySelector(".hamberger");

openbtn.onclick =() =>{
    asidebar.style.display = "block";
}

btnclose.onclick = () =>{
    asidebar.style.display = "none";
}
