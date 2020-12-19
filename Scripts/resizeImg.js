
    var main = document.querySelector(".main");
    var hero = document.querySelector("#hero-img");
    let imgContainer = document.querySelector(".resume-hero");
    window.addEventListener("load", resize);
    window.addEventListener("resize", resize);

    function resize() {
      let offsetWidth = hero.getBoundingClientRect().left;
      main.style.width = offsetWidth + "px";
      console.log(window.innerWidth < 1300);

      if (window.innerWidth < 1000) {
        hero.src = "../Media/portrait/weißes hemd.jpg";
        hero.style.width = "100%";
        hero.style.height = "auto";
        if (hero.getBoundingClientRect().height < 500) {
          main.style.top = hero.getBoundingClientRect().height + "px";
        } else {
          main.style.top = "500px";
        }

        main.style.width = "90%";
        main.style.left = "5%";
      } else {
        hero.src = "../Media/portrait/panorama.jpg";
        hero.style.height = "100%";
        hero.style.width = "auto";
        main.style.width = hero.getBoundingClientRect().left + "px";
        main.style.top = "6vh";
        main.style.MaxHeight = "94vh";
      }
    }
