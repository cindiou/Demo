const oDiv = document.querySelector(".box");
let isPainting = false;

oDiv.onmousedown = (e) => {
  //   alert("hello");
  isPainting = true;
};

oDiv.onmousemove = (e) => {
  if (isPainting) {
    // alert("Hi");
    const newDiv = document.createElement("div");
    newDiv.style.width = 10 + "px";
    newDiv.style.height = 10 + "px";
    newDiv.style.backgroundColor = "black";
    newDiv.style.borderRadius = "50%";

    newDiv.style.position = "absolute";
    newDiv.style.left = e.clientX + "px";
    newDiv.style.top = e.clientY + "px";

    oDiv.appendChild(newDiv);
  }
};

oDiv.onmouseup = () => {
  isPainting = false;
};
