function append_json(productData) {
  //Set Up the template
  var s = $("#store-template")[0].innerHTML.trim();
  var holder = document.createElement("div");
  holder.innerHTML = s;
  var template = holder.childNodes;

  productData.forEach(function(object) {

    //Clone Template
    var newItem = $(template).clone();

    //Populate it
    console.log($(newItem))
    $(newItem).find(".product-name").html(object.name);
    $(newItem).find(".product-image").attr("src", "assets/img/merch/" + object.imgSrc).attr("alt", object.name);
    $(newItem).find(".price").html("$"+object.price.toFixed(2));
    $(newItem).find(".image-container").attr("data-bs-target", ".id_"+object.id);
    var percent = (object.rating/5)*100
    $(newItem).find(".rating").css("background", "linear-gradient(90deg, #fc0 "
    + percent.toString() + "%, #181818 " + percent.toString() + "%)");

    $(newItem).find(".modal.fade").addClass("id_"+object.id);
    $(newItem).find(".modal-title").html(object.name);
    $(newItem).find(".modal-image").attr("src", "assets/img/merch/" + object.imgSrc).attr("alt", object.name);
    $(newItem).find(".modal-rating").css("background", "linear-gradient(90deg, #fc0 "
    + percent.toString() + "%, #303030 " + percent.toString() + "%)");
    $(newItem).find(".modal-description").html(object.description);

    $("#store-row").append(newItem);
  });
}

$(document).ready(() => {
  $.getJSON("assets/js/store.json", function(json) {
    // console.log(json);
    append_json(json);

    $('#currency-menu a').click(function(){
      $('#currency').html($(this).html())
    })
  });

});
