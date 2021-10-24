function log(cb) {
  console.log("Log something");
  cb();
}

function callback() {
  console.log("Callback log");
}

log(callback);
