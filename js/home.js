function fetch() {


  $.ajax({
    url: server + "/web_hostels",
    method: "post",
    data: "",
    type: "text",
    success: function(data) {
      $("#items").html("")
      $.each(data, function(num, val) {

        console.log(val);


        $("#hostels").append(item(val))

      })
    },
    error: function(e) {
      console.log(e);
    }
  })

}

function getrating(num) {
  var n = 5 - num;
  var str = ""
  while (num--) {
    str += '<i class="material-icons" style="color:gold">star</i>'
  }
  while (n--) {
    str += '<i class="material-icons" style="color:gray">star</i>'
  }
  return str;
}

function getfeatures(arr) {
  str = ""
  // <i class="mr-2 fas fa-users"></i>
  console.log(arr);
  for (s in arr) {
    str += '<div class="d-inline-block mr-5">' +
          '            <img src="http://admin.ehostels.chukabiz.com/api/web/image/'+ arr[s].icon +'/get" class="mr-2" style="width:25px;"> ' + arr[s].name +

      '  </div>'

  }
  return str;
}



var current_room = 0
var prices = {}

function getrooms(id) {
  addreviews()
  cc = pgi
  $.ajax({
    url: server + "/web_hostel_rooms_view_h",
    method: "get",
    data: "hostel_id=" + id,
    type: "text",
    success: function(data) {
      var str = ""
      console.log(data);

      $("#bkr" + cc).css("display", "block")
      $.each(data, function(num, val) {
        prices[val.id + ""] = {}

        for (var i in val.price) {
          if (prices[val.id + ""] == undefined) prices[val.id + ""] = {}
          if (prices[val.id + ""][val.price[i].period_id] == undefined) prices[val.id + ""][val.price[i].period_id] = {}
          if (prices[val.id + ""][val.price[i].period_id][val.price[i].amenity_id] == undefined) prices[val.id + ""][val.price[i].period_id][val.price[i].amenity_id] = []

          prices[val.id + ""][val.price[i].period_id][val.price[i].amenity_id].push({
            value: val.price[i].value,
            type: val.price[i].type
          })
        }

        $(".book-pricing").attr("price",JSON.stringify(prices))

        var a = ""
        if (num == 0) {
          current_room = val.id
          a = "accordion-item-expanded"
          setprice(val, cc)
        }

        str += '<li class="accordion-item ' + a + '"><a href="#" class="item-link item-content" onclick=\'setprice(' + JSON.stringify(val) + ',' + cc + ')\'>' +
          '        <div class="item-inner">' +
          '          <div class="item-title" style="width:100%;"><b>' + (num + 1) + '. ' + val.name + '</b>  <div class="bg-blue" style="float:right;padding:5px;color:white;position: abolute;right: -5px;bottom: 10px;font-size:14px"><img src="img/tag.png" style="margin-left: -25px;width:20px;position:absolute;margin-top: -7px;height: 33px;"><span style="vertical-align:top;color: white;">Kshs <span class="prc_' + val.id + '" style="color:white;">' + parseInt(val.price[0].value).toLocaleString() + '</span> </span></div></div>' +
          '        </div></a>' +
          '      <div class="accordion-item-content" style="border-left: 1px solid #f5f5f5;border-right: 1px solid #f5f5f5;background:white;">' +
          '        <div class="content-block">' +
          '        <p><img onclick=\'viewimg(' + JSON.stringify(val.images) + ')\' src="' + val.images[0].img + '" style="width:150px;margin:5px;" align="left">' + getfeatures(val.features) + '<br>' + val.description + '</p>'

          +
          '        <div class="chip">' +
          '          <div class="chip-label"><b>Room ' + rand(1, 99) + '</b></div>' +
          '        </div>'

          +
          '        <div class="chip">' +
          '          <div class="chip-label"><b>Room ' + rand(1, 99) + '</b></div>' +
          '        </div>'

          +
          '        <div class="chip">' +
          '          <div class="chip-label"><b>Room ' + rand(1, 99) + '</b></div>' +
          '        </div>'

          +
          '        </div>' +
          '      </div>' +
          '    </li>'

      })

      $(".rooms" + id).html(str)

      //request for calculation from fethed data using the pgi unque id 'cc'
      calculator("#cal_" + cc)



    },
    error: function(e) {
      console.log(e);
    }
  })

}

var cartegories = {}

function getcartegories() {

  $.ajax({
    url: server + "/web_categories",
    method: "get",
    data: "",
    type: "text",
    success: function(data) {

      console.log(data);
      cartegories = data
      $.each(data.HOSTEL, function(num, val) {


        $("#cartegorys").append('<div class="card background cart-box" onclick="viewcc(' + val.id + ')">' +
          '    <div style="height:calc(100% - 10px);width:100%;background-color:rgba(0,0,0,0.5);padding-top:10px;">' +
          '      <div style="width:70px;height:70px;background:whitesmoke;border-radius:200px;margin:auto;background-image:url(' + val.image.link + ');background-position:center;background-size:cover;" class="background">' +
          '      </div>' +
          '      <br>' +
          '    <h2 style="color:white" class="cart-box-title">' + val.title + '</h2>' +
          '    <div class="cart-box-desc lines" style="max-height:50px;color:white;-webkit-line-clamp:3;padding:10px;padding-top:15px;">' +
          (val.description ? val.description : ' ') +
          '    </div>' +
          '    </div>' +
          '    </div>')

      })

      $(".cart-box").hover(function(el) {
        $(this).find(".cart-box-title").toggleClass("hoved")
        $(this).find(".cart-box-desc").toggleClass("hoved")
        // $(this).css("margin-bottom","-40px")
      })


    },
    error: function(e) {
      console.log(e);
    }
  })

}


function viewcc(id) {
  var cc = pgi
  pgi++
  ldc(cc)
  $.ajax({
    url: server + "/web_category_items",
    method: "get",
    data: "category_id=" + id,
    type: "text",
    success: function(data) {
      console.log(data);
      ccv(data, cc)

    },
    error: function(e) {
      console.log(e);
    }
  })

}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



function viewItem() {

  $.ajax({
    url: server + "/web_hostel_view_1_h",
    method: "get",
    data: "hostel_id=" + url.id,
    type: "text",
    success: function(data) {
      console.log(data);
      getrooms(url.id)

      var val = data.data[0]
      var categories = ""
      var c = ""
      for (var x in val.categories) {
        categories += c + val.categories[x].title
        c = " , "
      }
      var rules=""
      for(var x in val.rules){
        rules+="<li>"+val.rules[x].rule+"</li>"
      }

      $(".hostel-image").css("background-image", "url(" + val.images[0].img + ")")
      $(".hostel-category").html(categories)
      $(".hostel-name").html(val.name)
      $(".hostel-location").html(val.name)

      $(".hostel-features").html(getfeatures(val.features))

      $(".hostel-manager").html(val.managers[0].name)
      $(".hostel-manager-position").html(val.managers[0].title)
      $(".hostel-description").html(val.description)
      $(".hostel-amenities").html(getfeatures2(val.features))
      $(".hostel-rules").html(rules)

      $(".hostel-rating").html(getrating(parseInt(val.rating)))

    },
    error: function(e) {
      console.log(e);
    }
  })

}

function getData() {
  var u = location.search.replace("?", "")
  var obj = {}
  var a = u.split("&")
  for (b in a) {
    // console.log(a,b);
    c = a[b].split("=")
    obj[c[0]] = c[1]
  }

  return obj;
}


var url = getData()

function getfeatures2(arr) {
  str = ""
  // <i class="mr-2 fas fa-users"></i>
  for (s in arr) {

    str += '<div class="col-md-4 py-2">' +
      '            <img src="http://admin.ehostels.chukabiz.com/api/web/image/'+ arr[s].icon +'/get" class="mr-2" style="width:25px;"> ' + arr[s].name +
      '          </div>'

  }
  return str;
}
