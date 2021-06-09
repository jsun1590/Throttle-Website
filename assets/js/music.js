function append_json(musicData) {
  //Set Up the template
  var s = $("#music-template")[0].innerHTML.trim();
  var holder = document.createElement("div");
  holder.innerHTML = s;
  var template = holder.childNodes;

  musicData.forEach(function(object) {

    //Clone Template
    var newItem = $(template).clone();

    //Populate it
    $(newItem).find(".music-name").html(object.name);

    $("#card-row").append(newItem);
  });
}

$(document).ready(() => {
    
    $.getJSON("assets/js/music.json", function(json) {
        console.log(json);
        append_json(json);
    });
    
    $(document).on('click', '.listen', function() {
        if ($(this).parents(':nth(1)').css('transform') == 'none') {
            $(this).parents(':nth(1)').css('transform','rotateY(180deg)');
        } 
        else {
            $(this).parents(':nth(1)').css('transform','' );
        }
    });
    
});

