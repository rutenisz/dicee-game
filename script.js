document.addEventListener("DOMContentLoaded", function () {
  const imgElement1 = document.querySelector(".img1");
  const imgElement2 = document.querySelector(".img2");
  const h1Element = document.querySelector("h1");

  const randomNumber1 = Math.floor(Math.random() * 6) + 1;
  const randomNumber2 = Math.floor(Math.random() * 6) + 1;

  imgElement1.src = `./images/dice${randomNumber1}.png`;
  imgElement2.src = `./images/dice${randomNumber2}.png`;

  let result;
  if (randomNumber1 > randomNumber2) {
    result = "Player 1 wins!";
  } else if (randomNumber2 > randomNumber1) {
    result = "Player 2 wins!";
  } else {
    result = "It's a draw!";
  }

  h1Element.textContent = result;
});
