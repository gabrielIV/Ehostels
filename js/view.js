
var pricing=[]

var currentRoom;

fetch_rooms()
function fetch_rooms() {


    $.ajax({
      url: 'http://admin.ehostels.chukabiz.com/api/web/view/hostel/getRooms',
      type: 'post',
      dataType: 'json',
      crossDomain: true,
      contentType: 'application/json',
      data: JSON.stringify({
          "hostel_id":location.search.replace("?","")
        }),
      success: function(data) {


console.log(data);

currentRoom= data.room[0].hostel_id
$.each(data.room,function (num,val) {

  $.each(val.pricing,function (num,val) {
    pricing.push([val.hostel_room_id,val.period_id,val.amenity_id,val.value])
  })
  console.log(pricing);



$("#rooms").append('<div class="panel-heading pb-2 card-header" role="tab" id="headingOne">'
+'              <a data-toggle="collapse" data-parent="#accordion" href="#collapse_'+num+'" aria-expanded="true" aria-controls="collapseOne">'
+'          '+(num+1)+'. '+val.name+' <h5 class="float-right">Kshs '+( pricing[0][pricing[0].length-1].toLocaleString() )+'</h5>'
+'        </a>'
+'            </div>'
+'            <div id="collapse_'+num+'" class="panel-collapse collapse in '+ ( num==0 ? "show" : '' ) +' pb-3 pt-3" role="tabpanel" aria-labelledby="headingOne">'
+''
+'              <div class="row ml-1">'
+''
+'                <div class="d-inline-block  col-md-4" style="height:150px;background:whitesmoke;">'
+''
+'                </div>'
+''
+'                <div class="col-md-8">'+val.description
+'             </div>'
+'              </div>'
+'            </div>')

})

},error:function (e) {

console.error(e);
}

})


}



$(document).on('change','.book-input',function () {

// calculator(this)
var parent=$(this).parent().parent().parent()

var date=parseInt($(parent).find(".book-dates").val())


var tenants=$(parent).find(".book-tenants").val()
console.log(date,tenants);
console.log(av_price(currentRoom,date,tenants));




})


function getPrice() {



}

function av_price(room,date,tenant) {
var price=null
$.each(pricing,function (num,val) {
if(val[0]==room && val[1]==room && val[2]==room ){
  price=val[3]
}
})

return price;

}



function startLoader(){
setTimeout(function () {

window.location="confirm_payment.html"

}, 4000);

}
