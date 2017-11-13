/* global firebase */

function getVersion(handleVersion) {
  var database = firebase.database();
  var databaseVersionReference = database.ref('/db-search/version');
  databaseVersionReference.once('value').then(function(snapshot) {

    // You found me! Great job!
    // TODO: Uncomment the code below. It gets the current version value from
    // the database snapshot and passes it as an argument to the 'handleVersion'
    // callback.

    var version = snapshot.val();
    handleVersion(version);
  });
}

function getHelloWorldValue(handleType) {
  // TODO: Your code goes here. Hint: use 'getVersion' as a template.
  var database = firebase.database();
  var databaseVersionReference = database.ref('/db-search/hello-world');
  databaseVersionReference.once('value').then(function(snapshot) {

    var version = snapshot.val();
    handleType(version);
  });
}

function applyDiscount(handleNewPrice) {
  // TODO: Your code goes here.
  var database = firebase.database();
  var databaseVersionReference = database.ref('/db-search/discount');
  databaseVersionReference.once('value').then(function(snapshot) {

    var version = snapshot.val();
    handleNewPrice((version) * 100);
  });
}

function getArrayLength(handleLength) {
  // TODO: Your code goes here.
  var database = firebase.database();
  var databaseVersionReference = database.ref('/db-search/array');
  databaseVersionReference.once('value').then(function(snapshot) {

    var version = snapshot.val();
    handleLength(version.length);
  });
}

function getLastArrayElement(handleElement) {
  // TODO: Your code goes here.\
  var database = firebase.database();
  var databaseVersionReference = database.ref('/db-search/array');
  databaseVersionReference.once('value').then(function(snapshot) {

    var version = snapshot.val();
    handleElement(version.slice(-1)[0]);
  });
}

function getArrayJoin(handleJoin) {
  // TODO: Your code goes here.
  var database = firebase.database();
  var databaseVersionReference = database.ref('/db-search/array');
  databaseVersionReference.once('value').then(function(snapshot) {

    var version = snapshot.val();
    handleJoin(version.join(' '));
  });
}

function getNumberOrStringType(handleType) {
  // TODO: Your code goes here.
  var database = firebase.database();
  var databaseVersionReference = database.ref('/db-search/number-or-string');
  databaseVersionReference.once('value').then(function(snapshot) {

    var version = snapshot.val();
    handleType(typeof version);
  });
}

function getObjectValue(handleValue) {
  // TODO: Your code goes here.
  var database = firebase.database();
  var databaseVersionReference = database.ref('/db-search/object');
  databaseVersionReference.once('value').then(function(snapshot) {

    var version = snapshot.val();
    handleValue(Object.keys(version));
  });
}

function getObjectKeyCount(handleKeyCount) {
  // TODO: Your code goes here.
  var database = firebase.database();
  var databaseVersionReference = database.ref('/db-search/object');
  databaseVersionReference.once('value').then(function(snapshot) {

    var version = snapshot.val();
    handleValue(version.keys(value).length);
  });
}
