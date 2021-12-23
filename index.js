function getpass() {
  var chars = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ@$#@!&*()';
  var passwordlength = 14;
  var password = '';
  for (let i = 0; i < passwordlength; i++) {
    var randompassword = Math.floor(Math.random() * chars.length);
    password += chars.substring(randompassword, randompassword + 2);
  }
  document.getElementById('password').value = password;
}
