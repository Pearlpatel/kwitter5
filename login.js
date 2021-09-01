function add_user(){
    username=document.getElementById("user_input").value;
localStorage.setItem("username",username);
window.location="kwiter_room.html"
}