var toAdd;

$(document).ready(function() {
    $('button').click(function() {
       
       toAdd = $('input').val();
       $('#two').append('<div class="item"><button>&#x2714;</button><p>'+toAdd+'</p></div>');
    });
  });

$(document).on('mouseenter','.item',function() {
  $(this).addClass("highlight");
});

$(document).on('mouseleave','.item',function() {
  $('.item').removeClass("highlight");
});

$(document).on('click','.item button', function() {
  $(this).closest('div').remove();
});


/* event to solve the problem "while hitting enter the page goes off" */
$('input').keydown(function(e) {
  if(e.keyCode == 13) { // if enter key was pressed
       toAdd = $('input').val();
       $('#two').append('<div class="item"><button>&#x2714;</button><p>'+toAdd+'</p></div>');
    return false; 
  }
});