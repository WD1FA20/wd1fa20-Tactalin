/*
 * Filename:    shopping.js
 * Description: Grocery List
 * Author:      Matteo Chambers
 */
 'use strict'
 
 const elForm = document.getElementById('grocery');
 elForm.addEventListener('submit', function(e) {;
 //Stop form from submitting
 e.preventDefault();
 
 const elItem = document.getElementById('item');
 
 const elQuantity = document.getElementById('quantity');
 
 const elSelect = document.getElementById('dropdown');
 list.push(elItem.value, elQuantity.value, elSelect.value);
 console.log(list);
 
 
 
 //alert(elItem.value);
 
  const elDropdown = document.getElementById('dropdown');
 
 //let currentValue = elDropdown.options[elDropdown.selectedIndex].value;
 
 //alert(currentValue);
 Update(list);
 elForm.reset();
 });
 
 
 



// CREATE YOUR GLOBAL GROCERY LIST ARRAY
const list = [];

// Global Object Constructor / Class Syntax
var listinfo = {ItemName:"", ItemQuant:0, Category:""};

// Event Listener to Process Form Submission
var obj = document.getElementById('grocery');
elobj.addEventListener()

// Event Listener to Handle Removal of First Item


// Event Listener to Handle Removal of Last Item


// Function to Update the Text of the List
function Update(list) {
    const elUl = document.querySelector('ul');
    let htmlString = '';
    for (let value of list) {
        htmlString += `<li>${value}</li>`;
    }
    elUl.innerHTML = htmlString;
}
