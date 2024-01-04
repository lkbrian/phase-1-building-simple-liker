// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let like = document.querySelectorAll(".like-glyph");

for (i = 0; i < like.length; i++) {
  like[i].addEventListener("click", (event)=> {
    let likerHeart = event.target;
    mimicServerCall()
      .then((serverMessage) => {
        alert(serverMessage);
        likerHeart.classList.toggle("activated-heart"),
          likerHeart.innerText = likerHeart.innerText === EMPTY_HEART ? FULL_HEART : EMPTY_HEART;
      })
      .catch((err) => {
        let errorText = document.querySelector(".hidden");
        errorText.remove();
        let p = document.querySelector("#modal-message");
        document.body.append(p);
      });
  });
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
