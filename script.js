// slide product 1
const leftbtn = document.querySelector(".l-btn");
const rightbtn = document.querySelector(".r-btn");

rightbtn.addEventListener("click", function(event) {
    console.log('done');
    const conent = document.querySelector('.product-slide');
    conent.scrollLeft += 500;
    event.preventDefault();


});
leftbtn.addEventListener("click", function(event) {
    console.log('done');
    const conent = document.querySelector('.product-slide');
    conent.scrollLeft -= 500;
    event.preventDefault();


});
// slide-product 2
const leftbtn1 = document.querySelector(".btn-1b");
const rightbtn1 = document.querySelector(".btn-1a");

rightbtn1.addEventListener("click", function(event) {
    console.log('done');
    const conent = document.querySelector('.product-slide-1');
    conent.scrollLeft += 500;
    event.preventDefault();


});
leftbtn1.addEventListener("click", function(event) {
    console.log('done');
    const conent = document.querySelector('.product-slide-1');
    conent.scrollLeft -= 500;
    event.preventDefault();


});
// slide books
const leftbtn2 = document.querySelector(".btn-2b");
const rightbtn2 = document.querySelector(".btn-2a");

rightbtn2.addEventListener("click", function(event) {
    console.log('done');
    const conent = document.querySelector('.product-slide-2');
    conent.scrollLeft += 500;
    event.preventDefault();


});
leftbtn2.addEventListener("click", function(event) {
    console.log('done');
    const conent = document.querySelector('.product-slide-2');
    conent.scrollLeft -= 500;
    event.preventDefault();
});
// Back to top (footer section)
const backtop = document.querySelector(".backtop");
backtop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// sidebar (All)
const sidebar = document.querySelector(".sidebar");
const cross = document.querySelector(".fa-xmark");
const black = document.querySelector(".black");
const sidebtn = document.querySelector(".second-1");

sidebtn.addEventListener("click", () => {
    sidebar.classList.add("active");
    cross.classList.add("active");
    black.classList.add("active");
});

cross.addEventListener("click", () => {
    sidebar.classList.remove("active");
    cross.classList.remove("active");
    black.classList.remove("active");
});

// Account & Lists (dropdown menu)

const sign = document.querySelector(".ac");
const tri = document.querySelector(".triangle");
const signin = document.querySelector(".hdn-sign");

sign.addEventListener("click", () => {
    black.classList.toggle("active-1");
    signin.classList.toggle("active");
    tri.classList.toggle("active");
});
