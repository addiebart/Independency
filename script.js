/* navbar */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

/* check for cookies; first run */
const cookie = document.cookie;
if (!cookie.contains("firstRun"))