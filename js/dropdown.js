


function dropdownevt(event) {
    let dropdown = event.currentTarget;
    let icon = dropdown.getElementsByTagName("i")[0];
    let content = dropdown.querySelector(".dropdowncontent");
    let acutalstylecontent = getComputedStyle(content); 

    if(acutalstylecontent.display === "none"){
        icon.className ="fa-solid fa-angle-up";
        content.style.display = "block";
    }else if (acutalstylecontent.display === "block"){
        icon.className ="fa-solid fa-angle-down";
        content.style.display = "none";
    }
    
}

