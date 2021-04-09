// // Defining text characters for the empty and full hearts for you to use later.
// const EMPTY_HEART = '♡'
// const FULL_HEART = '♥'

// // Your JavaScript code goes here!
// let hearts = document.querySelectorAll(".like-glyph");

// let type = {
//   '♥' : '♡',
//   '♡' : '♥'
// }
// let color = {
//   "red" : "",
//   "" : "red"
// }

// const errorMessage = document.getElementById("modal");

// hearts.forEach(heart => heart.addEventListener("click", changeHeart));

// function changeHeart(event){
//   let heart = event.target
//   mimicServerCall("You sure?")
//   .then(function(error){
//     heart.innerText = type[heart.innerText];
//     heart.style.color = color[heart.style.color];
//   })
//   .catch(function(error){
//     errorMessage.innerText = "Something went wrong";
//     errorMessage.className = "";
//     setTimeout(function(){errorMessage.classList.add("hidden");}, 4000)
//   })
// }

let glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

let colorStates = {
  "red" : "",
  "": "red"
};

let articleHearts = document.querySelectorAll(".like-glyph");

function updateHeart(e) {
  let heart = e.target;
  mimicServerCall()
    .then(function(serverMessage){
      alert("You notified the server!");
      alert(serverMessage);
      heart.innerText = glyphStates[heart.innerText];
      heart.style.color = colorStates[heart.style.color];
    })
    .catch(function(error) {
      alert("Something went wrong!");
    });
}

for (let heart of articleHearts) {
  heart.addEventListener("click", updateHeart);
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
