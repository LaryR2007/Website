
window.onload = init;
function init() {
    var button = document.getElementById("addButton");
    button.onclick = handleButtonClick;
    loadPlaylist();
}
function handleButtonClick() { 
    var textInput = document.getElementById("songTextInput"); 
    var songName = textInput.value;
    var li = document.createElement("li");
    li.innerHTML = songName;
    var ul = document.getElementById("playlist"); 
    ul.appendChild(li);
    save(songName);
    /*list.appendChild(item);
        // Creates a delete button 
        var deleteButton = document.createElement("span");
        deleteButton.innerHTML = "Delete"
        item.appendChild(deleteButton);
        
        
        //add an event listener for the delete button
        deleteButton.addEventListener("click", function(){
          
          //get the parent of the span (li) 
          var listItem = this.parentNode;
          //get the parent of the list item (ul)
          var li = listItem.parentNode;
          //remove the child from the list         
          li.removeChild(listItem);
})*/
}