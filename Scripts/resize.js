const el = document.querySelector("#resizer");

el.addEventListener("mousedown", (event) => {
    return; // remove to try
    const right = document.querySelector("#right");
    
    event.preventDefault();
  window.addEventListener("mousemove", moveDiv);
  window.addEventListener("mouseup", mouseup);
  
  let posX = event.clientX;
  
  function moveDiv(e) {
    let newPosX = posX -e.clientX;
    const rect = right.getBoundingClientRect();

    let width = rect.width + newPosX;
    right.style.width = width+"px";
    console.log(width);
}
function mouseup() {

    window.removeEventListener('mousemove',moveDiv);
    window.removeEventListener('mouseup',mouseup);
  }
});

