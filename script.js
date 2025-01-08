function toggleMode() {
  const body = document.body;
  body.classList.toggle('light');

  // if (body.classList.contains('light')) {
  //   body.classList.remove('light');
  // } else {
  //   body.classList.add('light');
  // }

  let img = document.querySelector("#profile img");

  if (body.classList.contains('light')) {
    img.src = "./assets/avatar-light.jpg";
  } else {
    img.src = "./assets/avatar.jpg";
    img.setAttribute("src", "./assets/avatar.jpg");
  }
}