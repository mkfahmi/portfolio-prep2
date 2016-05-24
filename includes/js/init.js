$(document).ready(function() {

  // Dérouler description cartes Projets
  $('.card_arrow').click(function() {
    var description = $('.card_description', this.parentElement)[0];
    var arrow_img = $(this).find('img')[0];
    var arrow_img_src = $(arrow_img).attr('src');

    if(arrow_img_src == 'img/logos/Expand Arrow-96.png') {
      $(description).removeClass('closed');
      $(arrow_img).attr('src', 'img/logos/Collapse Arrow-96.png');
    }
    else {
      $(description).addClass('closed');
      $(arrow_img).attr('src', 'img/logos/Expand Arrow-96.png');
    }
  });

  // Animer les langages
  $('img', '#languages').hover(function() {
    $(this).addClass('wobble');
  }, function() {
    $(this).removeClass('wobble');
  });

  // Afficher les détails de l'expérience
  $('img', '#experience_stamps').hover(function() {
    var title = $('h3', '#experience_details')[0];
    var description = $('p', '#experience_details')[0];
    var date = $('i', '#experience_details')[0];

    $(title).text($(this).attr('title'));
    $(description).text($(this).attr('description'));
    $(date).text($(this).attr('date'));

    $('#experience_details').show();
  }, function() {
    $('#experience_details').hide();

    var title = $('h3', '#experience_details')[0];
    var description = $('p', '#experience_details')[0];
    var date = $('i', '#experience_details')[0];

    $(title).text('');
    $(description).text('');
    $(date).text('');
  });
});
