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
    $(newItem).find(".product-name").html(object.name);
    $(newItem).find(".product-image").attr("src", "merch/" + object.imgSrc).attr("alt", object.name);
    // $(newItem).find(".music-lightbox").attr("href", "music_covers/" + object.imgSrc);
    // $(newItem).find(".music-lightbox").attr("data-lightbox", object.id)

    $("#store-row").append(newItem);
  });
}

$(document).ready(() => {
  $.getJSON("assets/js/store.json", function(json) {
    // console.log(json);
    append_json(json);
  });

});
