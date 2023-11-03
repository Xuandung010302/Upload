let savedInput = "";
var captchaOutput = document.getElementById("captchaOutput");
function validateCaptcha(inputText, correctCaptcha) {
    if (inputText === correctCaptcha) {
        captchaOutput.value = inputText;
        captchaOutput.type = "text";
    } else {
        captchaOutput.value = savedInput;
        captchaOutput.type = "text";
        alert('CAPTCHA is incorrect. Try again.');
    }
}

const captchaText1 = "62100";
const correctCaptcha1 = "62100";

checkCaptcha(captchaText1, correctCaptcha1);

const imageUrls = ["captcha.png", "GetCaptchaImage.png"];
let currentImageIndex = 0;

function changeImage(newImageUrl) {
    const image = document.getElementById("captchaImage");
    image.src = newImageUrl;
}
function continueToNewPage() {
    currentImageIndex++;
    if (currentImageIndex >= imageUrls.length) {
        currentImageIndex = 0;
    }
    changeImage(imageUrls[currentImageIndex]);
    clearInput();
}
function goBack() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = imageUrls.length - 1;
    }
    changeImage(imageUrls[currentImageIndex]);
    clearInput();
}
function clearInput() {
    const inputElement = document.getElementById("captchaInput");
    inputElement.value = "";
    const outputElement = document.getElementById("captchaOutput");
    outputElement.value = "";
}
function checkCaptcha() {
    const inputElement = document.getElementById("captchaInput");
    savedInput = inputElement.value;
}
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        continueToNewPage();
    } else if (event.key === "z" && event.ctrlKey) {
        goBack();
    }
});
let customNextShortcut = "";
let customBackShortcut = "";

document.getElementById("nextShortcut").addEventListener("input", function(event) {
    customNextShortcut = event.target.value;
});

document.getElementById("backShortcut").addEventListener("input", function(event) {
    customBackShortcut = event.target.value;
});

document.addEventListener("keydown", function(event) {
    if (event.key === customNextShortcut) {
        continueToNewPage();
    } else if (event.key === customBackShortcut) {
        goBack();
    }
});