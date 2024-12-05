const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    if (input.value != '') {
        // Create the li element and delete button
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        
        // Set the text content
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        
        // Add the delete button class
        deleteButton.classList.add('delete');
        
        // Append the delete button to the li
        li.append(deleteButton);
        
        // Append the li to the list
        list.append(li);
        
        // Add delete button click event
        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();
        });
        
        // Clear the input and set focus
        input.value = '';
        input.focus();
    } else {
        // If input is empty, just focus on it
        input.focus();
    }
});
