//to check password length and confirmation checker on register page
function verifyPassword() {
  let pw = document.getElementById("password").value;

  //check empty password field
  if (pw == "") {
    document.getElementById("message").innerHTML = "Fill the password please!";
  }

  //minimum password length validation
  else if (pw.length < 8 && pw.length > 0) {
    document.getElementById("message").innerHTML =
      "Password length must be atleast 8 characters";
  }

  //maximum length of password validation
  else if (pw.length > 15) {
    document.getElementById("message").innerHTML =
      "Password length must not exceed 15 characters";
  } else {
    document.getElementById("message").innerHTML = "";
  }
}
function che() {
  let pw = document.getElementById("pswd").value;
  var confirem = document.querySelector("#confirem").value;

  if (pw === confirem) {
    document.getElementById("messages").innerHTML = "confrimed";
  } else {
    document.getElementById("messages").innerHTML = "Password not match";
  }
}

//To check Email format on signin page
function checkEmail() {
  let pw = document.getElementById("Username").value;
  var at = pw.split("");
console.log(pw);
  var count = 0;

  for (var i = 0; i < at.length; i++) {
    if (at[i] === "@") {
      count++;
    }
  }
  if (count == 0) {
    document.getElementById("emessage").innerHTML = "Not on Email format";
  } else {
    document.getElementById("emessage").innerHTML = "";
  }
}



function smm() {
  const input = document.querySelector("input");
  const log = document.getElementById("values");

  input.addEventListener("input", updateValue);

  function updateValue(e) {
    log.textContent = e.target.value;
  }
}



 function sayHello() {
   alert("form reseted successfuly");
 }

  function mouseoutevent() {
    document.write("please hover your mouse over");
  }

function mouseDown() {
  document.getElementById("myP").style.color = "red";
}

function mouseUp() {
  document.getElementById("myP").style.backgroundcolor = "yellow";
}

function myFunction() {
  var x = document.getElementById("fullname");
  x.value = x.value.toUpperCase();
}
// Swap the video element wiht audio element
function swapImageWithVideo(){

  console.log('selamu dawit selemon');

    let videoParent = document.getElementById("myvideo");
    let  imageParent= document.getElementById('myimage');

    let videoElement = document.getElementById("video");
    let imageElement = document.getElementById('hike');

    let video = document.createElement('video');
    //copy the video element before replacae it
    video = videoElement;
    //replace video element by image element
    videoParent.replaceChild(imageElement, videoElement);

    // append the video element in the place of image element
    imageParent.appendChild(video);
     
}

function addNewElement(){
  let Iframe = document.createElement('iframe');

  Iframe.src = "./auth/register.html";
  Iframe.width ="400px";
  Iframe.height = "300px";

  let parentElement = document.getElementById('iframe');
  parentElement.appendChild(Iframe);

}
function removeAudio()
{
  let remove = document.getElementById('audio');
  let parent = document.getElementById('myaudio');
  parent.removeChild(remove);
}
function Register(name, age,phone) {
  this.fullName = name;
  this.phone = age;
  this.age = phone;
  this.introduceMySelf = () => {
      parentElement = document.getElementById('input_data');
      const divElement = document.createElement('div');
      divElement.classList.add('appended');
      divElement.innerHTML = `<h1>New Added Form</h1><h1>Full Name: ${this.fullName}</h1><h1>Age: ${this.age}</h1><h1>PhoneNo.: ${this.phone}</h1>`;
      divElement.style.backgroundColor ="gray";
     
      parentElement.appendChild(divElement);
  }
}
const callingFuction = () => {
var name = document.getElementById('fullname').value;
var fullname = document.getElementById('phone').value;
var age = document.getElementById('age').value;

const newObject = new Register(name,fullname,age);
newObject.introduceMySelf();
}
document.getElementById('btn').addEventListener('click', callingFuction);

