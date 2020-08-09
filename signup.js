$(document).ready(function() {
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDWeunYR2dZIkcw0YjJVaaYkY44xZDkeR8",
    authDomain: "helix-hacks-d5b62.firebaseapp.com",
    databaseURL: "https://helix-hacks-d5b62.firebaseio.com",
    projectId: "helix-hacks-d5b62",
    storageBucket: "helix-hacks-d5b62.appspot.com",
    messagingSenderId: "289896922735",
    appId: "1:289896922735:web:328c0b19d494b9d7fd979a"
  };
  firebase.initializeApp(config);

  let guestBook = firebase.database().ref();

  function signGuestbook(name, comment) {
  $("#comments").append("<p><b>" + name + "</b><br/>" + comment + "</p>");
  }

  guestBook.on('child_added', function(guest) {
  if (guest.val().name && guest.val().comment) {
      signGuestbook(guest.val().name,guest.val().comment);
  }
  });

  $('#guestbook').submit(function(event) {
  event.preventDefault();
  // Add guest to guestbook
  guestBook.push({
    name: $('#name').val(),
    comment: $('#comment').val(),
  });

  $('#name').val('');
  $('#comment').val('');
  $('#name').focus();
  });

  function signGuestbook(name, comment) {
  const review = document.createElement('p');
  review.textContent = comment;

  const name = document.createElement('p');
  const bold = document.createElement('b');
  bold.textContent = name;
  name.appendChild(bold);

  document.getElementById('comments').appendChild(name);
  document.getElementById('comments').appendChild(review);
}

});