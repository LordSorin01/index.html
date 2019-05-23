$(document).ready(function () {

    var pageId = window.location.search.trim();
    
    var itemsSettings = {
        "async": true,
        "crossDomain": true,
        "url": "https://my-json-server.typicode.com/LordSorin01/JSONserver/singleitems"+pageId,
        "method": "GET",
        "dataType": "json"
    }
   
    $.ajax(itemsSettings).done(function (response) {
        var myItem = "";
        var myBrand = "";
        $.each(response, function (i, obj) {
            myItem += '<div class="card">'
            myItem += '<img src="'+obj.img+'" class="card-img-top" alt="">';
            myItem += '<div class="card-body">';
            myItem += '<h5 class="card-title">'+obj.title+'</h5>';
            myItem += '<h5 class="card-title">'+obj.price+'</h5>';
            myItem += '<p class="card-text">'+obj.desc+'</p>';
            myItem += '</div>';
            myItem += '<div class="card-footer text-muted">'+obj.brand+'</div>';
            myItem += '</div>';
            myItem += '</div>';
            myBrand += '<a href="#" class="list-group-item list-group-item-action">'+obj.brand+'</a>';
            console.log('valore', obj.id);
        });
         $("#singleItem").append(myItem);
         $("#listBrands").append(myBrand);
    });
}); 
