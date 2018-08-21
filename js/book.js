var currentroom = 0;

function book(cc, el) {
  if (localStorage.ehostels_id == undefined) {
    myApp.closeModal(".booker1")
    myApp.popup(".login")
  } else {

    cl(cc, el)

  }
}


function cl(cc, el) {
  var cal = $(el).parent().find(".cal_" + cc).val()
  var tenant = $(el).parent().find(".tenants_" + cc).val()
  var date = $("#cal_" + cc).val()
  var tenants = $("#tenants_" + cc).val()
  myApp.showPreloader("Checking ....")
  $.ajax({
    url: server + "/web_book_a_hostel",
    method: "get",
    data: "user_id=" + localStorage.ehostels_id + "&hostel_room_id=" + current_room + "&period_id=" + cal + "&amenity_id=" + tenant + "&description=i want this",
    type: "text",
    success: function(data) {
      console.log(data);
      myApp.hidePreloader()
      myApp.alert(data.message)

    },
    error: function(e) {
      myApp.hidePreloader()
      myApp.addNotification({
        message: "<span style='color:white;'>There was an error plese try again .</span>"
      })
      console.log(e);
    }
  })
}



function removeOptions(selectbox) {
  for (var i in selectbox) {
    selectbox.remove(i)
  }
}

function setprice(data, cc) {

  current_room = data.id

  $(".price_" + cc).html(parseInt(data.price[0].value).toLocaleString())
  if (data.booking[0].tag == "NO") {
    myApp.alert("Sorry this room Cartegory is <b>not available</b> for booking")
  } else {

    var dd = document.getElementsByClassName("cal_" + cc);

    for (var x in dd) {
      dropDown = dd[x]

      removeOptions(dropDown)
      $.each(data.booking[0].periods, function(num, val) {
        var newOption = document.createElement('option');
        newOption.text = val.name;
        newOption.value = val.id;
        try {

          dropDown.add(newOption, null);
        } catch (e) {}

        // $(".cal_"+cc).append("<option value='"+val.name+"'>"+val.name+"</option>")

      })
      calculator("#cal_" + cc)

    }


    var dd = document.getElementsByClassName("tenants_" + cc);

    for (var x in dd) {
      dropDown = dd[x]
      removeOptions(dropDown)
      $.each(data.booking[0].amenities, function(num, val) {

        var newOption = document.createElement('option');
        newOption.text = val.name;
        newOption.value = val.id;
        try {
          dropDown.add(newOption, null);
        } catch (e) {}

        // $(".cal_"+cc).append("<option value='"+val.name+"'>"+val.name+"</option>")

      })

    }
  }

}

curretid = 0

function calculator2(el) {

  var cc = pgi
  var i = $(el).parent().attr("desktop")
  console.log(i);
  var cal, tenants
  if (i == "true") {
    cal = $(".desktop .cal_" + cc).val()
    tenants = $(".desktop .tenants").val()
  } else {
    cal = $(".mobile .cal_" + cc).val()
    tenants = $(".mobile .tenants_").val()
  }


  // console.log(current_hostel,cal,tenants);
  var d = prices[current_room + ""][cal + ""][tenants + ""]
  $(".sprices_" + cc).html("")

  var total = 0
  for (x in d) {
    $(".sprices_" + cc).append('<tr> <td style="text-transform:lowercase;height:38px;">' + d[x].type + '</td> <td style="height:38px;">kshs  ' + d[x].value.toLocaleString() + '</td> </tr>')
    total += d[x].value
  }

  $(".prc_" + current_room).html(parseInt(total).toLocaleString())
  $(".price_" + cc).html(parseInt(total).toLocaleString())



}

function calculator(el) {

  var parent=$(el).parent().parent().parent()
  // console.log(parent);
  var json=JSON.parse($(parent).attr("price"))
  console.log(json);

  var date=$(parent).find(".book-dates").val()
  var tenants=$(parent).find(".book-tenants").val()
  console.log(date,tenants);
  console.log(json[date][tenants]);

}

$(document).on('change','.book-input',function () {

// calculator(this)

})

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

$("#book-data").appendTo("#book-content")
}
