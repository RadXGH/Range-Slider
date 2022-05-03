var textSize_rangeslider = document.getElementById("textsize-range");
var pictSize_rangeslider = document.getElementById("pictsize-range");
var pictBorder_rangeslider = document.getElementById("pictborder-range");
var pictShadow_rangeslider = document.getElementById("pictshadow-range");

var textTitle = document.getElementsByClassName("title-text");
var picture = document.getElementsByClassName("picture");

textSize_rangeslider.oninput = function() {
    textTitle[0].style.fontSize = `${this.value}px`;
}

pictSize_rangeslider.oninput = function() {
    picture[0].style.height = `${this.value}px`;
}

pictBorder_rangeslider.oninput = function() {
    picture[0].style.borderWidth = `${this.value}px`;
}

pictShadow_rangeslider.oninput = function() {
    picture[0].style.boxShadow = `0 0 ${this.value}px red`;
}