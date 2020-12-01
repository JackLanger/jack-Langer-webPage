var selectedLanguage = document.documentElement.lang;

window.addEventListener('load',loadGallery("gallery.json"));


/**
 * takes an json file to precedurally create image containers and fill in image sub text and alt
 * you can access it with the polaroid class in your css
 * @param {string} path the url of your json file
 */
function loadGallery(path) {
  fetch(path)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("sorry nothing's there. please try again later");
      }
    })
    .then((data) => {
      data
        .forEach((elem) => {
          let div = document.createElement("div");
          let img = document.createElement("img");
          let paragraph = document.createElement("p");

          div.className = "polaroid";
          img.src = elem["url"];
          img.alt = elem['titel'];
          paragraph.innerHTML = elem[selectedLanguage];

          let right = document.getElementById("right");
          right.appendChild(div);
          div.appendChild(img);
          div.appendChild(paragraph);

        })
        .catch((err) => console.error(err));

    });
}


