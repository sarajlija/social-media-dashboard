function myFunction() {
    var element = document.body;
    var section_one = document.querySelector(".section__one");
    var section_two = document.querySelector(".section__two");
    var title = document.querySelector(".title");
    var slider = document.querySelector(".slider");
    element.classList.toggle("dark-mode");
    section_one.classList.toggle("section__dark__one");
    section_two.classList.toggle("section__dark__two");
    title.classList.toggle("title__dark");
    slider.classList.toggle("slider__dark")
}
