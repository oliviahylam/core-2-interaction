const toggle = document.getElementById('toggle');
const panel = document.getElementById('panel');
    toggle.addEventListener('click', () => {
    panel.classList.toggle('open');
});

// -----------------

var dietCheckboxes = document.querySelectorAll('input[name="diet"]');
var nutritionCheckboxes = document.querySelectorAll('input[name="nutrition"]');

var mealCards = document.querySelectorAll('.meal-card');

// console.log(dietCheckboxes);

var activeDiets = [];

// go thru all checkboxes
dietCheckboxes.forEach((checkbox) => {

    // listen for change event
    checkbox.addEventListener('change', () => {

        // empty the activeDiets array
        activeDiets = [];
        
        // go thru all checkboxes (again)...
        dietCheckboxes.forEach((checkbox) => {

            // if the checkbox is checked...
            if (checkbox.checked) {

                // add it to the activeDiets array
                activeDiets.push(checkbox.value);

            }
                
        });

        // go through each meal card
        mealCards.forEach((mealCard) => {

            // get the meal card diets
            var mealCardDiets = mealCard.dataset.diet.split(',');

            // compare the meal card diets with the active diets
            var mealCardisVisible = activeDiets.every(value => mealCardDiets.includes(value));

            if (mealCardisVisible) {

                // show the meal card
                mealCard.style.display = 'block';

            } else {

                // hide the meal card
                mealCard.style.display = 'none';
            }

        })

    });
});

// -----------------

// console.log(nutritionCheckboxes);

var activeNutrition = [];

// go thru all checkboxes
nutritionCheckboxes.forEach((checkbox) => {

    // listen for change event
    checkbox.addEventListener('change', () => {

        // empty the activeNutrition array
        activeNutrition = [];
        
        // go thru all checkboxes (again)...
        nutritionCheckboxes.forEach((checkbox) => {

            // if the checkbox is checked...
            if (checkbox.checked) {

                // add it to the activeNutrition array
                activeNutrition.push(checkbox.value);

            }
                
        });

        // go through each meal card
        mealCards.forEach((mealCard) => {

            // get the meal card nutrition
            var mealCardNutrition = mealCard.dataset.nutrition.split(',');

            // compare the meal card nutrition with the active nutrition
            var mealCardisVisible = activeNutrition.every(value => mealCardNutrition.includes(value));

            if (mealCardisVisible) {

                // show the meal card
                mealCard.style.display = 'block';

            } else {

                // hide the meal card
                mealCard.style.display = 'none';
            }

        })
        
    });
});


// -----------------
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.meal-cards.recommended');
    const cards = carousel.querySelectorAll('.meal-card');
    if (!carousel || cards.length === 0) return;
  
    // compute the scroll increment as one card + gap
    const style = getComputedStyle(carousel);
    const gap = parseInt(style.gap) || 0;
    const cardWidth = cards[0].offsetWidth + gap;
    
    let index = 0;
    const total = cards.length;
    const interval = 3000; // ms between scrolls
  
    setInterval(() => {
      index = (index + 1) % total;
      carousel.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
    }, interval);
  });
  
  // -----------------
// protein‐type filter (OR logic)

var proteinCheckboxes = document.querySelectorAll('input[name="protein"]');
var activeProteins    = [];

proteinCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {

    // rebuild the array of checked proteins
    activeProteins = Array.from(proteinCheckboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.value);

    mealCards.forEach(mealCard => {
      // split in case you ever tag multiple meats
      var mealProteins = mealCard.dataset.meat.split(',');

      // if none checked, show all; otherwise show if ANY match
      var isVisible = 
        activeProteins.length === 0 ||
        mealProteins.some(p => activeProteins.includes(p));

      mealCard.style.display = isVisible ? 'block' : 'none';
    });

  });
});
