var detailsOpen = false;
var selectedLanguage = document.documentElement.lang;

/**
 * build an overlay box to display
 * @param {int} id
 * @param {string} image
 */
function showDetails(id, image) {
  console.log(id, image);
  const projects = document.querySelectorAll(".Projects");
  const projectContainer = document.getElementById("MyProjects");
  const mail = document.getElementById("mail");
  const hero = document.getElementById("home");

  let background = document.createElement("DIV");
  let pictureContainer = document.createElement("DIV");
  let infotextContainer = document.createElement("DIV");
  let contentContainer = document.createElement("DIV");
  let closerDiv = document.createElement("DIV");
  let closer = document.createElement("p");
  let visitButton = document.createElement("button");
  let viewCode = document.getElementById("details-visit-button");

  if (detailsOpen) {
    projectContainer.removeChild(background);
    detailsOpen = false;
    showDetails(textfile, image);
  } else {
    detailsOpen = true;

    infotextContainer.className = "details-text";
    background.className = "details-container";
    background.id = "details";
    contentContainer.className = "details-content-container";
    pictureContainer.className = "details-container-picture";

    /*
    create background
    */

    projectContainer.appendChild(background);

    blur();

    /**
     * create content
     */

    closer.innerHTML = "X";
    closer.id = "closer";
    background.appendChild(closerDiv);
    background.appendChild(contentContainer);
    contentContainer.appendChild(pictureContainer);
    contentContainer.appendChild(infotextContainer);
    closerDiv.appendChild(closer);

    let html = "<img class='details-image' src = '" + image + "'/>";

    pictureContainer.innerHTML = html;

    /**
     * highlight closer icon
     */
    closer.addEventListener("mouseover", (event) => {
      event.target.style.color = "#fff";
    });
    closer.addEventListener("mouseleave", (event) => {
      event.target.style.color = "#ccc";
    });

    closer.addEventListener("click", () => {
      closeDetails();
    });
    getText(id, infotextContainer);

    background.style.top = scrollY + 54 + "px";

    window.addEventListener("scroll", () => {
      console.log(window.scrollY);

      background.style.top = scrollY + 54 + "px";
    });
  }
}

/**
 * close the details window and unblur background
 */
function closeDetails() {
  console.log("closeDetails");
  if (!detailsOpen) {
    return;
  }
  detailsOpen = false;
  let projectsContainer = document.getElementById("MyProjects");
  let details = document.getElementsByClassName("details-container")[0];
  projectsContainer.removeChild(details);
  unBlur();
}

/**
 *  unblur the content of the background
 */
function unBlur() {
  const projects = document.querySelectorAll(".Projects");
  const mail = document.getElementById("mail");
  const hero = document.getElementById("home");
  const text = document.getElementsByClassName("content-text");
  const content = document.getElementsByClassName("content-container");

  for (let x = 0; x < text.length; x++) {
    text[x].style.filter = "blur(0px)";
  }
  for (let x = 0; x < content.length; x++) {
    content[x].style.filter = "blur(0px)";
  }

  projects.forEach((element) => {
    element.style.filter = "blur(0px)";
  });
  mail.style.filter = "blur(0px)";
  home.style.filter = "blur(0px)";
}
/**
 * blur the content of all visible elements
 */
function blur() {
  const projects = document.querySelectorAll(".Projects");
  const mail = document.getElementById("mail");
  const hero = document.getElementById("home");
  const text = document.getElementsByClassName("content-text");
  const content = document.getElementsByClassName("content-container");

  for (let x = 0; x < text.length; x++) {
    text[x].style.filter = "blur(10px)";
  }
  for (let x = 0; x < content.length; x++) {
    content[x].style.filter = "blur(10px)";
  }
  projects.forEach((element) => {
    element.style.filter = "blur(10px)";
  });
  mail.style.filter = "blur(10px)";
  home.style.filter = "blur(10px)";
}

/**
 * fetch textdata from local files and fill the details
 * @param {int} id
 * @param {string} container
 */

function getText(id, container) {
  fetch("details.json")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return new Error("no data found");
      }
    })
    .then((data) => {
      container.innerHTML = data[id].info;
    })
    .catch((error) => {
      console.log(error);
    });
}

function getImage(id) {
  fetch("details.json")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return new Error("sorry no picture");
      }
    })
    .then((data) => {
      console.log(data[id].picture);
      return data[id].picture;
    })
    .catch((err) => {
      console.error(err);
    });
}

window.addEventListener("scroll", () => {
  if (scrollY > 50) {
    $(".nav_list").css("box-shadow", "1px 1px 3px 1px #333");
  } else {
    $(".nav_list").css("box-shadow", "none");
  }
});

function showLanguages() {
  let languages = document.getElementById("nav-language");
  languages.style.height = "auto";
  languages.style.top = "0";
}
function resetHeight() {
  let languages = document.getElementById("nav-language");
  languages.style.height = "15px";
  languages.style.top = "10px";
}
/**
 * shows an element with infotext
 *
 * @param {int} id
 */
function showInfo(id) {
  let info = document.getElementsByClassName("info-box");

  fetch("info.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data, data[id]);
      info[id].innerHTML = data[id].description;
    });
  info[id].style.display = "inline";
  for (let i = 0; i < 1; i += 0.1) {
    setTimeout(() => {
      info[id].style.opacity = i;
    }, 0);
  }
}
/**
 * hide the text for the element with the id
 * @param {int} id
 */
function hideInfo(id) {
  let info = document.getElementsByClassName("info-box");

  info[id].style.opacity = 0;
  info[id].style.display = "none";
}

/**
 * select the langage
 * @param {string} language
 */

function changeLanguage(language) {
  if (language === selectedLanguage) {
    return;
  } else {
    window.location.href = "index-" + language + ".html";
  }
}
/**
 * hide and unhide selected container
 * @param {int} index 
 */
function showCode(index) {
  let container = document.querySelectorAll(".script-container");
  if (index <0) {
    console.log("hide");
    for (let i = 0; i < container.length; i++) {
      container[i].style.display = "none";
    }
    return;
  } else {

    for (let i = 0; i < container.length; i++) {
      container[i].style.display = "none";
    }

    container[index].style.display = "block";
  }
}
