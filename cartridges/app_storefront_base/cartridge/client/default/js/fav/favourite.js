'use strict';

module.exports=  function(){

    $(document).on('click', 'a.remove-fav', function (event) {

        event.preventDefault();
        $.spinner().start();
        var hurl= $('a.remove-fav').attr('href');
        $.ajax({
           url: hurl,
           method: 'GET',
           dataType: 'json',
           success: function (response) {
               alert(response.success+ " "+ "removed");
               $.spinner().stop();
               location.reload();
           },
           error: function () {
               alert("error");
               $.spinner().stop();
           }
       });
       }
       );
}