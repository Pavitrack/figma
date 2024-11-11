// script.js

const speakerSlider = document.querySelector('.speaker-slider');
const speakerDetailsPopup = document.querySelector('.speaker-details-popup');
const closePopupButton = document.querySelector('.popup-close');

const speakers = [
    {
        name: "John Doe",
        image: "speaker1.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
   
];

function createSpeakerCard(speaker) {
    const speakerCard = document.createElement('div');
    speakerCard.classList.add('speaker-card');
}