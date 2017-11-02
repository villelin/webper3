

// Tee funktio 'showImages', joka
// lataa kuvat.json tiedoston, joka sisältää näytettävät kuvat taulukkona

// tee silmukka joka tekee jokaisesta kuvasta alla olevan HTML:n DOM-metodien avulla. Kun alla oleva rakenne on valmis, ne lisätään ul-elementin sisälle
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
// Tee HTML-elementit createElement-metodilla ja
// lisää attribuutit setAttribute-metodilla tai elementti.attribuutti -syntaksilla.
// Lisää elementit toistensa sisälle appendChild-metodilla.
// Lisää ne lopuksi ul elementin sisälle, jolloinka ne tulostuvat HTML-sivulle.

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
        const h3 = document.createElement("h3");
        const h3_node = document.createTextNode(`${item.mediaTitle}`);
        h3.appendChild(h3_node);

        const figcaption = document.createElement("figcaption");
        figcaption.appendChild(h3);

        const img = document.createElement("img");
        img.src = `img/thumbs/${item.mediaUrl}`;
        const a = document.createElement("a");
        a.href = `img/original/${item.mediaUrl}`;
        a.appendChild(img);

        const figure = document.createElement("figure");
        figure.appendChild(a);
        figure.appendChild(figcaption);

        const li = document.createElement("li");
        li.appendChild(figure);

        ul.appendChild(li);
      });
    });
  });
}