const images = [
    'https://gugimages.s3.us-east-2.amazonaws.com/wp-content/uploads/2024/12/26000935/Mufasa-featured.jpeg',
    'https://movies.sterkinekor.co.za/CDN/media/entity/get/FilmTitleGraphic/HO00003393?referenceScheme=HeadOffice&allowPlaceHolder=true',
    'https://m.media-amazon.com/images/S/pv-target-images/2a3dbede2481b89a6f03f348d52e0fd562dabe78d97317e199873b8ab94964ec.jpg',
    'https://movies.sterkinekor.co.za/CDN/media/entity/get/FilmTitleGraphic/HO00003238?referenceScheme=HeadOffice&allowPlaceHolder=true'
];

let active_image = 1;

export default function Slider(container) {
    setInterval(() => {
        container.innerHTML = `
            <img src="${images[active_image]}" alt="Slider image" class="w-full lg:h-[700px]"/>
        `;

        
        if (active_image >= (images.length - 1)) {
            active_image = 0;
        }else{
            active_image++;
        }

    }, 4000);
}
