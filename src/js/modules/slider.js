export default class Slider {
    constructor(parent, btns) {
        this.page = document.querySelector(parent);
        this.slides = this.page.querySelectorAll('[data-slide]');
        this.btns = document.querySelectorAll(btns);
        this.slideIndex = 1;
    }

    showSlides(n) {
        this.slideIndex += n;

        if (this.slideIndex > this.slides.length) {
            this.slideIndex = 1;
        }

        if (this.slideIndex < 1) {
            this.slideIndex = this.slides.length;
        }

        try {
            if (this.slideIndex === 3) {
                setTimeout(() => {
                    this.hanson.style.display = 'block';
                    this.hanson.classList.add('slideInUp');
                }, 3000);
            } else {
                this.hanson.classList.remove('slideInUp');
                this.hanson.style.display = 'none';
            }
        } catch(e) {}

        this.slides.forEach(slide => {
            slide.style.display = 'none';
        });

        this.slides[this.slideIndex - 1].style.display = 'block';
    }

    plusSlides() {
        this.showSlides(1);
    }

    render() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {

                if (btn.classList.contains('next')) {
                    this.plusSlides();
                }
            });

            btn.parentElement.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.slideIndex = 0;
                this.showSlides(1);
            });
        });

        try {
            this.hanson = this.page.querySelector('.hanson');
            this.hanson.classList.add('animated');
            this.hanson.style.display = 'none';
        } catch(e) {}
    }
}