function resetTextPosition(event1, event2) {
    var textElement = document.querySelector(event1);
    textElement.style.display = "none";

    var textLabel = document.querySelector(event2);
    textLabel.style.top = 'auto';
}

function textMouseOver(event1, event2) {
    var textElement = document.querySelector(event1);
    textElement.style.display = "block";

    var textLabel = document.querySelector(event2);
    textLabel.style.top = "-200%";
}


var indicatorLiness = document.querySelectorAll('.indicator-line');
indicatorLiness[0].style.transform = 'translateX(0%)';
indicatorLiness[0].style.visibility = 'visible';
var previousRadioButton = document.querySelector('input[name="image"]:checked');


window.addEventListener('load', function () {
    updateIndicatorLine('#FFA500', 0)
});




function updateIndicatorLine(color, index) {
    var indicatorLines = document.querySelectorAll('.indicator-line');

    const circle = document.querySelector('.circle');
    circle.style.backgroundColor = color;

    var checkedRadioButton = document.querySelector('input[name="image"]:checked');
    var indicatorLine = checkedRadioButton.parentNode.querySelector('.indicator-line');

    const photos = document.querySelectorAll('.circle-watch');

    console.log(photos);
    console.log(index);
    photos.forEach(photo => {


        if (index === parseInt(photo.alt)) {

            const rotation = 45;
            const translateX = -50;
            const translateY = -50;
            const duration = 0.5;
            const timing = `cubic-bezier(0.25, 0.1, 0.25, 1)`;


            photo.style.transform = `
          translate(${translateX}%, ${translateY}%) 
          rotate(${rotation}deg) 
          translateX(-100%) 
          translateY(100%) 
          scale(1) 
          translateX(0%) 
          translateY(0%) 
          rotate(0deg)
    `;
                photo.style.transition = `
          transform ${duration}s ${timing} `;


            console.log(photo);
            photo.style.visibility = 'visible'
  
            photo.style.transform = `
          translate(${translateX}%, ${translateY}%) 
          rotate(${rotation}deg) 
          translateX(-100%) 
          translateY(100%) 
          scale(1) 
          translateX(0%) 
          translateY(0%) 
          rotate(0deg)
    `;
            photo.style.transition = `
      transform ${duration}s ${timing} `;
        }
        else {
            console.log(photo);
            const rotation = -45;
            const translateX = 50;
            const translateY = 50;
            const duration = 0.5;
            const timing = `cubic-bezier(0.25, 0.1, 0.25, 1)`;

            photo.style.transform = `
          translate(${translateX}%, ${translateY}%) 
          rotate(${rotation}deg) 
          translateX(100%) 
          translateY(-100%) 
          scale(1) 
          translateX(0%) 
          translateY(0%) 
          rotate(0deg)
    `;
            photo.style.transition = `
      transform ${duration}s ${timing} `;

        

        }
    });


    for (var i = 0; i < indicatorLines.length; i++) {
        indicatorLines[i].style.visibility = 'hidden';
        if (indicatorLines[i] == indicatorLine) {


            if (previousRadioButton) {
                if (parseInt(previousRadioButton.value) < parseInt(indicatorLines[i].parentNode.querySelector('input').value)) {
                    console.log(parseInt(indicatorLines[i].parentNode.querySelector('input').value));
                    if (parseInt(indicatorLines[i].parentNode.querySelector('input').value - parseInt(previousRadioButton.value) > 1)) {
                        indicatorLines[i].style.transform = 'translateX(-200%)';
                        console.log("_1_");
                    } else {
                        indicatorLines[i].style.transform = 'translateX(-100%)';
                        console.log("_2_");
                    }
                } else {
                    console.log(parseInt(indicatorLines[i].parentNode.querySelector('input').value));
                    if (parseInt(previousRadioButton.value - parseInt(indicatorLines[i].parentNode.querySelector('input').value) > 1)) {
                        indicatorLines[i].style.transform = 'translateX(200%)';
                        console.log("_3_");
                    } else {
                        indicatorLines[i].style.transform = 'translateX(100%)';
                        console.log("_4_");
                    }
                }
            } else {
                console.log("ae")
                indicatorLines[i].style.transform = 'translateX(-100%)';

            }
        }
    }

    for (var i = 0; i < indicatorLines.length; i++) {
        console.log(indicatorLines[i].style.transform);

    }
    console.log(indicatorLine.style.transform);
    indicatorLine.style.visibility = 'visible';
    indicatorLine.classList.add('reset-animation');
    indicatorLine.style.transform = 'translateX(0%)';



    setTimeout(function () {
        indicatorLine.classList.remove('reset-animation');
    }, 1);

    previousRadioButton = checkedRadioButton;
    console.log(previousRadioButton);
}

