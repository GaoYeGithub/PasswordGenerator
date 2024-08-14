fetch('/get_password')
  .then(response => response.json())
  .then(data => {
    var pass1 = data.password;
    var password = '';
    password = prompt('Please enter your password!');
    if (password == pass1) {
      alert('Password Correct! Click OK to enter!');
    } else {
      location = "https://password-security.hariom04.repl.co/";
    }
  });

function getPassword() {
  var chars = "0123456789abcdefghijklmnopqrstuvwxtzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><:{}[]";
  var passwordLength = 10;
  var password = '';

  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  document.getElementById("password").value = password;
}
