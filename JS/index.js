// get elements
const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
// testemonial variables
const testimonialsContainer = document.querySelector('.testimonial-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');
//new testimonial variables
const openCommentaryBtn = document.querySelector('.open-commentary');
const testimonialsWrapper = document.querySelector('.testimonials-wrapper');
const closeTestimonialsBtn = document.querySelector('.close-testimonials');
//new testimonial navigation buttons
const prevBtn = document.querySelector('.prev-testimonial');
const nextBtn = document.querySelector('.next-testimonial');
//reset progress bar
const progressBar = document.querySelector('.progress-bar');
// CV variables
const openCvBtn = document.querySelector('.open-cv');
const cvWrapper = document.querySelector('.cv-wrapper');
const closeCvBtn = document.querySelector('.close-cv');
// download CV button
const downloadCvBtn = document.querySelector('.download-cv');
const cvContainer = document.querySelector('.cv-container-wrapper');


// create active slide variable
let activeSlide = 0;

//adding event listeners to buttons
rightBtn.addEventListener('click', () => {
    activeSlide++
    //if active slide is greater than last slide, set it to first slide
    if (activeSlide > slides.length - 1) {
        activeSlide = 0;
    }
    setBgToBody();
    setActiveSlide();
})

//adding event listener to left button
leftBtn.addEventListener('click', () => {
    activeSlide--
    //if active slide is less than 0, set it to last slide
    if (activeSlide < 0) {
        activeSlide = slides.length - 1;
    }
    setBgToBody();
    setActiveSlide();
})

// sets background to body on load
setBgToBody();

// function that sets background image to slides
function setBgToBody() {
    // body.style.backgroundImage = ... means set the CSS <body> "background-image
    // property to the <body> element.. same as: body {background-image: url(...)}"
    // active slide starts at 0
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
    //for loop to remove active class from all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    })
    //add active class to the current active slide
    slides[activeSlide].classList.add('active');
}

// new testimonial code
const testimonials = [
    {
        name: "Elon Musk",
        position: "Milijarder",
        photo:
        'resources/Users/ElonMusk.jpg',
        text:
        "Kot veliki finančni podjetnik in vizionar, ki je soustanovil PayPal, Tesla Motors, SpaceX in druga podjetja, je moje ime postalo sinonim za inovacije. Vendar sem v Jeanu Robertu Tkalcu spoznal nekoga, ki ima resnično inovativen pristop k vsakemu problemu, s katerim se sooča, in za razliko od mene dejansko zaključi projekte, ki jih začne."
    },
    {
        name: "Joseph Goebbels",
        position: "Specialist za marketing",
        photo:
        'resources/Users/JosephGoebbels.jpg',
        text:
        "Pred leti sem bil deležen vodenega ogleda muzeja, ki ga je vodil Jean Robert Tkalec, in bil sem navdušen nad njegovo strastjo do zgodovine in sposobnostjo pripovedovanja zgodb. Njegova veščina, da oživi preteklost in jo naredi dostopno ter zanimivo za obiskovalce, je resnično izjemna. Upam si celo reči, da njegove oratorske sposobnosti presegajo celo mojega šefa."
    },
    {
        name: "Simone De Beauvoir",
        position: "Filozofinja",
        photo:
        'resources/Users/SimoneDeBeauvoir.jpg',
        text:
        "Veliko svojega življenja sem zapravila, da bi odgovorila na vprašanje, kaj pomeni biti ženska. Ko sem spoznala Jeana Roberta Tkaleca, pa sem vsaj dobila odgovor na vprašanje, kaj pomeni biti vrhunski zgodovinar. Njegova sposobnost reševanja različnih problemov in poseben čut za ljudi sta mi dali nov pogled na vprašanje, kaj pomeni biti pravi človek."
    },
    {
        name: "Albert Einstein",
        position: "Fizik",
        photo:
        'resources/Users/AlbertEinstein.jpg',
        text:
        "Moja teorija relativnosti je dokazala, da je realnost odvisna od perspektive opazovalca. Vendar pa sem v Jeanu Robertu Tkalcu spoznal nekoga, ki je v perspektivi vsakogar izjemen in ki lahko reši vsak problem, ne glede na to kako zapleten je. Njegov način razmišljanja je resnično edinstven in navdihujoč."
    },
    {
        name: "Julij Cezar",
        position: "Rimski cesar",
        photo:
        'resources/Users/JulijCezar.jpg',
        text:
        "Če se je Jean Robert Tkalec odločil rešiti problem, je bil Rubikon že prestopljen. Njegova zanesljivost in lojalnost sta redki v tem svetu, v katerem so ljudje pogosto pripravljeni izneveriti svoje zaveze. Ali ne, Brutus?"
    },
    {
        name: "Napoleon Bonaparte",
        position: "Vojaški poveljnik",
        photo:
        'resources/Users/NapoleonBonaparte.jpg',
        text:
        "Nedavno sem v svoji rezidenci na Sveti Heleni bral avtobiografijo, v kateri je bila zapisana lažna izjava, 'če mi bi dali sto tisoč Hrvatov, bi osvojil svet'. Takšne napake se ne bi pojavljale, če bi imel ob sebi Jeana Roberta Tkalca, ki bi poskrbel, da so vsi zgodovinski podatki pravilni in natančni."
    },
    {
        name: "Herodot iz Halikarnasa",
        position: "Oče zgodovine",
        photo:
        'resources/Users/HerodotVonHalikarnassos.jpg',
        text:
        "Pri svojih potovanjih sem spoznal veliko različnih kultur in ljudi. Za sporazumevanje sem pogosto potreboval tolmače, ki niso bili vedno zanesljivi. Jean Robert Tkalec obvlada jezike in komunikacijo na tako visoki ravni, da bi bil popoln sopotnik za vsakega raziskovalca ali zgodovinarja."
    }
]

let idx = 0;
let testimonialInterval = null;

function startTestimonialInterval() {
    clearInterval(testimonialInterval);
    testimonialInterval = setInterval(nextTestimonial, 15000);
}

function updateTestimonial() {
    const {name, position, photo, text} =  testimonials[idx];
    // Update testimonial info
    testimonial.innerHTML = text;
    userImage.src = photo;
    username.innerHTML = name;
    role.innerHTML = position;
}

function nextTestimonial() {
    idx++;
    if (idx > testimonials.length - 1) idx = 0;
    updateTestimonial();
    resetProgressBar();
}

// Function to reset progress bar
function resetProgressBar() {
    progressBar.style.animation = 'none';
    progressBar.offsetHeight; // force reflow
    progressBar.style.animation = 'grow 15s linear infinite';
}


//new testimonial navigation event listeners
nextBtn.addEventListener('click', () => {
    nextTestimonial();
    startTestimonialInterval();
});


prevBtn.addEventListener('click', () => {
    idx--;
    if (idx < 0) idx = testimonials.length - 1;
    updateTestimonial();
    resetProgressBar();
    startTestimonialInterval();
});

//new testimonial event listeners for clicking "komentarji" button and close button
openCommentaryBtn.addEventListener('click', () => {
    testimonialsWrapper.classList.remove('hidden');
    updateTestimonial();
    resetProgressBar();
    startTestimonialInterval();
});


closeTestimonialsBtn.addEventListener('click', () => {
    testimonialsWrapper.classList.add('hidden');
    clearInterval(testimonialInterval);
    testimonialInterval = null;
});

// prevents testimonial interval from running in background when tab is not active
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        clearInterval(testimonialInterval);
    } else {
        startTestimonialInterval();
    }
});


// CV event listeners
openCvBtn.addEventListener('click', () => {
    cvWrapper.classList.remove('hidden');
});

closeCvBtn.addEventListener('click', () => {
    cvWrapper.classList.add('hidden');
});

// download CV as PDF
downloadCvBtn.addEventListener('click', () => {
    const options = {
        margin:       0.5,
        filename:     'Jean_Robert_Tkalec_CV.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf()
        .set(options)
        .from(cvContainer)
        .save();
});
