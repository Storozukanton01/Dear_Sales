// Target elements 
const accordions = document.querySelectorAll('.questions__accordion');
const contents = document.querySelectorAll('.questions__accordion_content');
const daggers = document.querySelectorAll('.questions__x');

// Show clicked content and hide others
active = (item, index) => {
    contents.forEach((content, i) => {
        if (i !== index) {
          content.style.height = 0;
          // Add 'active' class to clicked element
          removeClass(accordions[i], contents[i], 'active');
        }
        // Remove 'active' class everywhery except of the one that was clicked
        else addClass(accordions[i], contents[i], 'active');
    });
  
    item.style.height = `${item.scrollHeight}px`;
    //Spin daggers
    daggers.forEach((dagger, i) => {
        // dagger.style.transform = 'rotate(45deg)';
        dagger.classList.add('filled')
        if (i !== index) {
            // dagger.style.transform = 'rotate(0deg)';
            dagger.classList.remove('filled')
        }
    });
}

// Add function to all accordion element buttons
accordions.forEach((accordion, i) => accordion.addEventListener("click", () => active(contents[i], i)));

let addClass = (el1, el2, className) =>  {
   el1.classList.add(className);
   el2.classList.add(className);
}

let removeClass = (el1, el2, className) => {
   el1.classList.remove(className);
   el2.classList.remove(className);
}