/**
 * Created by Halsey on 11/10/2017.
 */

    // Store object
    var storeObject = {
        storeName : '',
        storePhone : '',
        storeEmail : ""
    };

    $(document).on('pagebeforeshow', '#stores', function(){

        $(document).on('click', function(e){
            var idClicked = e.target.id;
            var clicked = "#"+idClicked;
            storeObject.storeName = $(clicked).data('storename');
            $.mobile.changePage("#chats");
        });

    });

    $(document).on('pagebeforeshow', '#chats', function(){
        $('#storeName').html(storeObject.storeName)
    });


