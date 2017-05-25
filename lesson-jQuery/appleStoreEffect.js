<<<<<<< HEAD
$('.remove').on('click', function(e){

  var productRow = $(e.target).parents('.productrow');
  var message = '<div class="blue">Removing from cart</div>';
  $(productRow).find('.row').append(message)

  setTimeout(
      function()
      {
        $(productRow).remove();
      }, 500);

});
=======
$('.remove').on('click', function(e) {

  var productRow = $(e.target).parents('.productRow');
  var message = '<div class="blue">Removing from cart</div>';
  $(productRow).find('.row').append(message)

  setTimeout(
    function() {
      $(productRow).remove();
    }, 500);

});
>>>>>>> el-temp
