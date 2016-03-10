$(document).ready(function(){
  
/*
  $.getJSON("data/Namuami.json",function(data){
    for (var item in data) {
      var $profile = $('<div id='+'"'+data[item].NameEn+'"'+'>'+
        '<div class=idol-name NameKo>'+data[item].NameKo+'</div>'+
        '<div class=idol-name NameJa>'+data[item].NameJa+'</div>'+
        '<div class=idol-name NameEn>'+data[item].NameEn+'</div>'+
        '<div class=idol-cv>'+data[item].CV+'</div>'+
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
 var profiles;
  $.getJSON("data/Namuami.json").done(function(data){
     var $test = JSON.stringify(data);
     profiles = JSON.parse($test);
       $('#profile-container').append(JSON.stringify(profiles));

  });
       console.log(typeof profiles)
  
});
