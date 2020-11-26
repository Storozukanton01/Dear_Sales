// Target elements 
const accordions1 = document.querySelectorAll('.footer__accordion_Button');
const contents1 = document.querySelectorAll('.footer__accordion_content');
const arrows = document.querySelectorAll('.footer__accordion_arrow');

// Show clicked content and hide others
active1 = (item1, index1) => {
    contents1.forEach((footer__accordion_content, I) => {
        if (I !== index1) {
            footer__accordion_content.style.height = 0;
          // Add 'active' class to clicked element
          removeClass1(accordions1[I], contents1[I], 'active1');
        }
        // Remove 'active' class everywhery except of the one that was clicked
        else addClass1(accordions1[I], contents1[I], 'active1');
    });
  
    item1.style.height = `${item1.scrollHeight}px`;
    //Spin arrows
    arrows.forEach((footer__accordion_arrow, I) => {
        footer__accordion_arrow.style.transform = 'rotate(45deg)';
        if (I !== index1) footer__accordion_arrow.style.transform = 'rotate(-135deg)';
    });
}

// Add function to all accordion element buttons
accordions1.forEach((footer__accordion_Button, I) => footer__accordion_Button.addEventListener("click", () => active1(contents1[I], I)));

let addClass1 = (el11, el21, className1) =>  {
   el11.classList.add(className1);
   el21.classList.add(className1);
}

let removeClass1 = (el11, el21, className1) => {
   el11.classList.remove(className1);
   el21.classList.remove(className1);
}