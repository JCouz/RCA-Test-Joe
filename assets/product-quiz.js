let currentSlide = 0;
const startBtn = document.getElementById('startBtn');
const quizSlides = document.getElementById('quiz-slides');

startBtn.addEventListener('click', startQuiz);

function startQuiz() {
  console.log('Working');
  startBtn.classList.add('hide');
  quizSlides.classList.remove('hide');
}

questions = {
  slide1: {
    question: 'What is your hair type?',
    text: 'Select all that apply',
    options: [
      {
        image:
          'https://cdn.shopify.com/s/files/1/0761/8176/6464/files/Mask_group-5.png?v=1688498585',
        typeText: 'Straight',
      },
      {
        image:
          'https://cdn.shopify.com/s/files/1/0761/8176/6464/files/Mask_group.png?v=1688498585',
        typeText: 'Wavy',
      },
      {
        image:
          'https://cdn.shopify.com/s/files/1/0761/8176/6464/files/Mask_group-1.png?v=1688498585',
        typeText: 'Loose Curls',
      },
      {
        image:
          'https://cdn.shopify.com/s/files/1/0761/8176/6464/files/Mask_group-2.png?v=1688498585',
        typeText: 'Spirals',
      },
      {
        image:
          'https://cdn.shopify.com/s/files/1/0761/8176/6464/files/Mask_group-3.png?v=1688498585',
        typeText: 'Ringlets',
      },
      {
        image:
          'https://cdn.shopify.com/s/files/1/0761/8176/6464/files/Mask_group-4.png?v=1688498586',
        typeText: 'Coils',
      },
      {
        image:
          'https://cdn.shopify.com/s/files/1/0761/8176/6464/files/Mask_group-6.png?v=1688498585',
        typeText: 'Corkscrew Curls',
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
      },
      {
        image:
          'https://cdn.shopify.com/s/files/1/0761/8176/6464/files/Mask_group_5c8c40f9-522f-4400-aaea-6023584030e4.png?v=1688501454',
        typeText: 'Blonde care',
      },
      {
        image:
          'https://cdn.shopify.com/s/files/1/0761/8176/6464/files/Ellipse_3_8d5da184-e7ed-4fc8-81db-542592d541e4.png?v=1688501454',
        typeText: 'Vibrant blonde tones',
      },
      {
        image:
          'https://cdn.shopify.com/s/files/1/0761/8176/6464/files/Mask_group-1_991b0bce-5a60-447b-bb50-41fd06424aae.png?v=1688501454',
        typeText: 'Curl care',
      },
      {
        image:
          'https://cdn.shopify.com/s/files/1/0761/8176/6464/files/Mask_group-2_d84bb714-f6a2-4c37-851b-d11a6ce674c8.png?v=1688501454',
        typeText: 'Dry & frizzy',
      },
      {
        image:
          'https://cdn.shopify.com/s/files/1/0761/8176/6464/files/Mask_group-3_ba6f1b2a-7898-4ab4-a5b6-99c9a2d92667.png?v=1688501454',
        typeText: 'Damaged & over processed',
      },
      {
        image:
          'https://cdn.shopify.com/s/files/1/0761/8176/6464/files/Ellipse_8_fa6a3031-456f-43e8-9c33-5dd3730a160c.png?v=1688501454',
        typeText: 'Dull & lacks shine',
      },
    ],
  },
  slide3: {
    question: 'How do you style your hair?',
    text: 'Select all that apply',
    options: [
      {
        typeText: 'Hair dryer',
      },
      {
        typeText: 'Curling iron',
      },
      {
        typeText: 'Straightener',
      },
      {
        typeText: 'Protective bands',
      },
      {
        typeText: 'Air dry',
      },
      {
        typeText: 'None',
      },
    ],
  },
};
