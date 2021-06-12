function append_json(musicData) {
  //Set Up the template
  var s = $("#store-template")[0].innerHTML.trim();
  var holder = document.createElement("div");
  holder.innerHTML = s;
  var template = holder.childNodes;

  musicData.forEach(function(object) {

    //Clone Template
    var newItem = $(template).clone();

    //Populate it
    $(newItem).find(".music-name").html(object.name);
    $(newItem).find(".music-description").html(object.type);
    $(newItem).find(".music-year").html("Released: " + object.year);
    $(newItem).find(".music-image").attr("src", "music_covers/" + object.imgSrc).attr("alt", object.name);
    $(newItem).find(".music-spotify").attr("src", object.spotifyLink)
    $(newItem).find(".music-lightbox").attr("href", "music_covers/" + object.imgSrc);
    $(newItem).find(".music-lightbox").attr("data-lightbox", object.id)

    $("#store-row").append(newItem);
  });
}

$(document).ready(() => {

  $.getJSON("assets/js/store.json", function(json) {
    // console.log(json);
    append_json(json);
  });

});
