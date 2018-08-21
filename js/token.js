
// alert("ok")
var local_token = localStorage['token'];
if (!local_token) {
// window.location = "landing.html"
}


$.ajaxSetup({
    headers: {
    'Authorization': 'Bearer ' + local_token
    }
});

    // includeHTML();
