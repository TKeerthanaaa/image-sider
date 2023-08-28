"use script";


const imageEle = document.querySelector(".image");
const nextBtnEle = document.getElementById("btn-next");
const previousBtnEle = document.getElementById("btn-previous");

// global variable
let index = 0;
const imageArr = [
  "image0.jpg",
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg",
];
const str = "./image/";

// functions
function init() {
  imageEle.src = `${str}${imageArr[0]}`;
}

const changeImage = () => {
  if (index < 0) {
    index = imageArr.length - 1;
  } else if (index >= 0 && index < imageArr.length) {
  } else if (index == imageArr.length) {
    index = 0;
  }
  imageEle.src = `${str}${imageArr[index]}`;
};

// eventlistener
nextBtnEle.addEventListener("click", () => {
  index += 1;
  changeImage();
});

previousBtnEle.addEventListener("click", () => {
  index -= 1;
  changeImage();
});

init();
