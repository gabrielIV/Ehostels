
server="/Ehostels/admin/web/api"

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      } 
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
}
// fetch()

function user_log() {
var t=""
if (localStorage.ehostels_id==undefined) {
t='<a href="#" class="link" style="color:#484848; margin:0px 10px;" onclick="myApp.popup(\'.login\')">Login</a>'
}else {
  t='<div class="background" onclick="load(\'account\')" style=" margin-left: 10px;width:50px;height:50px;border-radius:50px; display: inline-block;background-image:url('+localStorage.ehostels_photo+');background-color:whitesmoke;vertical-align: top;margin-top: -15px;border: 1px solid rgba(0,0,0,0.2);"></div>'
}
return t;
}

// getcartegories()

function setup() {
  $(".name").html(localStorage.ehostels_username)
$(".email").html(localStorage.ehostels_email)

// $(".loginlink").replaceWith('<div class="background" onclick="load(\'account\')" style=" margin-left: 10px;width:50px;height:50px;border-radius:50px; display: inline-block;background-image:url('+localStorage.ehostels_photo+');background-color:whitesmoke;vertical-align: top;margin-top: -15px;border: 1px solid rgba(0,0,0,0.2);"></div>')
$(".login_button").hide()
$(".user_image").css("background-image","url(img/"+localStorage.ehostels_photo+")").show()
}

if (localStorage.ehostels_id) {
  setup()
}

// search_params()

$("form").submit(function(e) {
  e.preventDefault()

  find($(this).find("input"))
})
