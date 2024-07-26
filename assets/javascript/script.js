async function sendForm() {
        const body = {
            "name" : document.querySelector('#name').value,
            "email": document.querySelector('#mail').value,
            "comment": document.querySelector('#comment').value,
        };

        await fetch("http://141.95.175.158:3010/send", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    }


function disableButtons(duration) {
    const buttons = document.querySelectorAll('.slider_nav_btn');
    buttons.forEach(button => {
        button.disabled = true;
    });
    setTimeout(() => {
        buttons.forEach(button => {
            button.disabled = false;
        });
    }, duration);
}

function previous() {
    const widthSlider = document.querySelector(".slider").offsetWidth;
    const sliderContent = document.querySelector('.slider_content');
    const itemSlider = sliderContent.querySelectorAll('.slider_item');

    sliderContent.scrollLeft -= widthSlider;
    const scrollLeft = sliderContent.scrollLeft;

    if (scrollLeft <= 0) {
        sliderContent.scrollLeft = widthSlider * (itemSlider.length - 1);
    }


    disableButtons(800);
}

function next() {
    const widthSlider = document.querySelector(".slider").offsetWidth;
    const sliderContent = document.querySelector('.slider_content');
    const itemSlider = sliderContent.querySelectorAll('.slider_item');

    sliderContent.scrollLeft += widthSlider;
    const scrollLeft = sliderContent.scrollLeft;

    if (scrollLeft >= widthSlider * (itemSlider.length - 1)) {
        sliderContent.scrollLeft = 0;
    }


    disableButtons(800);
}

function openModal(src) {
    if (window.innerWidth <= 1150) {
        window.location.href = src
    } else {
        document.querySelector('.overlay').style.display = 'block';
        document.querySelector('.modal').classList.add('modalOpen')

        document.querySelector('#ifram').src = src
    }


}

function closeModal() {
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.modal').classList.remove('modalOpen')

}




