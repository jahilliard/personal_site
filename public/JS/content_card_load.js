      // <div class="portfolio logo" data-cat="logo">
      //   <div class="portfolio-wrapper">       
      //     <img src="img/portfolios/logo/5.jpg" alt="" />
      //     <div class="label">
      //       <div class="label-text">
      //         <a id = "bird-docs" class="text-title">Bird Document</a>
      //         <span class="text-category">Logo</span>
      //       </div>
      //       <div class="label-bg"></div>
      //     </div>
      //   </div>
      // </div>       

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
      console.log(msg);
    });
 });





