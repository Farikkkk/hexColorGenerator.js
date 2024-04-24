const text = document.querySelector("#text");
const generateCode = document.querySelector("#generate_code");
const copyResult = document.querySelector("#copy_result");

function myColor() {
  const color = document.querySelector("#color").value;
  text.value = color;
  document.body.style.backgroundColor = color;
}

function copyInputText() {
  //   let inputText = text.value;
  navigator.clipboard.writeText(text.value);
}

generateCode.addEventListener("click", myColor);
copyResult.addEventListener("click", copyInputText);
