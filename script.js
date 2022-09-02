const gridContainer = document.querySelector(".grid-container");
const sideSize = 10;
const size = sideSize * sideSize;
const hoverState = document.querySelector(".grid-child:hover");

gridContainer.style.gridTemplateColumns = `repeat(${sideSize}, ${
  32 / sideSize
}rem)`;

//Create divs
for (let i = 0; i < sideSize; i++) {
  if (i == 0 || i == sideSize) {
    for (let j = 0; j < sideSize; j++) {
      let temp = document.createElement("div");
      gridContainer.appendChild(temp);
      temp.style.width = `${32 / sideSize}rem`;
      temp.style.height = `${32 / sideSize}rem`;
      temp.classList.add("grid-child");
      temp.style.borderTop = "2px solid";
      temp.style.borderLeft = "2px solid";
      temp.style.borderBottom = "2px solid";
    }
  } else {
    for (let j = 0; j < sideSize; j++) {
      let temp = document.createElement("div");
      gridContainer.appendChild(temp);
      temp.style.width = `${32 / sideSize}rem`;
      temp.style.height = `${32 / sideSize}rem`;
      temp.classList.add("grid-child");
      temp.style.borderLeft = "2px solid";
      temp.style.borderBottom = "2px solid";
    }
  }
}

const gridChild = document.querySelectorAll(".grid-child");

for (let i = 0; i < sideSize; i++) {
  gridChild.item(sideSize - 1 + sideSize * i).style.borderRight = "2px solid";
}

gridChild.forEach((element) => {
  element.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "black";
  });
});
