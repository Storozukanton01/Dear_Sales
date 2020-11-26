"use strict";

// Target elements 
var accordions = document.querySelectorAll('.questions__accordion');
var contents = document.querySelectorAll('.questions__accordion_content');
var daggers = document.querySelectorAll('.questions__x'); // Show clicked content and hide others

active = function active(item, index) {
  contents.forEach(function (content, i) {
    if (i !== index) {
      content.style.height = 0; // Add 'active' class to clicked element

      removeClass(accordions[i], contents[i], 'active');
    } // Remove 'active' class everywhery except of the one that was clicked
    else addClass(accordions[i], contents[i], 'active');
  });
  item.style.height = "".concat(item.scrollHeight, "px"); //Spin daggers

  daggers.forEach(function (dagger, i) {
    // dagger.style.transform = 'rotate(45deg)';
    dagger.classList.add('filled');

    if (i !== index) {
      // dagger.style.transform = 'rotate(0deg)';
      dagger.classList.remove('filled');
    }
  });
}; // Add function to all accordion element buttons


accordions.forEach(function (accordion, i) {
  return accordion.addEventListener("click", function () {
    return active(contents[i], i);
  });
});

var addClass = function addClass(el1, el2, className) {
  el1.classList.add(className);
  el2.classList.add(className);
};

var removeClass = function removeClass(el1, el2, className) {
  el1.classList.remove(className);
  el2.classList.remove(className);
};