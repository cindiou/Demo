const oDiv = document.querySelector(".box");
let isPainting = false;

const isInTouch = "ontouchstart" in document.documentElement;
// console.log(isInTouch);

const creatDiv = (e) => {
  console.log(e);
  const newDiv = document.createElement("div");
  newDiv.style.width = 10 + "px";
  newDiv.style.height = 10 + "px";
  newDiv.style.backgroundColor = "black";
  newDiv.style.borderRadius = "50%";

  newDiv.style.position = "absolute";
  newDiv.style.left = e.clientX + "px";
  newDiv.style.top = e.clientY + "px";
  return newDiv;
};

if (isInTouch) {
  oDiv.ontouchmove = (e) => {
    const p = e.touches[0];
    // console.log(p);

    const newDiv = creatDiv(p);
    oDiv.appendChild(newDiv);
  };
} else {
  oDiv.onmousedown = (e) => {
    //   alert("hello");
    isPainting = true;
  };

  oDiv.onmousemove = (e) => {
    if (isPainting) {
      // alert("Hi");
      const newDiv = creatDiv(e);
      oDiv.appendChild(newDiv);
    }
  };

  oDiv.onmouseup = () => {
    isPainting = false;
  };
}
