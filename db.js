var $ = document.querySelector.bind(document);

var db = new PouchDB('Student');

db.info().then(function (info) {
  console.log(info);
})
