let catsAdoption = [
  {
    name: "Milk",
    gender: "M",
    ageRange: "F",
    state: "SP",
    address: "Tiete",
    city: "São Paulo",
    img: "../assets/adoption/cat1.png"
  },
  {
    name: "Tini",
    gender: "M",
    ageRange: "F",
    state: "SP",
    address: "Osasco",
    city: "São Paulo",
    img: "../assets/adoption/cat2.png"
  },
  {
    name: "Zion",
    gender: "F",
    ageRange: "F",
    state: "SP",
    address: "Guarulhos",
    city: "São Paulo",
    img: "../assets/adoption/cat3.png"
  },
  {
    name: "Bird",
    gender: "F",
    ageRange: "F",
    state: "SP",
    address: "Cotia",
    city: "São Paulo",
    img: "../assets/adoption/cat4.png"
  },
  {
    name: "Milk",
    gender: "M",
    ageRange: "F",
    state: "SP",
    address: "Tiete",
    city: "São Paulo",
    img: "../assets/adoption/cat1.png"
  },
  {
    name: "Tini",
    gender: "M",
    ageRange: "F",
    state: "SP",
    address: "Osasco",
    city: "São Paulo",
    img: "../assets/adoption/cat2.png"
  },
  {
    name: "Zion",
    gender: "F",
    ageRange: "F",
    state: "SP",
    address: "Guarulhos",
    city: "São Paulo",
    img: "../assets/adoption/cat3.png"
  },
  {
    name: "Bird",
    gender: "F",
    ageRange: "F",
    state: "SP",
    address: "Cotia",
    city: "São Paulo",
    img: "../assets/adoption/cat4.png"
  },
  {
    name: "Milk",
    gender: "M",
    ageRange: "F",
    state: "SP",
    address: "Tiete",
    city: "São Paulo",
    img: "../assets/adoption/cat1.png"
  },
  {
    name: "Tini",
    gender: "M",
    ageRange: "F",
    state: "SP",
    address: "Osasco",
    city: "São Paulo",
    img: "../assets/adoption/cat2.png"
  },
  {
    name: "Zion",
    gender: "F",
    ageRange: "F",
    state: "SP",
    address: "Guarulhos",
    city: "São Paulo",
    img: "../assets/adoption/cat3.png"
  },
  {
    name: "Bird",
    gender: "F",
    ageRange: "F",
    state: "SP",
    address: "Cotia",
    city: "São Paulo",
    img: "../assets/adoption/cat4.png"
  },
  {
    name: "Milk",
    gender: "M",
    ageRange: "F",
    state: "SP",
    address: "Tiete",
    city: "São Paulo",
    img: "../assets/adoption/cat1.png"
  },
  {
    name: "Tini",
    gender: "M",
    ageRange: "F",
    state: "SP",
    address: "Osasco",
    city: "São Paulo",
    img: "../assets/adoption/cat2.png"
  },
  {
    name: "Zion",
    gender: "F",
    ageRange: "F",
    state: "SP",
    address: "Guarulhos",
    city: "São Paulo",
    img: "../assets/adoption/cat3.png"
  },
  {
    name: "Bird",
    gender: "F",
    ageRange: "F",
    state: "SP",
    address: "Cotia",
    city: "São Paulo",
    img: "../assets/adoption/cat4.png"
  },
]

let feedbacksList = [
  {
    img: "../assets/feedback/laura.png",
    name: "Laura",
    catName: "Paçoca",
    gender: "F",
    catGender: "F",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra tellus ut erat consequat auctor integer nulla nunc."
  },
  {
    img: "../assets/feedback/romulo.png",
    name: "Rômulo",
    catName: "Pantera",
    gender: "M",
    catGender: "M",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra tellus ut erat consequat auctor integer nulla nunc."
  },
  {
    img: "../assets/feedback/laura.png",
    name: "Laura",
    catName: "Paçoca",
    gender: "F",
    catGender: "F",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra tellus ut erat consequat auctor integer nulla nunc."
  },
  {
    img: "../assets/feedback/romulo.png",
    name: "Rômulo",
    catName: "Pantera",
    gender: "M",
    catGender: "M",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra tellus ut erat consequat auctor integer nulla nunc."
  },
  {
    img: "../assets/feedback/romulo.png",
    name: "Rômulo",
    catName: "Pantera",
    gender: "M",
    catGender: "M",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra tellus ut erat consequat auctor integer nulla nunc."
  }
]

let positionScrollFeedback = 0;

function generateCardAdoption(){

  const container = document.querySelector('.adoption__container__carousel');

  catsAdoption.forEach((cat) => {
    const card = document.createElement('div');
    card.className = 'adoption__container__carousel__card';
  
    const imgCat = document.createElement('img');
    imgCat.className = 'adoption__container__carousel__card__cat';
    imgCat.src = `${cat.img}`;
    imgCat.alt = '';
    card.appendChild(imgCat);
  
    const imgGen = document.createElement('img');
    imgGen.className = 'adoption__container__carousel__card__gen';
    if(cat.gender == "M"){
      imgGen.src = '../assets/adoption/macho.png';
    }else{
      imgGen.src = '../assets/adoption/femea.png';
    }
    imgGen.alt = '';
    card.appendChild(imgGen);
  
    const infoDiv = document.createElement('div');
  
    const p1 = document.createElement('p');
    p1.textContent = cat.name;
    infoDiv.appendChild(p1);
  
    const p2 = document.createElement('p');
    if(cat.gender == "M"){
      p2.textContent = 'MACHO / '
    }else{
      p2.textContent = 'FÊMEA / '
    }
    if(cat.ageRange == "F"){
      p2.textContent = p2.textContent + "FILHOTE"
    }
    if(cat.ageRange == "A"){
      p2.textContent = p2.textContent + "ADULTO"
    }
    if(cat.ageRange == "I"){
      p2.textContent = p2.textContent + "IDOSO"
    }
    infoDiv.appendChild(p2);
  
    const p3 = document.createElement('p');
  
    const locationIcon = document.createElement('img');
    locationIcon.src = '../assets/adoption/location-icon.png';
    locationIcon.alt = '';
    p3.appendChild(locationIcon);

    p3.appendChild(document.createTextNode(` ${cat.address}, ${cat.city} ${cat.state}`));
    infoDiv.appendChild(p3);

    card.appendChild(infoDiv);
  
    container.appendChild(card);
  })

}

function generateCardFeedback(){
  const container = document.querySelector('.feedback__container__box__carousel');

  let cardCompleteWidth = 0;
  let containerGap = 0;

  feedbacksList.forEach((feedback) => {
    const card = document.createElement('div');
    card.className = 'feedback__container__box__carousel__card';

    const photoDiv = document.createElement('div');
    photoDiv.className = 'feedback__container__box__carousel__card__photo';

    const img = document.createElement('img');
    img.src = feedback.img;
    img.alt = '';
    photoDiv.appendChild(img);

    const span = document.createElement('span');
    photoDiv.appendChild(span);

    card.appendChild(photoDiv);

    const textDiv = document.createElement('div');
    textDiv.className = 'feedback__container__box__carousel__card__text';

    const h1 = document.createElement('h1');
    h1.textContent = feedback.name;
    textDiv.appendChild(h1);

    const h4 = document.createElement('h4');
    if(feedback.gender == "M"){
      h4.textContent = 'Tutor ';
    }else{
      h4.textContent = 'Tutora ';
    }
    if(feedback.catGender == "M"){
      h4.textContent = h4.textContent + "do "
    }
    else{
       h4.textContent = h4.textContent + "da "
    }
    h4.textContent = h4.textContent + feedback.catName;
    textDiv.appendChild(h4);

    const p = document.createElement('p');
    p.textContent = feedback.text;
    textDiv.appendChild(p);

    card.appendChild(textDiv);

    container.appendChild(card);

    if(cardCompleteWidth == 0){
      let cardComplete = document.querySelector('.feedback__container__box__carousel__card');
      cardCompleteWidth = Number(getComputedStyle(cardComplete).width.replace('px', ''))
      containerGap = Number(getComputedStyle(container).gap.replace('px', ''))
    }
  
  })
  
  container.style.width = (cardCompleteWidth + containerGap) * feedbacksList.length + 'px'
}

function visibleAnswer(answer){
  const answerOne = document.querySelector('.questions__container__one__answer')
  const answerTwo = document.querySelector('.questions__container__two__answer')
  const answerTheree = document.querySelector('.questions__container__three__answer')
  const answerFour = document.querySelector('.questions__container__four__answer')
  const answerFive = document.querySelector('.questions__container__five__answer')

  if(answer == answerOne.className){
    answerOne.style.display = "flex"
    answerTwo.style.display = "none"
    answerTheree.style.display = "none"
    answerFour.style.display = "none"
    answerFive.style.display = "none"
  }
  if(answer == answerTwo.className){
    answerOne.style.display = "none"
    answerTwo.style.display = "flex"
    answerTheree.style.display = "none"
    answerFour.style.display = "none"
    answerFive.style.display = "none"
  }
  if(answer == answerTheree.className){
    answerOne.style.display = "none"
    answerTwo.style.display = "none"
    answerTheree.style.display = "flex"
    answerFour.style.display = "none"
    answerFive.style.display = "none"
  }
  if(answer == answerFour.className){
    answerOne.style.display = "none"
    answerTwo.style.display = "none"
    answerTheree.style.display = "none"
    answerFour.style.display = "flex"
    answerFive.style.display = "none"
  }
  if(answer == answerFive.className){
    answerOne.style.display = "none"
    answerTwo.style.display = "none"
    answerTheree.style.display = "none"
    answerFour.style.display = "none"
    answerFive.style.display = "flex"
  }
}

function hiddenAnswer(answer){
  const answerOne = document.querySelector('.questions__container__one__answer')
  const answerTwo = document.querySelector('.questions__container__two__answer')
  const answerTheree = document.querySelector('.questions__container__three__answer')
  const answerFour = document.querySelector('.questions__container__four__answer')
  const answerFive = document.querySelector('.questions__container__five__answer')

  if(answer == answerOne.className){
    answerOne.style.display = "none"
  }
  if(answer == answerTwo.className){
    answerTwo.style.display = "none"
  }
  if(answer == answerTheree.className){
    answerTheree.style.display = "none"
  }
  if(answer == answerFour.className){
    answerFour.style.display = "none"
  }
  if(answer == answerFive.className){
    answerFive.style.display = "none"
  }
}

function scrollCatAdoption(){
  const cardContainer = document.querySelector('.adoption__container__carousel')
  const cards = document.querySelector('.adoption__container__carousel__card');
  const cardWidth = Number(getComputedStyle(cards).width.replace('px', ''))
  let scrollPosition = 0;

  setInterval(() => {
      scrollPosition += cardWidth;
    
      if (scrollPosition >= cardContainer.scrollWidth) {
          scrollPosition = 0;
      }
      cardContainer.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
      });
    }, 3000);
}

function scrollFeedbackRight(){
  const containerFeedback = document.querySelector('.feedback__container__box')
  const containerCarousel = document.querySelector('.feedback__container__box__carousel')

  const containerFeedbackWidth = Number(getComputedStyle(containerFeedback).width.replace('px', ''))
  const cardFeedback = document.querySelector('.feedback__container__box__carousel__card')
  const cardFeedbackWidth = Number(getComputedStyle(cardFeedback).width.replace('px', ''))
  const containerFeedbackGap = Number(getComputedStyle(containerCarousel).gap.replace('px', ''))

  if ((positionScrollFeedback + (cardFeedbackWidth + containerFeedbackGap)) <= (containerFeedback.scrollWidth - containerFeedbackWidth)) {
    positionScrollFeedback += cardFeedbackWidth + containerFeedbackGap
    
    containerFeedback.scrollTo({
      left: positionScrollFeedback,
      behavior: 'smooth'
    })
  }

}

function scrollFeedbackLeft(){
  const containerFeedback = document.querySelector('.feedback__container__box')
  const containerCarousel = document.querySelector('.feedback__container__box__carousel')

  const cardFeedback = document.querySelector('.feedback__container__box__carousel__card')
  const cardFeedbackWidth = Number(getComputedStyle(cardFeedback).width.replace('px', ''))
  const containerFeedbackGap = Number(getComputedStyle(containerCarousel).gap.replace('px', ''))


  if ((positionScrollFeedback - (cardFeedbackWidth + containerFeedbackGap)) >= 0) {
    positionScrollFeedback -= cardFeedbackWidth + containerFeedbackGap
    
    containerFeedback.scrollTo({
      left: positionScrollFeedback,
      behavior: 'smooth'
    })
  }

}

function fetchApiIbgeLocation(){
  const selectState = document.querySelector(".adoption__selectstate")
  const selectCity = document.querySelector(".adoption__selectcity")
  const stateId = selectState.value

  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateId}/municipios`;

  
  while(selectCity.children.length){
    selectCity.removeChild(selectCity.lastChild)
  }

  let defaultOpt = document.createElement('option');
  defaultOpt.disabled = true;
  defaultOpt.selected = true;
  defaultOpt.hidden = true;
  defaultOpt.textContent = 'Cidade:';
  selectCity.appendChild(defaultOpt);

  fetch(url)
  .then(response => response.json())
  .then(locations => {
    locations.forEach( city => {
      const opt = document.createElement("option")
      opt.value = city.nome
      opt.textContent = city.nome 

      selectCity.appendChild(opt)
    })
  })

}

generateCardAdoption();

generateCardFeedback();

setTimeout(() => {
  scrollCatAdoption();
}, 2000);