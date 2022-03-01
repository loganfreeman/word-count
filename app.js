var request = require("request");
var fs = require("fs");

var formData = {
  count: 5,
  my_field: "file",
  my_file: fs.createReadStream("./message.txt"),
};
request.post(
  { url: "http://localhost:5000/api/v1/uploads", formData: formData },
  function optionalCallback(err, httpResponse, body) {
    if (err) {
      return console.error("upload failed:", err);
    }
    console.log("Upload successful!  Server responded with:", body);
  }
);
