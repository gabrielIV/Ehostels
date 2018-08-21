function focused(el) {

  var t=$(el).offset().top
  var l=$(el).offset().left-4

console.log("ok");
$("#opts2").css("top","0px")
$("#opts2").css("left",l+"px")

$("#opts2").show()
$("#bgg").show()
setTimeout(function () {
  $("#cc").focus()
}, 500);

}

function unfocus() {
  $("#opts2").hide()
  $("#bgg").hide()

}

// $(".opts").click(function() {
// console.log("ok");
// })


$(".opts select").change(function() {
  var el=this
  if($(el).val()=="other"){
  myApp.prompt($(this).attr("name"),function (val) {
    console.log(val);

  })
}
})

function hf() {
$("#opts3").show()

$(document.body).click( function() {
    $("#opts3").hide()
});

$("#hopts2").click( function(e) {
    e.stopPropagation(); // this stops the event from bubbling up to the body
});
}
