function login() {

  myApp.showPreloader("Login in ....")

  $.ajax({
    url: server + "/web_login",
    method: "get",
    data: "username=" + $("#usr").val() + "&password=" + $("#pass").val(),
    type: "text",
    success: function(data) {
      myApp.hidePreloader()
      console.log(data);
      if (data.tag == "NO") {
        myApp.alert(data.message)
      } else {
        myApp.addNotification({
          message: "<span style='color:white;'>" + data.message + "</span>"
        })
        data = data.data
        localStorage.ehostels_id = data.id
        localStorage.ehostels_username = data.name
        localStorage.ehostels_email = data.email
        localStorage.ehostels_phone = data.phone
        localStorage.ehostels_photo = data.photo

        myApp.closeModal(".login")

      }

    },
    error: function(e) {
      console.log(e);
    }
  })


}

function register() {

  myApp.showPreloader("Signing you up ....")
  $.ajax({
    url: server + "/web_register",
    method: "get",
    data: $("#regdata").serialize(),
    type: "text",
    success: function(data) {
      myApp.hidePreloader()

      if (data.tag == "NO") {
        myApp.alert(data.message)
      } else {
        myApp.addNotification({
          message: "<span style='color:white;'>" + data.message + "</span>"
        })
        data = data.data
        localStorage.ehostels_id = data.id
        localStorage.ehostels_username = data.name
        localStorage.ehostels_email = data.email
        localStorage.ehostels_phone = data.phone
        localStorage.ehostels_photo = data.photo
        myApp.closeModal(".register")
      }

    },
    error: function(e) {
      myApp.hidePreloader()
      console.log(e);
    }
  })

}



function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log(profile);
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}


function signup() {
  var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
}
