/**
 * on click resize the gallery, while mouse button held down resize by drag and drop
 */

const el = document.querySelector("#resizer");
var mouseIsDown = false;
var galleryScaled = false;

el.addEventListener("mousedown", (e) => {
  const right = document.querySelector("#right");

  e.preventDefault();
  window.addEventListener("mouseup", mouseup);

  mouseIsDown = true;

  setTimeout(() => {
    console.log("slept");
    if (mouseIsDown) {
      console.log("mouse is down");
      window.addEventListener("mousemove", mousemove);
    } else {
      console.log("mouse was clicked");
      //resizeGallery(50);
      if (!galleryScaled) {
        right.style.width = "35vw";
        galleryScaled = true;
      } else {
        right.style.width = "50px";
        galleryScaled = false;
      }
    }
  }, 100);

  /**
   * calculate the difference between mouse position and the rectangle right offset and add to width.
   * @param {event} e
   */
  function mousemove(e) {
    const rect = right.getBoundingClientRect();

    let newWidth = rect.right - e.clientX;

    if (newWidth > 20) {
      right.style.width = newWidth + "px";
    }
  }

  function mouseup() {
    window.removeEventListener("mousemove", mousemove);
    window.removeEventListener("mouseup", mouseup);
    mouseIsDown = false;
  }
});




