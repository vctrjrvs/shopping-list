$(function() {
// add items
    $('#js-shopping-list-form').submit(function (e) {
        e.preventDefault();

    let itemName = $('#shopping-list-entry').val();

    $('.shopping-list').append(`<li>
    <span class="shopping-item">${itemName}</span>
    <div class="shopping-item-controls">
    <button class="shopping-item-toggle">
    <span class="button-label">check</span>
    </button><button class="shopping-item-delete">
    <span class="button-label">delete</span>
    </button></div></li>`);
// Initiate the item so that the buttons work
    let newItem = $('.shopping-list li:last-of-type');
    initiateItem(newItem);

// clear the input
    $('#shopping-list-entry').val(''); 

    });
//initiate buttons for each existing item
    $('.shopping-list li').each(function() {
    initiateItem($(this));
    });
});



// check or uncheck items
function initiateItem(li) {
    li.find('.shopping-item-toggle').click(function() {
        li.find('.shopping-item').toggleClass('shopping-item__checked');
    });
// remove items

    li.find('.shopping-item-delete').click(function() {
    li.remove();
    });
};