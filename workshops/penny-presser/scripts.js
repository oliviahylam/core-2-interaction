// get the press button
var pressButton = document.querySelector('button[name="press"]');
var pennySelect = document.querySelector('select[name="penny"]');
var pennyImage = document.querySelector('.penny');

//log press button to the console
console.log(pressButton);

//add event listener to the press button
pressButton.addEventListener('click', () => {

    // log penny value
    console.log(pennySelect.value);
   
    //set the penny image source
    pennyImage.src = 'img/' + pennySelect.value;

     //log penny image
     console.log(pennyImage);


});
 