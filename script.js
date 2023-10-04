const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

//Contact section buttons
const twitchButton = document.getElementById("twitch");
const gitHubButton = document.getElementById("github");
const youTubeButton = document.getElementById("youtube");
const twitterButton = document.getElementById("twitter");

// Dark or Light Images
function imageMode(color) {
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_conceptual_idea_${color}.svg`;
    image3.src = `img/undraw_feeling_proud_${color}.svg`;
}

// Dark Mode Styles
function darkMode () {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    imageMode('dark');
}

//Light Mode Styles
function lightMode () {
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    imageMode('light');
}

//Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode();
    }
}

// Contacts web links
function openTwitchLink () {
    const twitchLink = `https://www.twitch.tv`;
    window.open(twitchLink, '_blank');
}

function openGitHubLink () {
    const gitHubLink = `https://github.com/Gracek-G`;
    window.open(gitHubLink, '_blank');
}

function openYouTubeLink () {
    const youTubeLink = `https://www.youtube.com/watch?v=b9TE3226T-g`;
    window.open(youTubeLink, '_blank');
}

function openTwitterLink () {
    const twitterLink = `https://twitter.com`;
    window.open(twitterLink, '_blank');
}

//Event Listener
toggleSwitch.addEventListener('change', switchTheme);

twitchButton.addEventListener("click", openTwitchLink);
gitHubButton.addEventListener("click", openGitHubLink);
youTubeButton.addEventListener("click", openYouTubeLink);
twitterButton.addEventListener("click", openTwitterLink); 

// Check Local Sotrage for Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleSwitch.checked = true;
    darkMode();
}
