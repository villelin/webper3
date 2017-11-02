

// Tee funktio 'showImages', joka
// lataa kuvat.json tiedoston, joka sisältää näytettävät kuvat taulukkona

// tee silmukka joka lisää merkkijonoon (string) jokaisesta kuvasta alla olevan HTML:n
/*
<li>
    <figure>
        <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
        <figcaption>
            <h3>Title</h3>
        </figcaption>
    </figure>
</li>
*/

// Silmukan jälkeen tulosta HTML-koodi (output) <ul>-elementin sisälle innerHTML:n avulla
"use strict";
const ul = document.querySelector("ul");

showImages();

function showImages() {
  let myRequest = new Request("kuvat.json");
  fetch(myRequest).then(function(response) {
    return response.json().then(function(data) {
      let html = "";
      data.forEach((item) =>
      {
        html += `<li>`;
        html += `<figure>`;
        html += `<a href="img/original/${item.mediaUrl}"><img src="img/thumbs/${item.mediaUrl}"></a>`;
        html += `<figcaption>`;
        html += `<h3>${item.mediaTitle}</h3>`;
        html += `</figcaption>`;
        html += `</figure>`;
        html += `</li>`;
      });
      ul.innerHTML = html;
    });
  });
}