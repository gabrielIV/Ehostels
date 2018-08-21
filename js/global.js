$(document).on("click",".open-search-modal",function () {
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

  $("#search-modal").modal()

}
})
