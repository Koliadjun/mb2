$('[data-tabtrigger]').click(function(e){
  e.preventDefault();
  var n = $(this).data('tabtrigger');
  var group = $(this).data('group');
  if($(this).is('[data-toggle]')){
    if($(this).is('.active')){
      $(this).removeClass('active');
      $('[data-tab="'+n+'"][data-group="'+group+'"]').removeClass('active');
    }else{
      $(this).addClass('active');
      $('[data-tab="'+n+'"][data-group="'+group+'"]').addClass('active');
    }
  }else{
    $('[data-group="'+group+'"]').removeClass('active')
  $(this).addClass('active')
  $('[data-tab="'+n+'"][data-group="'+group+'"]').addClass('active');
  }
  if(!$(this).is('[data-noheight]')){
    setParentHeight( $('[data-tab="'+n+'"][data-group="'+group+'"]'))
  }
  })