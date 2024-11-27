const form=document.getElementById("form");
const input=document.getElementById("name");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const username=input.value;
    if (!username) {
        alert("enter Your Name");
    }
    else
    {
        window.location.href=`gamepage.html?username=${encodeURIComponent(username)}`;

    }
    

});







