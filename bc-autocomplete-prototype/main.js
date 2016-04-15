"use strict";

var delay = 1000;
var nameInputID = 'nameInput';
var nameInput = document.getElementById(nameInputID);

var timeout;

// Listen for changes to the value
nameInput.addEventListener('input', function(event) {
    // Only send the request after input has stopped coming in
    if(timeout) {
        clearTimeout(timeout);
    }
    // Be sure to recheck the value each time for an up-to-date string
    var name = nameInput.value;
    // Server API balks at queries shorter than 3 characters
    if(name.length >= 3) {
        timeout = setTimeout(function() {
            sendQuery(name);
        }, delay);
    }
});

function sendQuery(name) {
    // Note! The API is very particular and requires that this be lower case
    var query = "https://census.daybreakgames.com/get/ps2:v2/character_name/?name.first_lower=^" + name.toLowerCase() + "&c:limit=10&c:show=name.first&c:sort=name.first_lower";
    var xhr = new XMLHttpRequest();
    xhr.open('get', query);
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4) {
            var resultsBox = document.getElementById("results");
            var responseObject = JSON.parse(xhr.responseText);
            var resultsText = document.createTextNode(responseObject.character_name_list.map(function(char) {
               return char.name.first;
            }).join('\n'));
            if(resultsBox.firstChild) {
                resultsBox.replaceChild(resultsText, results.firstChild);
            } else {
                resultsBox.appendChild(resultsText);
            }
        }
    };
    xhr.send(null);
}
