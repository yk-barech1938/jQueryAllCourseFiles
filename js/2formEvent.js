$(document).ready(function(){
$('#name,#country,#class').focus(function(){
  $(this).css('background-color','#f4f4f4')
});
$('#name,#country,#class').blur(function(){
  $(this).css('background-color','')
});
$('#country').change(function(){
  var a=$(this).val();
  $('#test').html(a);

});

$('#name,#class').select(function(){
  $(this).css('background-color','yellow')

});

$('#sform').submit(function(){
  var name=$('#name').val();
  var cls =$('#class').val();
  $('#test1').html(name);
  $('#test2').html(cls);});

})