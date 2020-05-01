const fileInput = document.querySelector(".file_input");

fileInput.addEventListener("change", function () {
  const files = fileInput.files;
  console.log(files);
});
