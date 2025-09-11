const containerEl = document.querySelector('.container');

const careers = ['Desarrollador Web', 'Diseñador Web', 
    'Ingeniero de Software', 'Freelancer', 'YouTuber'];

let careerIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
    characterIndex++;
    containerEl.innerHTML = `
    <h1>Soy un ${careers[careerIndex].slice(0,characterIndex)}</h1>`;    
    if(characterIndex === careers[careerIndex].length){
        careerIndex++;
        characterIndex = 0;
    }
    if(careerIndex === careers.length){
        careerIndex = 0;
    }
    setTimeout(updateText, 300);
}