function listenToUser() {
  let secondCr7 = document.getElementById("second-cr7");
  secondCr7.addEventListener("click", hideSecondCr7);
}

function hideSecondCr7() {
  let secondCr7 = document.getElementById("second-cr7");
  secondCr7.style.visibility = "hidden";
}

listenToUser();