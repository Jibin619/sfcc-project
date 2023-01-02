module.exports = {
    addToFav:  function(){

        $(document).on('click', 'a.add-fav', function (event) {
        
         event.preventDefault();
         $.spinner().stop();
         var hurl= $(this).attr('href');
         $.ajax({
            url: hurl,
            method: 'GET',
            dataType: 'json',
            success: function (response) {
                alert(response.product+ " "+ "added");
                $.spinner().stop();
            },
            error: function () {
                alert("error");
                $.spinner().stop();
            }
        });
        
        }
        )}
} 