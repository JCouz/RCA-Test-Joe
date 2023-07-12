const startBtn = document.getElementById('startBtn');
const startSlide = document.getElementById('startSlide');
const quizSlides = document.getElementById('quizSlides');
const backBtn = document.getElementById('backBtn');
const nextBtn = document.getElementById('nextBtn');

startBtn.addEventListener('click', startQuiz);
backBtn.addEventListener('click', goToPreviousSlide);
nextBtn.addEventListener('click', goToNextSlide);

let currentSlide = 0;

let questions = {
  slide1: {
    question: 'What is your hair type?',
    text: 'Select all that apply',
    options: [
      {
        image:
          'https://cdn.shopify.com/s/files/1/0761/8176/6464/files/Mask_group-5.png?v=1688498585',
        typeText: 'Straight',
        selected: false,
      },
      {
        image:
          'https://cdn.shopify.com/s/files/1/0761/8176/6464/files/Mask_group.png?v=1688498585',
        typeText: 'Wavy',
        selected: false,
      },
      {
        image:
          'https://cdn.shopify.com/s/files/1/0761/8176/6464/files/Mask_group-1.png?v=1688498585',
        typeText: 'Loose Curls',
        selected: false,
      },
      {
        image:
          'https://cdn.shopify.com/s/files/1/0761/8176/6464/files/Mask_group-2.png?v=1688498585',
        typeText: 'Spirals',
        selected: false,
      },
      {
        image:
          'https://cdn.shopify.com/s/files/1/0761/8176/6464/files/Mask_group-3.png?v=1688498585',
        typeText: 'Ringlets',
        selected: false,
      },
      {
        image:
          'https://cdn.shopify.com/s/files/1/0761/8176/6464/files/Mask_group-4.png?v=1688498586',
        typeText: 'Coils',
        selected: false,
      },
      {
        image:
          'https://cdn.shopify.com/s/files/1/0761/8176/6464/files/Mask_group-6.png?v=1688498585',
        typeText: 'Corkscrew Curls',
        selected: false,
      },
    ],
  },
  slide2: {
    question: 'What is your hair concern?',
    text: 'Select all that apply',
    options: [
      {
        image:
          'https://cdn.shopify.com/s/files/1/0761/8176/6464/files/Ellipse_1_54ecec7a-6c6c-453b-8290-c30bc5dfccc8.png?v=1688501454',
        typeText: 'Breakage & hair regrowth',
        selected: false,
      },
      {
        image:
          'https://cdn.shopify.com/s/files/1/0761/8176/6464/files/Mask_group_5c8c40f9-522f-4400-aaea-6023584030e4.png?v=1688501454',
        typeText: 'Blonde care',
        selected: false,
      },
      {
        image:
          'https://cdn.shopify.com/s/files/1/0761/8176/6464/files/Ellipse_3_8d5da184-e7ed-4fc8-81db-542592d541e4.png?v=1688501454',
        typeText: 'Vibrant blonde tones',
        selected: false,
      },
      {
        image:
          'https://cdn.shopify.com/s/files/1/0761/8176/6464/files/Mask_group-1_991b0bce-5a60-447b-bb50-41fd06424aae.png?v=1688501454',
        typeText: 'Curl care',
        selected: false,
      },
      {
        image:
          'https://cdn.shopify.com/s/files/1/0761/8176/6464/files/Mask_group-2_d84bb714-f6a2-4c37-851b-d11a6ce674c8.png?v=1688501454',
        typeText: 'Dry & frizzy',
        selected: false,
      },
      {
        image:
          'https://cdn.shopify.com/s/files/1/0761/8176/6464/files/Mask_group-3_ba6f1b2a-7898-4ab4-a5b6-99c9a2d92667.png?v=1688501454',
        typeText: 'Damaged & over processed',
        selected: false,
      },
      {
        image:
          'https://cdn.shopify.com/s/files/1/0761/8176/6464/files/Ellipse_8_fa6a3031-456f-43e8-9c33-5dd3730a160c.png?v=1688501454',
        typeText: 'Dull & lacks shine',
        selected: false,
      },
    ],
  },
  slide3: {
    question: 'How do you style your hair?',
    text: 'Select all that apply',
    options: [
      {
        typeText: 'Hair dryer',
        selected: false,
      },
      {
        typeText: 'Curling iron',
        selected: false,
      },
      {
        typeText: 'Straightener',
        selected: false,
      },
      {
        typeText: 'Protective bands',
        selected: false,
      },
      {
        typeText: 'Air dry',
        selected: false,
      },
      {
        typeText: 'None',
        selected: false,
      },
    ],
  },
};

function startQuiz() {
  startSlide.classList.add('hide');
  quizSlides.classList.remove('hide');
  showSlide(currentSlide);
}

function showSlide(i) {
  const question = document.getElementById('question');
  const questionText = document.getElementById('questionText');
  const optionImg = document.getElementById('optionImg');
  const optionText = document.getElementsByClassName('optionText');

  const currentQuestion = Object.values(questions)[i];
  question.textContent = currentQuestion.question;
  questionText.textContent = currentQuestion.text;

  for (let i = 0; i < currentQuestion.options.length; i++) {

    let img = document.createElement('img');
    img.src = option.image;
    img.width = 119;
    img.height = 119;

    document.getElementById('imageContainer').appendChild(img);
    //down.innerHTML = "Image Element Added.";
    
    //var tag = document.createElement("img");
    //var text = document.createTextNode(option.typeText);
    //tag.appendChild(text);
    
    //var element = document.getElementById("");
    //element.appendChild(tag);
    
    //const option = currentQuestion.options[i];
    //optionImg.src = option.image;
    //optionText[i].textContent = option.typeText;
  }

  // Show or hide the back and next buttons
  if (i === 0) {
    backBtn.style.display = 'none';
  } else {
    backBtn.style.display = '';
  }

  if (i === Object.keys(questions).length - 1) {
    nextBtn.textContent = 'Finish';
  } else {
    nextBtn.textContent = 'Next';
  }
}

function goToPreviousSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    showSlide(currentSlide);
  } else {
    startSlide.classList.remove('hide');
    quizSlides.classList.add('hide');
    currentSlide = 0;
  }
}

function goToNextSlide() {
  if (currentSlide < Object.keys(questions).length - 1) {
    currentSlide++;
    showSlide(currentSlide);
  } else {
  }
}
