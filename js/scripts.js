$ (document).ready(function(){
  //console.log('document is ready');


  //I am going to write some code that makes a div change color
  //when it is clicked
  $('#click').click(function(){

      console.log('i clicked the div');

      $(this).css("color","red");

      $(".ball").css("background","pink");

  });

});
