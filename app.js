/* Slider with Generator and reset */
//  Get groups of Tecnologies (categories)
const technologies = document.getElementsByClassName("section");

// Generator for slider
function* iterateSlider(indexGenerator = 0){
  let index = indexGenerator;
  
  while(true){
    if(index === technologies.length){
      index = 0;
    }
    yield index++;
  }
}

// Init Slider
const generator = iterateSlider();

// Init fade technologies
setInterval( slider,5000);

function slider(){
  let techActive, techInactive;
  let next = generator.next();
  let index = next.value;

  techInactive = technologies[index+1];
  // If section index greater than array index set in 0
  if(index + 1 > technologies.length-1){
    techInactive = technologies[0];
  }
  
  techInactive.setAttribute("class",'section section-active');
  techActive = technologies[index];
  techActive.setAttribute("class",'section section-hidden');
}