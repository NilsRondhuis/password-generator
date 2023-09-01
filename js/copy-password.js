const refs = {
  title: document.querySelector(".title"),
  inputPass: document.querySelector(".input-pass"),
  btnCopy: document.querySelector(".copy-btn"),
};

const colors = [
  "#FFFFFF",
  "#000000",
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#FF00FF",
  "#00FFFF",
  "#FFA500",
  "#800080",
];

refs.btnCopy.addEventListener("click", copyPassword);

function copyPassword() {
  const { inputPass, title } = refs;
  if (inputPass.value === "") {
    return;
  }

  if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
    const copyInput = document.createElement("input");
    copyInput.style.position = "fixed";
    copyInput.style.opacity = "0";
    copyInput.value = inputPass.value;

    document.body.appendChild(copyInput);
    copyInput.select();
    document.execCommand("copy");
    document.body.removeChild(copyInput);

    isShowMessage(title);
  } else {
    navigator.clipboard
      .writeText(inputPass.value)
      .then(() => isShowMessage(title, colors))
      .catch((err) => console.log(err));
  }
}

function isShowMessage(title, colors) {
  const currentColor = Math.round(Math.random() * (colors.length - 1) + 1);

  // const red = Math.round(Math.random() * (255 - 1) + 1);
  // const green = Math.round(Math.random() * (255 - 1) + 1);
  // const blue = Math.round(Math.random() * (255 - 1) + 1);

  // title.style.color = `rgb(${red}, ${green}, ${blue})`;

  title.style.color = colors[currentColor];

  title.textContent = "Password Copied!";
}
