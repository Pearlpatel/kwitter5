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
  //Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  username=localStorage.getItem("username");
  roomname=localStorage.getItem("roomname");

  function send() {
    mg_input_value=document.getElementById("mg_input").value;
firebase.database().ref(roomname).push({
    name:username,
    message:mg_input_value,
    like:0
});
document.getElementById("mg_input").value=" ";
}
function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
    name=message_data['name'];
    message=message_data['message'];
    like=message_data['like'];
    //<h4> name <img id="tickamrk" src="tick.png"> </h4>
name_thing="<h4>"+name+"<img id='tickmark'scr='tick.png'></h4>";
//<h4 id="output_mg">message</h4>
mg_thing="<h4 id='output_mg'>"+message+"</h4>";
button_thing="<button class='like_button' id='"+firebase_message_id+"'value="+like+">";
span_thing="<span > Like:"+like+"</span></button><hr>";
row=name_thing+mg_thing+button_thing+span_thing;
document.getElementById("ouput").innerHTML+=row;
//End code
} });  }); }
getData();
function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("roomname");
    window.location="index.html";
}
