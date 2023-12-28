function updateBackground() {
    var scrollTop = document.documentElement.scrollTop;
    var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollPercentage = scrollTop / scrollHeight;

    // Define the start and end colors for your gradient.
    var startColor = { r: 224, g: 238, b: 255 }; // Light sky blue
    var endColor = { r: 150, g: 190, b: 255 };  // Soft cerulean blue 

    // Calculate the intermediate color based on scroll position
    var r = Math.round(startColor.r + (endColor.r - startColor.r) * scrollPercentage);
    var g = Math.round(startColor.g + (endColor.g - startColor.g) * scrollPercentage);
    var b = Math.round(startColor.b + (endColor.b - startColor.b) * scrollPercentage);

    // Apply the new gradient to the body background
    document.body.style.background = `linear-gradient(to right, rgb(${r}, ${g}, ${b}), #b0d1ff)`;
}

// Run the function on initial load
updateBackground();

// Update the background on scroll
document.addEventListener('scroll', updateBackground);



document.addEventListener('DOMContentLoaded', () => {
    const languageToggle = document.getElementById('languageToggle');

    const englishText = {
        'navProjects': 'Projects',
        'navAbout': 'About',
        'navContact': 'Contact',
        'aboutHeading': 'About Me',
        'aboutText': 'Hi! My name is Axel and I\'m studying my fourth year at the Degree Programme in Media Technology at KTH. Welcome to my portfolio website!',
        'projectsHeading': 'My Projects',
        'MTGNprojectTitle': 'KTH Media Technology Reception Website',
        'MTGNprojectDescription': 'I was the project manager for the development of the Media Technology Reception Website at KTH in 2023. The project involved working with React, Firebase, HTML, Javascript och CSS. We also used the CMS Contentful.',
        'emailLink': 'axelbarckholst@gmail.com',
        'linkedinLink': 'LinkedIn',
        'contactHeading' : 'Contact me',
        'DogProjectTitle' : 'Canine Guessrd — A dog guessing game',
        'DogProjectDescription' : 'This was the final Project in the course “Interaction Programming and the Dynamic Web”. For this project we worked with React, Firebase, API’s, HTML, Javascript and CSS.'
    };

    const swedishText = {
        'navProjects': 'Projekt',
        'navAbout': 'Om Mig',
        'navContact': 'Kontakt',
        'aboutHeading': 'Om Mig',
        'aboutText': 'Hej! Jag heter Axel och jag pluggar mitt fjärde år på civilingenjörsprogrammet i medieteknik på KTH. Välkommen till min portfolio!',
        'projectsHeading': 'Mina Projekt',
        'MTGNprojectTitle': 'KTH Medietekniks Mottagningshemsida',
        'MTGNprojectDescription': 'Jag var projektledare för utvecklingen av webbsidan till mottagningen för medieteknik på KTH 2023. Projektet involverade att jobba med React, Firebase, HTML, Javascript och CSS. Vi använde oss även av CMS:en Contentful.',
        'emailLink': 'axelbarckholst@gmail.com',
        'linkedinLink': 'LinkedIn',
        'contactHeading' : 'Kontakta mig',
        'DogProjectTitle' : 'Canine Guessrd — ett hundquiz',
        'DogProjectDescription' : 'Detta var slutprojektet i kursen “Interaktionsprogrammering och dynamiska webben”. I projektet jobbade vi med React, Firebase, API’s, HTML, Javascript och CSS.'
    };

    let isEnglish = true;

    languageToggle.addEventListener('click', () => {
        isEnglish = !isEnglish;
        updateLanguage(isEnglish ? englishText : swedishText);
        languageToggle.textContent = isEnglish ? 'Swedish' : 'English';
    });

    function updateLanguage(texts) {
        for (const key in texts) {
            const element = document.getElementById(key);
            if (element) {
                element.textContent = texts[key];
            }
        }
    }
});
