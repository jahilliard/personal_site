
 $(".portfolio-wrapper").click(function(){

    var card_id = $(this).first().attr( "id" );

    var request = $.ajax({
      url: "/getSingleProject",
      method: "GET",
      data: { id : card_id },
      dataType: "html"
    });

    request.done(function( msg ) {
      $("#content").html(msg);
    });
 });





