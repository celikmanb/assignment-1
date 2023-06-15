var titleElement = document.getElementById("title-label")
var subtitleElement = document.getElementById("subtitle-label")
var textElement = document.getElementById("text-label")

var titleInput = document.getElementById("titleInput")
var subtitleInput = document.getElementById("subtitleInput")
var textInput = document.getElementById("textInput")

var titleContainer = document.getElementById('titleContainer')
var subtitleContainer = document.getElementById('subtitleContainer')
var textContainer = document.getElementById('textContainer')


titleInput.value = titleElement.innerText;
subtitleInput.value = subtitleElement.innerText;
textInput.value = textElement.innerText;

var lastTitleSize = 0
var lastSubtitleSize = 0
var lastTextSize = 0
var lastHeight = 0


document.getElementById("titleInput").addEventListener("input", (e) => {
    let smallerCheck = lastTitleSize > e.target.value.length
    titleElement.innerText = e.target.value;
    lastTitleSize = e.target.value.length
    let previousScrollHeight = lastHeight
    let checkOverflow = isOverflowActive(titleContainer)


    const style = getComputedStyle(titleElement);

    if(smallerCheck && lastHeight < previousScrollHeight) {
        if (style.fontSize == "42px") {
            titleElement.style.fontSize = "50px"
        }else if(style.fontSize == "50px") {
            titleElement.style.fontSize = "60px"
        }
    }

    if (checkOverflow) {
        if(style.fontSize == "60px") {
            titleElement.style.fontSize = "50px"
        }else if(style.fontSize == "50px") {
            titleElement.style.fontSize = "42px"
        }else {
            alert("Title is overflow!")
        }
    }
});
document.getElementById("subtitleInput").addEventListener("input", (e) => {
    let smallerCheck = lastSubtitleSize > e.target.value.length
    subtitleElement.innerText = e.target.value;
    lastSubtitleSize = e.target.value.length
    let previousScrollHeight = lastHeight
    let checkOverflow = isOverflowActive(subtitleContainer)

    const style = getComputedStyle(subtitleElement);

    if(smallerCheck && lastHeight < previousScrollHeight) {
        if (style.fontSize == "28px") {
            subtitleElement.style.fontSize = "36px"
        }else if(style.fontSize == "36px") {
            subtitleElement.style.fontSize = "50px"
        }
    }
    
    if (checkOverflow) {
        if(style.fontSize == "50px") {
            subtitleElement.style.fontSize = "36px"
        }else if(style.fontSize == "36px") {
            subtitleElement.style.fontSize = "28px"
        }else {
            alert("Subtitle is overflow!")
        }
    }

});
document.getElementById("textInput").addEventListener("input", (e) => {
    let smallerCheck = lastTextSize > e.target.value.length
    textElement.innerText = e.target.value;
    lastTextSize = e.target.value.length
    let previousScrollHeight = lastHeight
    let checkOverflow = isOverflowActive(textContainer)

    const style = getComputedStyle(textElement);

    if(smallerCheck && lastHeight < previousScrollHeight) {
        if (style.fontSize == "18px") {
            lastTextSize.style.fontSize = "21px"
        }else if(style.fontSize == "21px") {
            lastTextSize.style.fontSize = "24px"
        }else if(style.fontSize == "24px") {
            lastTextSize.style.fontSize = "28px"
        }else if(style.fontSize == "28px") {
            lastTextSize.style.fontSize = "32px"
        }else if(style.fontSize == "32px") {
            lastTextSize.style.fontSize = "36px"
        }
    }

    if (checkOverflow) {
        if(style.fontSize == "36px") {
            textElement.style.fontSize = "32px"
        }else if(style.fontSize == "32px") {
            textElement.style.fontSize = "28px"
        }else if(style.fontSize == "28px") {
            textElement.style.fontSize = "24px"
        }else if(style.fontSize == "24px") {
            textElement.style.fontSize = "21px"
        }else if(style.fontSize == "21px") {
            textElement.style.fontSize = "18px"
        }else {
            alert("Text is overflow!")
        }
    }
});

const isOverflowActive = (e) => {
    lastHeight = e.scrollHeight
    return (e.offsetHeight < e.scrollHeight);
}


