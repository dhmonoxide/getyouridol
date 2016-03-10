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
        if (list[data[item].ProductionOrUnit]) continue;
        list[data[item].ProductionOrUnit] = true;
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
          var $listtile = $('<h4 style="display:inline"></h4>');
          var $profile = $(
            '<article class="each-container" id='+'"'+data[item].NameEn+'"'+'>'+
            //'<div class="property idol-name NameKo"><h2>'+data[item].NameKo+'</h2></div>'+
            '<fieldset><legend class="property idol-name NameKo"><h3>'+data[item].NameKo+'</h3></legend>'+
            '<div class="property idol-name NameJa">이름(일): '+data[item].NameJa+'</div>'+
            '<div class="property property idol-name NameEn">이름(영): '+data[item].NameEn+'</div>'+
            '<div class="property idol-gender">성별: '+data[item].Gender+'</div>'+
            '<div class="property idol-age">나이: '+data[item].Age+'</div>'+
            '<div class="property idol-weightHeight">키/몸무게: '+data[item].Weight+'/'+data[item].Height+'</div>'+
            '<div class="property idol-threeSize">B/W/H: '+data[item].B+' '+data[item].W+' '+data[item].H+'</div>'+
            '<div class="property idol-hobby">취미: '+data[item].Hobby+'</div>'+
            '<div class="property idol-birth">생일: '+data[item].Birthday+'</div>'+
            '<div class="property idol-blood">혈액형: '+data[item].BloodType+'</div>'+
            '<div class="property idol-hair">헤어스타일: '+data[item].HairStyle+'</div>'+
            '<div class="property idol-areafrom">출신지: '+data[item].AreaFrom+'</div>'+
            '<div class="property idol-mediafrom">출신매체: '+data[item].MediaFrom+'</div>'+
            '</fieldset></article>');
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
