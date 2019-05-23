$(document).ready(function () {
    var brandSettings = {
        "async": true,
        "crossDomain": true,
        "url": "https://my-json-server.typicode.com/LordSorin01/JSONserver/brands",
        "method": "GET",
        "dataType": "json"
    }
    var itemsSettings = {
        "async": true,
        "crossDomain": true,
        "url": "https://my-json-server.typicode.com/LordSorin01/JSONserver/items",
        "method": "GET",
        "dataType": "json"
    }
    $.ajax(brandSettings).done(function(response){
        var myBrand = "";
        $.each(response,function(i,obj){
            myBrand += '<a href="#" class="list-group-item list-group-item-action">'+obj.brand+'</a>';
        });
        $("#listBrands").append(myBrand);
    });
    $.ajax(itemsSettings).done(function (response) {
        var myItem = "";
        $.each(response, function (i, obj) {
            myItem += '<div class="col-lg-4"> ';
            myItem += '<div class="card  '+ obj.id +' " id="'+ obj.id +'">';
            myItem += '<a href="card.html?id='+obj.id+'"><img class="card-img-top" src="'+ obj.img +'">';
            myItem += '<div class="card-body">';
            myItem += '<h5 class="card-title">'+obj.title+'</h5>';
            myItem += '<h5 class="card-title">'+obj.price+'</h5>';
            myItem += '<p class="card-text">'+obj.desc+'</p>';
            myItem += '</div>';
            myItem += '<div class="card-footer text-muted">'+obj.brand+'</div>';
            myItem += '</a>';
            myItem += '</div>';
            myItem += '</div>';
            console.log('valore', obj.id);
        });
         $("#listItems").append(myItem);
    });
}); 
