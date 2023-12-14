
window.onload = init;
function init() {
    var button = document.getElementById("addButton");
    button.onclick = handleButtonClick;
    loadPlaylist();
    var loc = window.location.href;
    var HTMLvalidLinkStr = 'http://validator.w3.org/check?uri=' + loc;
    var CSSvalidLinkStr = 'http://jigsaw.w3.org/css-validator/validator?uri=' +
        loc + '?profile=css3';
    document.getElementById("vLink1").setAttribute("href", HTMLvalidLinkStr);
    document.getElementById("vLink2").setAttribute("href", CSSvalidLinkStr);
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