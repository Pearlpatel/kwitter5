var firebaseConfig = {
    apiKey: "AIzaSyA1_0-DdJtjyC0JjkJ5cf8BqkP6vU1sddo",
    authDomain: "kwitter-project-35cda.firebaseapp.com",
    databaseURL: "https://kwitter-project-35cda-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-35cda",
    storageBucket: "kwitter-project-35cda.appspot.com",
    messagingSenderId: "1058686945700",
    appId: "1:1058686945700:web:208fb8d242df2bbe6a9931",
    measurementId: "G-8GJP1SN3Y2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  get_name=localStorage.getItem("username");
  document.getElementById("welcome").innerHTML="Welcome " +get_name + "!";
  function add_users() {
    input_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(input_name).update({
      purpose:"adding room name"
  });
localStorage.setItem("roomname",input_name);
     window.location="kwitter_page.html";
  }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
//<div id="Room_names">#Room_names</div><hr>
output_things="<div id=" +Room_names + "onclick='to_otherooms(this.id)'>#" + Room_names +"</div><hr>";
document.getElementById("output").innerHTML += output_things;
      });});}
getData()
function to_otherooms(name) {
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
}
function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    window.location="index.html";
}