window.onload = function () //executes when the page finishes loading
{
  setTimeout(func1, 2000); //sets a timer which calls function func1 after 2,000 milliseconds = 2 secs.
  setTimeout(func2, 10000); //sets a timer which calls function func1 after 10,000 milliseconds = 10 secs.
};

function func1() {
  document.getElementById("alert-section").className = "show";
}
function func2() {
  document.getElementById("alert-section").className = "hide";
}
