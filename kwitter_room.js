var firebaseConfig = {
  apiKey: "AIzaSyDwX2bB4l_WG-IB_6DD5R7QvtfsNvBzhFQ",
  authDomain: "kwitter-bd33d.firebaseapp.com",
  databaseURL: "https://kwitter-bd33d-default-rtdb.firebaseio.com",
  projectId: "kwitter-bd33d",
  storageBucket: "kwitter-bd33d.appspot.com",
  messagingSenderId: "791971755109",
  appId: "1:791971755109:web:8a0fd8ee9aea5bf7a2028c",
  measurementId: "G-GEM113RG0T"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose:"add room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_room.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
console.log("Room name"+Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;


  //End code
  });});}
getData();

function redirectToRoomName(name){
console.log(Name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}


