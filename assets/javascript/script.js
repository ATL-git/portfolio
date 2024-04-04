function previous(){
    const widthSlider = document.querySelector(".slider").offsetWidth;
    const sliderContent = document.querySelector('.slider_content');
    sliderContent.scrollLeft -= widthSlider;
    const scrollLeft = sliderContent.scrollLeft;
    const itemSlider = sliderContent.querySelectorAll('.slider_item');
   
    if (scrollLeft <= 0) {
        sliderContent.scrollLeft = widthSlider * (itemSlider.length - 1);
    }
}


function next(){
    const widthSlider = document.querySelector(".slider").offsetWidth ;
    const sliderContent = document.querySelector('.slider_content')
    sliderContent.scrollLeft += widthSlider ;
    const scrollLeft = sliderContent.scrollLeft
   const itemSlider = sliderContent.querySelectorAll('.slider_item')
   
   if (scrollLeft == widthSlider * (itemSlider.length -1 )) {
    sliderContent.scrollLeft = 0;
   }
}


function openModal(src){
    if (window.innerWidth <= 1100) {
        window.location.href = src
    }else{
        document.querySelector('.overlay').style.display ='block' ;
        document.querySelector('.modal').classList.add('modalOpen')
       
        document.querySelector('#ifram').src = src
    }
   
   
}

function closeModal(){
    document.querySelector('.overlay').style.display ='none' ;
    document.querySelector('.modal').classList.remove('modalOpen')
    
}