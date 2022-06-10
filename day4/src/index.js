const h1 = document.createElement("h1");
h1.innerText = "Hello!!";
h1.style.color = "white";
document.body.appendChild(h1);

function resizeWindow() {
  if (window.innerWidth <= 480) {
    document.body.bgColor = "tomato";
  } else if (window.innerWidth > 480 && window.innerWidth <= 960) {
    document.body.bgColor = "wheat";
  } else if (window.innerWidth > 960 && window.innerWidth <= 1440) {
    document.body.bgColor = "teal";
  } else {
    document.body.bgColor = "aquamarine";
  }
}

window.addEventListener("resize", resizeWindow);
