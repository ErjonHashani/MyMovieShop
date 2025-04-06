const images = [
    './assets/images/black-widow.webp',
    './assets/images/a-working-man.jpg',
    './assets/images/captain-marvel.jpg',
    './assets/images/the-gorge.jpg',
    './assets/images/bridget-jones.jpg'
];

let active_image = 1;

export default function Slider(container) {
    setInterval(() => {
        container.innerHTML = `
            <img src="${images[active_image]}" alt="Slider image" class="w-full h-[150px] sm:h-[350px] md:h-[450px] object-center"/>
        `;

        
        if (active_image >= (images.length - 1)) {
            active_image = 0;
        }else{
            active_image++;
        }

    }, 4000);
}
