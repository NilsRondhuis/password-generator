const refs = {
  title: document.querySelector(".title"),
  inputPass: document.querySelector(".input-pass"),
  btnCopy: document.querySelector(".copy-btn"),
};

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
      .then(() => isShowMessage(title))
      .catch((err) => console.log(err));
  }
}

function isShowMessage(title) {
  const red = Math.round(Math.random() * (255 - 1) + 1);
  const green = Math.round(Math.random() * (255 - 1) + 1);
  const blue = Math.round(Math.random() * (255 - 1) + 1);

  title.style.color = `rgb(${red}, ${green}, ${blue})`;
  title.textContent = "Password Copied";
}
