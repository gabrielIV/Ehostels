function show_preloader() {

  $("#main-card").css("max-width", "350px")
  $("#main-card").css("min-height", "304px")

  $("#signup_card").addClass("slideOutDown");
  $("#progress_card").show()
  $("#signup_card").css("position", "absolute")


}

function hide_preloader() {

  $("#main-card").css("max-width", "350px")
  $("#main-card").css("min-height", "304px")

  $("#signup_card").removeClass("slideOutUp");
  setTimeout(function () {
    $("#progress_card").show()
    $("#signup_card").css("position", "relative")
  }, 1000);


}


function payment_after_register() {
  $("#main-card").css("max-width", "736px")
  $("#main-card").css("max-height", "491px")

  $("#progress_card").toggleClass("slideInDown slideOutUp")
  $("#progress_card").css("position", "absolute")

  $("#payment_card").show()
  signup_timer()

  $("#main-card").css("max-width", "unset")
  $("#main-card").css("max-height", "unset")
}

function show_success() {

  $("#success_card").show()
  $("#payment_card").hide()

}

function show_error() {

  $("#error_card").show()
  $("#payment_card").hide()

}

function show_payment() {


  signup_timer()
  $("#success_card").hide()
  $("#error_card").hide()
  $("#payment_card").show()

}





var initialTime = 60

function signup_timer() {
  timeoutStatus = true

  var i = setInterval(function() {
    initialTime--;
    if (initialTime == 0) {
      clearTimeout(i)
      $("#timer").html("0" + initialTime)
      if (!status_paid) {

        show_error()
      }
      timeoutStatus = false
    }
    $("#timer").html(initialTime)
  }, 1000);

}

timeoutStatus = true


function check_payment() {


  $.ajax({
    url: 'http://admin.ehostels.chukabiz.com/api/site/register/check',
    type: 'post',
    dataType: 'json',
    crossDomain: true,
    contentType: 'application/json',
    data: JSON.stringify({
      "user_id": userId
    }),
    success: function(data) {
      console.log(data);
      if (data.state == "2" && timeoutStatus) {

        setTimeout(function() {
          check_payment()
        }, 5000);
      } else if (data.state == "11") {
        show_success()
      }

    },

  });

}

status_paid = true

function requestSTKPush() {

  $.ajax({
    url: 'http://admin.ehostels.chukabiz.com/api/site/register/request/stk/latest',
    type: 'post',
    dataType: 'json',
    crossDomain: true,
    contentType: 'application/json',
    data: JSON.stringify({
      "user_id": userId,
      "phone_number": $('input[name=phone_number]').val()
    }),
    success: function(data) {
      console.log(data);
      status_paid = true

      check_payment()

    },

  });

}


function verifyPassCode() {

  $.ajax({
    url: 'http://admin.ehostels.chukabiz.com/api/site/login',
    type: 'post',
    dataType: 'json',
    crossDomain: true,
    contentType: 'application/json',
    data: JSON.stringify({
      "usr": $('input[name=phone_number]').val(),
      "code": $('input[name=code]').val()
    }),
    success: function(data) {
      console.log(data);
      if (data.tag == "0") {



        window.location="index.html?"+data.identity+"|||"+data.token
      }else {
        $(".error_pass").show()

        $(".error_pass").html(data.message[0]);
        setTimeout(function () {
              $(".error_pass").hide()
        }, 2000);
      }

    },
    error: function(e) {
      console.error(e);
    }

  });


}
