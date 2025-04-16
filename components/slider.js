const images = [
    './assets/images/black-widow.webp',
    './assets/images/dark-knight.jpg',
    './assets/images/captain-marvel.jpg',
    './assets/images/the-gorge.jpg',
    './assets/images/dune-part-2.jpg',
    './assets/images/mad-max.jpg',
];

let active_image = 1;

export default function Slider(container) {
    setInterval(() => {
        container.innerHTML = `
            <img src="${images[active_image]}" alt="Slider image" class="w-full h-[170px] sm:h-[250px] md:h-[300px] lg:h-[400px] xl:h-[450px] object-center"/>
        `;

        
        if (active_image >= (images.length - 1)) {
            active_image = 0;
        }else{
            active_image++;
        }

    }, 4000);
}
