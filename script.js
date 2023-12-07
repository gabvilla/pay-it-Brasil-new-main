const controls = document.querySelectorAll('.carrossel .arrow');
const slides = document.querySelectorAll('.image');
const maxSlides = slides.length;
let currentItem = 0

controls.forEach((arrow) => {
   arrow.addEventListener('click', (e) => {
      isLeft = e.target.classList.contains('arrow-left');

      if (isLeft){
         currentItem -= 1
      } else{
         currentItem += 1
      }

      if (currentItem < 0){
         currentItem = maxSlides - 1;
      }

      if (currentItem > maxSlides - 1){
         currentItem = 0
      }

      slides.forEach((slide) => slide.classList.remove('last-image'));
      slides.forEach((slide) => slide.classList.remove('current-image'));
      slides.forEach((slide) => slide.classList.remove('next-image'));

      slides[currentItem - 1].classList.add('last-image')
      slides[currentItem].classList.add('current-image')
      slides[currentItem + 1].classList.add('next-image')
   })
})

const selectPlaceholder = document.querySelector('.select-placeholder');
const options = document.querySelectorAll('.options');

selectPlaceholder.addEventListener('click', (e) => {
   const selectList = document.querySelector('.select-list');
   selectList.classList.toggle('active');
   
})

options.forEach((option) => 
   option.addEventListener('click', (e) => {
   }
)
)
