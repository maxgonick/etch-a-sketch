const gridContainer = document.querySelector(".grid-container");

//Create divs
for (let i = 0; i < 16; i++) {
  let temp = document.createElement("div");
  gridContainer.appendChild(temp);
  temp.style.width = "2vw";
  temp.style.minHeight = "2vh";
  temp.style.border = "0.125rem solid";
}
