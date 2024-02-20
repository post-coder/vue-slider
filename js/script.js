

const { createApp } = Vue;

createApp({
    data() {
        return {

            currentSlideIndex: 0,
            
            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, 
                {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, 
                {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, 
                {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, 
                {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],

            autoplayTimer: null,

        }
    },

    methods: {

        nextSlide() {
            this.currentSlideIndex++;

            if(this.currentSlideIndex >= this.slides.length) {
                this.currentSlideIndex = 0;
            }
        },

        prevSlide() {
            this.currentSlideIndex--;

            if(this.currentSlideIndex < 0) {
                this.currentSlideIndex = this.slides.length - 1;
            }
        },

        changeSlide(newIndex) {
            this.currentSlideIndex = newIndex;
        },

        stopAutoplay() {
            // bloccare l'autoplay
            clearInterval(this.autoplayTimer);
        },

        startAutoplay() {
            this.autoplayTimer = setInterval(this.nextSlide, 3000);
        },

    },

    mounted() {
        // tutto il codice che scrivo qui dentro verrà eseguito quando l'applicazione
        // ha finito di essere montata, ovvero quando tutte le sue funzionalità e il layout html
        // è stato caricato
        
        // avviare l'autoplay dello slideshow
        this.startAutoplay();

    },
}).mount("#app");


