const gridContainer = document.querySelector(".grid-container");

//Create divs
for (let i = 0; i < 4; i++) {
  let temp = document.createElement("div");
  gridContainer.appendChild(temp);
  temp.style.width = "12vw";
  temp.style.minHeight = "12vh";
  temp.classList.add("grid-child");
  temp.style.borderTop = "0.0625rem solid";
  temp.style.borderLeft = "0.0625rem solid";
  temp.style.borderBottom = "0.0625rem solid";
}

for (let i = 0; i < 4; i++) {
  let temp = document.createElement("div");
  gridContainer.appendChild(temp);
  temp.style.width = "12vw";
  temp.style.minHeight = "12vh";
  temp.classList.add("grid-child");
  temp.style.borderLeft = "0.0625rem solid";
  temp.style.borderBottom = "0.0625rem solid";
}

for (let i = 0; i < 4; i++) {
  let temp = document.createElement("div");
  gridContainer.appendChild(temp);
  temp.style.width = "12vw";
  temp.style.minHeight = "12vh";
  temp.classList.add("grid-child");
  temp.style.borderLeft = "0.0625rem solid";
  temp.style.borderBottom = "0.0625rem solid";
}

for (let i = 0; i < 4; i++) {
  let temp = document.createElement("div");
  gridContainer.appendChild(temp);
  temp.style.width = "12vw";
  temp.style.minHeight = "12vh";
  temp.classList.add("grid-child");
  temp.style.borderLeft = "0.0625rem solid";
  temp.style.borderBottom = "0.0625rem solid";
}
