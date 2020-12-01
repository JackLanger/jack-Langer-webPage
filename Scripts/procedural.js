var selectedLanguage = document.documentElement.lang;



window.addEventListener("load", loadGallery("gallery.json"));
// window.addEventListener("load", loadProjects("projects.json"));

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
          img.alt = elem["titel"];
          paragraph.innerHTML = elem[selectedLanguage];

          let right = document.getElementById("right");
          right.appendChild(div);
          div.appendChild(img);
          div.appendChild(paragraph);
        })
        .catch((err) => console.error(err));
    });
}
/**
 * takes a json file to create containers for projects
 * @param {string} path path of your json
 */
function loadProjects(path) {
  fetch(path)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => {

        let func = showDetails(element["idNumber"],element["image"]);
        let div = document.createElement("div");
        let projectBody = document.createElement("div");
        let titel = document.createElement("p");
        let image = document.createElement("img");

        div.appendChild(projectBody);
        div.appendChild(titel);
        projectBody.appendChild(image);


        div.className = "Projects";
        projectBody.className ="Project-Body";
        div.id = element["id"];
        image.id = element["imageID"];
        image.src = element["imageUri"];
        image.alt =element["imageAlt"];
        titel.innerHTML = element["imageAlt"];
        
        div.onclick = func;
        console.log(data);
        document.getElementById("MyProjects").appendChild(div);
      });
    })
    .catch((err) => console.log(err));
}
