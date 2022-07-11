
function newItem(){

  //Adding new item to list
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert('You must write something :)')
  } else {
    let list = $('#list');
    list.append(li);
  }

  //Crossing out an item
  function crossOut() {
    li.toggleClass('strike');
  }

  li.on("dblclick",crossOut);

  //Delete button functionality

  let crossOutButton = $('<crossOutButton></crossOutButton');
  crossOutButton.append(document.createTextNode('x'));
  li.append(crossOutButton);
  crossOutButton.on('click', deleteListItem);

  function deleteListItem(){
    li.addClass('delete')
  }

  //Reordering list functionality

  $('#list').sortable();

}
