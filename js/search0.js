function find(el) {
unfocus()
var j=$(el).parent().serialize().replace("pto","price_to").replace("pfrom","price_from")

console.log($(el).parent().parent());
console.log(j);
var cc=pgi
pgi++
ldc(cc)
$.ajax({url:server+"/web_search",
  method:"get",
  data:j,
  type:"text",
  success: function(data){
// console.log(data);

searchdata(data,cc)

  },error:function (e) {
    console.log(e);
  }
})

}


function search_params() {


  $.ajax({url:server+"/web_search_params",
    method:"post",
    data:"",
    type:"text",
    success: function(data){

console.log(data);
      $('[name=pfrom]').append($('<option>', {
          value: '0',
          text: 'From'
      }));
      $.each(data.pricing.from,function (num,val) {
        $('[name=pfrom]').append($('<option>', {
            value: val,
            text: 'kshs '+val.toLocaleString()
        }));
      })
      $('[name=pfrom]').append($('<option>', {
          value: "other",
          text: 'Other'
      }));


      $('[name=pto]').append($('<option>', {
          value: '0',
          text: 'To'
      }));
      $.each(data.pricing.to,function (num,val) {
        $('[name=pto]').append($('<option>', {
            value: val,
            text: 'kshs '+val.toLocaleString()
        }));
      })
      $('[name=pto]').append($('<option>', {
          value: "other",
          text: 'Other'
      }));


                  $('[name=proximity]').append($('<option>', {
                      value: '0',
                      text: 'Any distance'
                  }));
                  $.each(data.proximity,function (num,val) {
                    $('[name=proximity]').append($('<option>', {
                        value: val.id,
                        text: val.name.toLocaleString()+" m"
                    }));
                  })
                  $('[name=proximity]').append($('<option>', {
                      value: "other",
                      text: 'Other'
                  }));


                              $('[name=locality]').append($('<option>', {
                                  value: '0',
                                  text: 'Anywhere'
                              }));
                              $.each(data.locality,function (num,val) {
                                $('[name=locality]').append($('<option>', {
                                    value: val.id,
                                    text: val.name.toLocaleString()
                                }));
                              })



                                          $('[name=tenants]').append($('<option>', {
                                              value: '0',
                                              text: 'Any number'
                                          }));
                                          $.each(data.tenants,function (num,val) {
                                            $('[name=tenants]').append($('<option>', {
                                                value: val.id,
                                                text: val.name.toLocaleString()
                                            }));
                                          })



    },error:function (e) {
      console.log(e);
    }
  })
}
