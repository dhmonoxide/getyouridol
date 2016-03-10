$(document).ready(function(){


  var test;
  $.getJSON("data/Namu_data.json",function(data){
    //$("body").append(data[0]);
    var tmp = '';

for (var items in data){
    if(data[items].length>1){
        $("#test").append(items.No);
    }else{
        var key = items;
        var keyValue = data[items].toString();

        if(keyValue.substr(0,8) != 'function'){ //function은 무시
            tmp += '\n' + key +'  '+ keyValue;
        }
    }
}
alert(tmp);
});
  //console.log(test);

});
