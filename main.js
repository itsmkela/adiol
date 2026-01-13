function showTip() {
    document.getElementById("depositTip").innerText =
        "Tip: Start with a small amount and increase only when confident.";
}
function setLanguage(lang) {
document.querySelectorAll('[data-en]').forEach(el => {
el.innerText = el.getAttribute('data-' + lang);
});
}
function showSection(id) {
document.querySelectorAll('section').forEach(section => {
section.classList.remove('active');
});
document.getElementById(id).classList.add('active');
}
document.querySelectorAll('section').forEach(section => {
for(let i=0;i<30;i++){
let star = document.createElement('div');
star.classList.add('star');
star.style.width = star.style.height = Math.random()*3+2+'px';
star.style.top = Math.random()*100+'%';
star.style.left = Math.random()*100+'%';
star.style.animationDuration = 2+Math.random()*4+'s';
section.appendChild(star);
}
});
for(let j=0;j<3;j++){
let shooting = document.createElement('div');
shooting.classList.add('shooting-star');
shooting.style.animationDuration = 2+Math.random()*3+'s';
shooting.style.animationDelay = Math.random()*5+'s';
section.appendChild(shooting);
}
});