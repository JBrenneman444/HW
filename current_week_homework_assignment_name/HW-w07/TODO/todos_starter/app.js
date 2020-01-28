$(() => {
    $('#submit').on('click', () => {
        $newTODO = $('#input-box').val();
        $newTODODiv = $('<div>')
        $newTODODiv.text($newTODO)
        $newTODODiv.addClass("to-do-item")
        $newButton = $("<button class='done'>DONE</button>")
        $newTODODiv.append('<br>')
        $newTODODiv.append($newButton)
        $("#to-do-list").append($newTODODiv)
        $('#input-box').val("")
    });
    $('form').on('submit', (event) => {
        $newTODO = $('#input-box').val();
        $newTODODiv = $('<div>')
        $newTODODiv.text($newTODO)
        $newTODODiv.addClass("to-do-item")
        $newButton = $("<button class='done'>DONE</button>")
        $newTODODiv.append('<br>')
        $newTODODiv.append($newButton)
        $("#to-do-list").append($newTODODiv)
        event.preventDefault();
        $(event.currentTarget).trigger('reset');
    });

    $('.done').on('click', () => {
        $completedTODO = event.target.parent()
        $completedTODO.removeClass()
        $completedTODO.remove()
        $completedTODO.addClass("done-item")
        $("#completed").append($newTODODiv)
    });
      
})

// When the user clicks the ADD button, the input box value should be added to their to-do list.

// CLASSES:
    // .to-do-item
    // .done-item

// Your user should be able to:
    // Enter a 'todo' item in the input box, and click the 'add' button to have the todo item render in the to-do-list column.
        // store TODO
        // add eventListener
        // append div

    // Click on a button within the to-do-item to move that item over to a 'completed' column.
        // .remove()
        // .append()

    // Click that same button, after it's been moved to 'completed', to remove the todo item from the page.
        // 
