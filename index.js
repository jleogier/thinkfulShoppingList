$(document).ready (function (){


    $('#js-shopping-list-form').submit (function (e){

        // Prevents Default form submission
        e.preventDefault();

        // Assigns new Item to constant
        const newEntryItem = $('#shopping-list-entry').val();

        // Adds new Item to Shopping List
        $('.shopping-list').append(`<li>
            <span class="shopping-item">${newEntryItem}</span>
                <div class="shopping-item-controls">
                    <button class="shopping-item-toggle">
                        <span class="button-label">check</span>
                    </button>                    
                    <button class="shopping-item-delete">
                        <span class="button-label">delete</span>
                    </button>
                </div>
        </li>`);


        console.log (newEntryItem);
        

    });



    // Makes Remove button work
    $('.shopping-list').on('click', '.shopping-item-delete', function (e){
        $(this).closest('li').remove();
    });

    // Makes Check button work
    $('.shopping-list').on('click', '.shopping-item-toggle', function (e){
        $(this).parent().parent().children('.shopping-item').toggleClass('shopping-item__checked');
    });
    

}); 