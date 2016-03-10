$(document).ready(function(){

/*
  $.getJSON("data/Namuami.json",function(data){
    for (var item in data) {
      var $profile = $('<div class="each-container" id='+'"'+data[item].NameEn+'"'+'>'+
        '<div class="idol-name NameKo">'+data[item].NameKo+'</div>'+
        '<div class="idol-name NameJa">'+data[item].NameJa+'</div>'+
        '<div class="idol-name NameEn">'+data[item].NameEn+'</div>'+
        '<div class="idol-cv">'+data[item].CV+'</div>'+
        '</div>');
      $('#profile-container').append($profile);
    }
  });
  */

/*
  var data = require('data/Namuami.json');
  for (var item in data) {
      var $profile = $('<div id='+'"'+data[item].NameEn+'"'+'>'+
        '<div class=idol-name NameKo>'+data[item].NameKo+'</div>'+
        '<div class=idol-name NameJa>'+data[item].NameJa+'</div>'+
        '<div class=idol-name NameEn>'+data[item].NameEn+'</div>'+
        '<div class=idol-cv>'+data[item].CV+'</div>'+
        '</div>');
      $('#profile-container').append($profile);
  };
  */
  /*
  $.getJSON("data/Namuami.json",function(data){
    var item = 0;
      var $profile = $('<div class="each-container" id='+'"'+data[item].NameEn+'"'+'>'+
        '<div class="idol-name NameKo">'+data[item].NameKo+'</div>'+
        '<div class="idol-name NameJa">'+data[item].NameJa+'</div>'+
        '<div class="idol-name NameEn">'+data[item].NameEn+'</div>'+
        '<div class="idol-cv">'+data[item].CV+'</div>'+
        '</div>');
      $('#profile-container').append($profile);

      $('.each-container').on('click','.NameKo',function(){
        $('#profile-container').html("");
      });

  });
  */

  $.getJSON("data/Namuami.json",function(data){
    var createProductionOrUnitList = function() {
      var list = {};
      for (var item in data) {
        if (list[data[item]["ProductionOrUnit"]]) continue;
        list[data[item]["ProductionOrUnit"]] = true;
      }
      return Object.keys(list);
    };

    var productionOrUnitList = createProductionOrUnitList();
    for (var list in productionOrUnitList) {
      $("#ProductionOrUnit").append(
        $('<option value="'+productionOrUnitList[list]+'">'+productionOrUnitList[list]+'</option>')
      );
    }

    $('#ProductionOrUnit').on('change', function(e) {
      $('#profile-container').html("");
      for (var item in data) {
        if (data[item].ProductionOrUnit === $(this).val()) {
          var $profile = $('<article class="each-container" id='+'"'+data[item].NameEn+'"'+'>'+
            '<div class="idol-name NameKo"><h2>'+data[item].NameKo+'</h2></div>'+
            '<div class="idol-name NameJa">'+data[item].NameJa+'</div>'+
            '<div class="idol-name NameEn">'+data[item].NameEn+'</div>'+
            '<div class="idol-cv">'+data[item].CV+'</div>'+
            '</article>');
          $('#profile-container').append($profile);
        }
      }
    });
    //"ProductionOrUnit"
    /*
    for (var item in data) {
      var $profile = $('<div class="each-container" id='+'"'+data[item].NameEn+'"'+'>'+
        '<div class="idol-name NameKo">'+data[item].NameKo+'</div>'+
        '<div class="idol-name NameJa">'+data[item].NameJa+'</div>'+
        '<div class="idol-name NameEn">'+data[item].NameEn+'</div>'+
        '<div class="idol-cv">'+data[item].CV+'</div>'+
        '</div>');
      $('#profile-container').append($profile);
    }
    */
  });


});
