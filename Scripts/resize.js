const el = document.querySelector("#resizer");
var mouseIsDown = false;

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
    }
  }, 100);

  /**
   * calculate the difference between mouse position and the rectangle right offset to the width.
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



function resizeGallery(size) {
  
  var left = document.getElementById("left");
  var right = document.getElementById("right");
  let img = document.querySelector(".polaroid");

  right.style.transitionDelay = "0.2s";
  left.style.transition = "1s";
  right.style.transition = "1s";
  
  
  if (!galleryScaled) {
    galleryScaled = true;
    left.style.width ="30%";
    setTimeout(() => {
      
      right.style.maxWidth = "95%";
      right.style.width = "50%";
    }, 100);
    

    right.style.overflowY="scroll";

  } else {
    resetGallery();
  }
}

function resetGallery(){

  galleryScaled = false;
  right.style.width = "auto";
  right.style.maxWidth = "35ch";
  left.style.width = "50%";
  right.style.overflow="hidden";
}
galleryScaled = false;