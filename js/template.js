$.ajax({
  url: "template.html",
  method: "post",
  data: "",
  type: "text",
  success: function(data) {
    $(data).each(function (num,val) {
      $($(val).attr("data-target")).replaceWith($(val).html())
    })
  },
  error: function(e) {
    console.log(e);
  }
})
