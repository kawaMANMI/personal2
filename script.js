var count, image_item, choose;

// Describe this function...
function Animal_fun() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  if (count == 0) {
    image_item = 'https://github.com/kawaMANMI/portfolio/blob/main/images/Animals/A1.jpg?raw=true';
  }
  if (count == 1) {
    image_item = 'https://github.com/kawaMANMI/portfolio/blob/main/images/Animals/A2.jpg?raw=true';
  }
  if (count == 2) {
    image_item = 'https://github.com/kawaMANMI/portfolio/blob/main/images/Animals/A3.jpg?raw=true';
  }
  if (count == 3) {
    image_item = 'https://github.com/kawaMANMI/portfolio/blob/main/images/Animals/A4.jpg?raw=true';
  }
  if (count == 4) {
    image_item = 'https://github.com/kawaMANMI/portfolio/blob/main/images/Animals/A5.jpg?raw=true';
  }
}

// Describe this function...
function Landcape_func() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  if (count == 0) {
    image_item = 'https://github.com/kawaMANMI/portfolio/blob/main/images/landscapes/L1.jpg?raw=true';
  }
  if (count == 1) {
    image_item = 'https://github.com/kawaMANMI/portfolio/blob/main/images/landscapes/L2.jpg?raw=true';
  }
  if (count == 2) {
    image_item = 'https://github.com/kawaMANMI/portfolio/blob/main/images/landscapes/L3.jpg?raw=true';
  }
  if (count == 3) {
    image_item = 'https://github.com/kawaMANMI/portfolio/blob/main/images/landscapes/L4.jpg?raw=true';
  }
  if (count == 4) {
    image_item = 'https://github.com/kawaMANMI/portfolio/blob/main/images/landscapes/L5.jpg?raw=true';
  }
}


count = 0;
Animal_fun();
let element_image = document.getElementById('image');
element_image.setAttribute("src", image_item);


document.getElementById('Animals').addEventListener('click', (event) => {
  let element_Animals = document.getElementById('Animals');
  element_Animals.style.backgroundColor = '#000000';
  element_Animals.style.color = '#ffffff';
  let element_Landscapes = document.getElementById('Landscapes');
  element_Landscapes.style.backgroundColor = '#ffffff';
  element_Landscapes.style.color = '#000000';
  choose = 1;

});

document.getElementById('Landscapes').addEventListener('click', (event) => {
  let element_Landscapes2 = document.getElementById('Landscapes');
  element_Landscapes2.style.backgroundColor = '#000000';
  element_Landscapes2.style.color = '#ffffff';
  let element_Animals2 = document.getElementById('Animals');
  element_Animals2.style.backgroundColor = '#ffffff';
  element_Animals2.style.color = '#000000';
  choose = 0;

});

document.getElementById('Next').addEventListener('click', (event) => {
  if (count <= 3) {
    count = (typeof count === 'number' ? count : 0) + 1;
  }
  if (count >= 4) {
    count = 0;
  }
  if (choose == 1) {
    Animal_fun();
  }
  if (choose == 0) {
    Landcape_func();
  }
  let element_image2 = document.getElementById('image');
  element_image2.setAttribute("src", image_item);

});

document.getElementById('Previous').addEventListener('click', (event) => {
  if (count <= 4) {
    count = (typeof count === 'number' ? count : 0) + -1;
  }
  if (count < 0) {
    count = 4;
  }
  if (choose == 1) {
    Animal_fun();
  }
  if (choose == 0) {
    Landcape_func();
  }
  let element_image3 = document.getElementById('image');
  element_image3.setAttribute("src", image_item);

});