// To complete this challenge requires:

// Using DOM manipulation and traversal to dynamically add and remove HTML elements and apply styles.
// *Linking to an externally hosted library (jQuery) and a locally hosted JavaScript file (index.js).
// *Linking to your application JavaScript file from the index.html page.
// Using this and event delegation
// Requirements

// In terms of user experience, your shopping list app must allow users to:

// *enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
// check and uncheck items on the list by clicking the "Check" button
// permanently remove items from the list
// Additionally:

// *You must use a CDN-hosted version of jQuery
// *Put your application code in a file called index.js and link to it in index.html
// *Be sure to put both script elements at the bottom of the <body> element.
// *Do not alter index.html or main.css other than adding the links to the external JavaScript inside index.html. Write JavaScript code that works with the existing HTML and CSS to implement the required features.
// Hint: you may find it helpful to read up on and use the following jQuery methods: .submit(), preventDefault(), toggleClass(), and closest().


    $('#js-shopping-list-form').submit(function(event) {
      event.preventDefault();
      //create "item" to assume the temporal value of the .submit
      const item = $(this).find('input[name="shopping-list-entry"]').val();
        //reset #shopping-list-entry to an empty '' so that the box clears for next query
      $('#shopping-list-entry').val('');
        //append 'item' to the .shopping-list using the <li> html code
      $('.shopping-list').append(
        `<li>
          <span class="shopping-item">${item}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>`);
    });
  

    //bolo for a click on the shopping-list on the button .shopping-item-delete
    $('.shopping-list').on('click','.shopping-item-delete',function(event){
        //when the click happens, use the closest (or parent 'li') and .remove ()
    $(this).closest('li').remove();
    });
        //bolo for a click on the shopping-item-toggle
    $('.shopping-list').on('click','.shopping-item-toggle',function(event){
        //when a click happens, located parent 'li', find the .shopping-item and .toggleClass
        // to __checked, i'm not sure how shopping-item returns to unchecked on a subs click
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');

    });
