var button = document.getElementById('clicker'),
    count = 0;
button.onclick = function() {
    count += 1;
  button.innerHTML = "Click Me Partner: " + count;
};
var reset =
document.getElementById('reset')
reset.onclick = function() {
  count = 0;
  button.innerHTML = "Start Yee Again: " + count;
};
