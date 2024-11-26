//resume download click event

document.getElementById('redirectButton').addEventListener('click', function () {
    window.open('https://github.com/AbhijitSaga', '_blank');
});





//for mobile screen
const hamburger = document.querySelector('.hamburger');
const rightSection = document.querySelector('.right')
hamburger.addEventListener('click', () => {
    rightSection.style.display = rightSection.style.display === 'block' ? 'none' : 'block';
    hamburger.classList.toggle('active');

});






