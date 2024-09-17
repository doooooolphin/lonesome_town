
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
//document.body.appendChild(newImg);


const image = document.getElementById('img');
//image.src = "image.png";
canvas.width = 500;
canvas.height = 500;

function goop() {
  ctx.drawImage(image, 0, 0, 233, 320);

  const imageData = ctx.getImageData(10, 20, 80, 230);
  console.log(imageData);
}
image.addEventListener("load", () => {
  goop();
});