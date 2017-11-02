// tee funktio 'showImages', joka
// lisää ladatun HTML-sisällön <ul> elementin sisälle
"use strict";
const ul = document.querySelector("ul");

showImages();

function showImages() {
  var myRequest = new Request("kuvat.html");
  fetch(myRequest).then(function(response) {
    return response.text().then(function(text) {
      ul.innerHTML = text;
    });
  });
}