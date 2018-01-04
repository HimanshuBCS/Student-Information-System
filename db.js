var $ = document.querySelector.bind(document);

var db = new PouchDB('http://127.0.0.1:5984/Students');

// var db = new PouchDB('Students');

db.info().then(function (info) {
  console.log(info);
})
