$(function() {
  var streamList = [
    "summit1g",
    "freecodecamp",
    "timthetatman",
    "angelskimi",
    "reckful",
    "imaqtpie",
    "shroud",
    "twitch"
  ];
  
  for(var i = 0; i < streamList.length; i++){
    var urlStreams = "https://api.twitch.tv/kraken/streams/" + streamList[i];
    var urlChannels = "https://api.twitch.tv/kraken/channels/" + streamList[i];
    
    $(".streams").append("<div class=row id=" + streamList[i] + "></div>");
    $("#" + streamList[i]).append("<div class='col-sm-4' id='col1'><div id='icon'></div></div>");
    $("#" + streamList[i]).append("<div class='col-sm-4' id='col2'></div>");
    $("#" + streamList[i]).append("<div class='col-sm-4' id='col3'></div>");
    $("#" + streamList[i] + "> #col1 > #icon").on("mouseover", function() {
      $(this).addClass("hvr-float");
    });
    
    // Decides whether stream is online or not
    (function (i) {
      $.ajax({
        type: 'GET',
        url: urlStreams,
        headers: {
          'Client-ID': '3fux038zboioo9x3dr99so1ux52eg6'
        },
        success: function(data) {
          if(data.stream == null){
            /*$("#" + streamList[i] + "> #col1 > #icon").css("border","solid 5px red");*/
            $("#" + streamList[i] + "> #col3").append("<p id=status>Offline</p>");
          } else {
            /*$("#" + streamList[i] + "> #col1 > #icon").css("border","solid 5px green");*/
            $("#" + streamList[i] + "> #col3").append("<p id=game>" + data.stream.game + "</p>");
          }
          console.log(data);
        }
      });
      
      $.ajax({
        type: 'GET',
        url: urlChannels,
        headers: {
          'Client-ID': '3fux038zboioo9x3dr99so1ux52eg6'
        },
        success: function(data) {
          $("#" + streamList[i] + "> #col1 > #icon").css("background-image", "url("
  + data.logo + ")");
          $("#" + streamList[i] + "> #col2").append("<p id=name>" + data.display_name + "</p>");
          $("#" + streamList[i] + "> #col1 > #icon").wrap("<a id='link' href=" + data.url + " target=_blank></a>").parent();
          console.log(data);
        }
      });
    })(i);
    
  }
});

/*
$(function() {
  var streamList = [
    "summit1g",
    "freecodecamp",
    "timthetatman",
    "angelskimi",
    "reckful",
    "imaqtpie"
  ];
  
  for(var i = 0; i < streamList.length; i++){
    var urlStreams = "https://api.twitch.tv/kraken/streams/" + streamList[i];
    var urlChannels = "https://api.twitch.tv/kraken/channels/" + streamList[i];
    
    $(".streams").append("<div class=row id=" + streamList[i] + "></div>");
    $("#" + streamList[i]).append("<div class='col-md-4' id='col1'></div>");
    $("#" + streamList[i]).append("<div class='col-md-4' id='col2'></div>");
    $("#" + streamList[i]).append("<div class='col-md-4' id='col3'></div>");
    
    // Decides whether stream is online or not
    (function (i) {
      $.ajax({
        type: 'GET',
        url: urlStreams,
        headers: {
          'Client-ID': '3fux038zboioo9x3dr99so1ux52eg6'
        },
        success: function(data) {
          if(data.stream == null){
            $("#" + streamList[i]).css("border","solid 5px red");
            $("#" + streamList[i]).append("<p id=status>Offline</p>");
          } else {
            $("#" + streamList[i]).css("border","solid 5px green");
            $("#" + streamList[i]).append("<p id=game>" + data.stream.game + "</p>");
          }
          console.log(data);
        }
      });
    })(i);
    
    (function (i) {
      $.ajax({
        type: 'GET',
        url: urlChannels,
        headers: {
          'Client-ID': '3fux038zboioo9x3dr99so1ux52eg6'
        },
        success: function(data) {
          $("#" + streamList[i]).css("background-image", "url("
  + data.logo + ")");
          $("#" + streamList[i]).append("<p id=name>" + data.display_name + "</p>");
          console.log(data);
        }
      });
    })(i);
    
  }
});

*/