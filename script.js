const gridContainer = document.querySelector(".grid-container");
let sideSize = 10;
let size = sideSize * sideSize;
const hoverState = document.querySelector(".grid-child:hover");
const resizeButton = document.querySelector("#side-prompt");
const resetButton = document.querySelector("#reset-button");

//Create divs
function createDivs(sideSize) {
  const gridChildInitial = document.querySelectorAll(".grid-child");

  gridChildInitial.forEach((element) => {
    gridContainer.removeChild(element);
  });

  gridContainer.style.gridTemplateColumns = `repeat(${sideSize}, ${
    32 / sideSize
  }rem)`;

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

  let gridChild = document.querySelectorAll(".grid-child");
  //Fixing borders
  for (let i = 0; i < sideSize; i++) {
    gridChild.item(sideSize - 1 + sideSize * i).style.borderRight = "2px solid";
  }

  //Adding "trail"
  gridChild.forEach((element) => {
    element.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "black";
    });
  });
}
resizeButton.addEventListener("click", (event) => {
  while (true) {
    let temp = prompt(
      "Please enter the new sizing (ex. 9 for a 9x9 grid) Max Size is 10x10"
    );
    if (parseInt(temp) > 0 && parseInt(temp) <= 10) {
      sideSize = parseInt(temp);
      createDivs(sideSize);
      break;
    }
  }
});

resetButton.addEventListener("click", (event) => {
  let childList = document.querySelectorAll(".grid-child");
  childList.forEach((element) => {
    element.style.backgroundColor = "white";
  });
});

createDivs(sideSize);
