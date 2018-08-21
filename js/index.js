function platinum(val) {

console.log(val);
h1='<div class="col-md-4">'
+'          <div class="card">'
+'            <div class="w-100" style="padding-top:60%;background-image:url(img/bg2.png);"></div>'
+'            <div class="card-body">'
+''
+'              <h5> <img data-src="img/premium.png" class="mr-2 loading-images" style="width:40px;">  '+val.name+' </h5>'
+''
+'              <div class="card-text mt-2 mb-3">'
+'                <div class="" style="word-spacing:-5px;">'+getrating(val.rating)+'</div>'
+'                '+val.description+'</div>'
+'              <a href="view.html?' + val.id + '" class="btn btn btn-outline-info">View hostel</a>'
+'              <button href="" class="btn btn-info  float-right">Kes 2,000</button>'
+''
+'            </div>'
+'          </div>'
+'        </div>';

h2='<div class="col-md-4">'
+'          <div class="card">'
+'            <div class="w-100" style="padding-top:60%;background-image:url(img/bg2.png);"></div>'
+'            <div class="card-body">'
+''
+'              <h5> <img data-src="img/premium.png" class="mr-2 loading-images" style="width:40px;">  '+val.name+' </h5>'
+''
+'              <div class="card-text mt-2 mb-3">'
+'                <div class="" style="word-spacing:-5px;">'+getrating(val.rating)+'</div>'
+'                '+val.description+'</div>'
+'              <a href="view.html?' + val.id + '" class="btn btn btn-outline-info">View hostel</a>'
+'              <button href="" class="btn btn-info  float-right">Kes 2,000</button>'
+''
+'            </div>'
+'          </div>'
+'        </div>';

h3='<div class="col-md-4">'
+'          <div class="card">'
+'            <div class="w-100" style="padding-top:60%;background-image:url(img/bg2.png);"></div>'
+'            <div class="card-body">'
+''
+'              <h5> <img data-src="img/premium.png" class="mr-2 loading-images" style="width:40px;">  '+val.name+' </h5>'
+''
+'              <div class="card-text mt-2 mb-3">'
+'                <div class="" style="word-spacing:-5px;">'+getrating(val.rating)+'</div>'
+'                '+val.description+'</div>'
+'              <a href="view.html?' + val.id + '" class="btn btn btn-outline-info">View hostel</a>'
+'              <button href="" class="btn btn-info  float-right">Kes 2,000</button>'
+''
+'            </div>'
+'          </div>'
+'        </div>';

return h1+h2+h3

}


imgserver="http://admin.ehostels.chukabiz.com/api/web/image/5/get/dims/0/50"

function feature(val) {
    return '<div class="col-md-4 my-3">'
+'  <div class="card category-card text-center background" style="background-image:url(http://admin.ehostels.chukabiz.com/api/web/image/'+ val.icon+'/get);filter:grayscale(100);height:210px;transition:all 1s;">'
+''
+'  <div class="w-100 h-100 p-3 cart-cover" style="background-color:rgba(0,0,0,0.2);transition:all 1s;">'
+''
+'  <div class="title" style="font-size:30px;color:white;transition:all 0.5s;transform: translateY(50px);">'
+val.name
+'  </div>'
+''
+'  <div class="my-3 desc slideInUp" style="overflow-y:hidden;height:75px;color:white;transform: translateY(50px);opacity: 0;transition:all 0.5s;">'
+'  </div>'
+''
+'  <a href="#" class="btn btn-outline-light view-button" style="transition:all 1s;opacity: 0;transition:all 0.5s;transform: translateY(20px);opacity:0;">view</a>'
+''
+'  </div>'
+''
+'  </div>'
+'  </div>';


return '<div class="col-md-3 col-sm-6" style="max-width:50%;max-height:200px;overflow:hidden;">'
+'        <div class="card text-center mc-card my-2" style="padding-top:100%;background:whitesmoke;transition:all 0.5s;max-height:100%;">'
+'          <div class="w-100 amenity-card" style="position:absolute;top:0px;transition:all 0.5s;">'
+'            <img class=" mt-5 loading-images" style="width:100%;color:#555" src="http://admin.ehostels.chukabiz.com/api/web/image/'+ val.icon+'/get">'
+'            <br>'
+'            <br>'
+'            <p>'+val.name+'</p>'
+''
+'          </div>'
+''
+'        </div>'
+'      </div>';


}



function item(val) {
console.log(val);
  return ' <div class="col-md-4">'+
  '<div class="card my-3 px-0">'+
    '      <div class="background" style="background-image:url(img/host.jpg);height:250px;">     </div>' +
    '        <div class="card-body">' +
    '          <h5 class="card-title mb-0">' + val.name + '</h5>' +
    '          <div class="card-text mt-2 mb-3">' +
    '            <div class="" style="word-spacing:-5px;">  ' + getrating(val.rating) + '      </div>' +
    val.description + '</div>' +
    '            <a href="view.html?' + val.id + '" class="btn btn btn-outline-info">View hostel</a>' +
    '          <button href="" class="btn btn-info  float-right">Kshs ' + (val.price ? val.price.toLocaleString() : "10,000") + '</button>' +
    '        </div>' +
    '        </div>' +
    '      </div>';
}

function item2(val) {
console.log(val);
  return ' <div class="col-md-4">'+
  '<div class="card my-3 px-0">'+
    '      <div class="background" style="background-image:url(img/host.jpg);height:250px;">     </div>' +
    '        <div class="card-body">' +
    '          <h5 class="card-title mb-0">' + val.name + '</h5>' +
    '          <div class="card-text mt-2 mb-3">' +
    '            <div class="" style="word-spacing:-5px;">  ' + getrating(val.rating) + '      </div>' +
    val.description + '</div>' +
    '            <a href="view.html?id=' + val.id + '" class="btn btn btn-outline-info">View hostel</a>' +
    '          <button href="" class="btn btn-info  float-right">Kshs ' + (val.price ? val.price.toLocaleString() : "10,000") + '</button>' +
    '        </div>' +
    '        </div>' +
    '      </div>';
}

function category(val) {

return '<div class="col-md-4 my-3">'
+'  <div class="card category-card text-center background" style="background-image:url(img/host.jpg);filter:grayscale(100);height:210px;transition:all 1s;">'
+''
+'  <div class="w-100 h-100 p-3 cart-cover" style="background-color:rgba(0,0,0,0.2);transition:all 1s;">'
+''
+'  <div class="title" style="font-size:30px;color:white;transition:all 0.5s;transform: translateY(50px);">'
+val.title
+'  </div>'
+''
+'  <div class="my-3 desc slideInUp" style="overflow-y:hidden;height:75px;color:white;transform: translateY(50px);opacity: 0;transition:all 0.5s;">'
+'  </div>'
+''
+'  <a href="#" class="btn btn-outline-light view-button" style="transition:all 1s;opacity: 0;transition:all 0.5s;transform: translateY(20px);opacity:0;">view</a>'
+''
+'  </div>'
+''
+'  </div>'
+'  </div>';

}
