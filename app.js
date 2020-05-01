const fileInput = document.querySelector(".file_input");
const JSZip = require("jszip");
const saveAs = require("file-saver").saveAs;
const zip = new JSZip();

fileInput.addEventListener("change", function () {
  const files = fileInput.files;
  console.log(files);

  /* Create a folder containing the zip files */
  for (const file of files) {
    const filename = file.name;
    zip.file(filename, file);
  }

  console.log("Done");

  /* Download the file */
  // zip.generateAsync({ type: "blob" }).then(function (blob) {});

  zip
    .generateAsync({ type: "blob" }, function updateCallback(metadata) {
      console.log("progression: " + metadata.percent.toFixed(2) + " %");
      if (metadata.currentFile) {
        console.log("current file = " + metadata.currentFile);
      }
    })
    .then(function (blob) {
      saveAs("name.zip",blob);
    });
});
