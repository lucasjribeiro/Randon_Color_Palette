
var container_palette = document.querySelector(".container_palette");
document.querySelector(".btn").addEventListener("click", function(){
    addColor();
});


// Creating the color palettes
var allPalette = [];
var alltextColor = [];
for (var i=0; i<100; i++){
    var textColor = document.createElement("span");
    textColor.classList.add("spn"+i);
    var getPalette = document.createElement("div");
    getPalette.classList.add("box"+i);
    getPalette.appendChild(textColor);
    container_palette.appendChild(getPalette);
    allPalette.push(getPalette);
    alltextColor.push(textColor);
}


function addColor(){
    for (var i=0; i<allPalette.length; i++){
        var newColor = randomColor();
        allPalette[i].classList.add("palette");
        allPalette[i].style.background = newColor;
        alltextColor[i].innerText = newColor;
    }
}


function randomColor(){
    const values = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
    var finalValues = [];
    for (var j=0; j<6; j++){
        var random = Math.floor(Math.random() * values.length);
        finalValues.push(values[random]);
    }
    var cor = "#" + finalValues.join("");
    return cor;
}


// calls the function that copies the text to the clipboard when the box is clicked

container_palette.addEventListener("click", function(){
    copyText(event);
})

function copyText(event){
    var class_N = event.target.className;
    var index_Palette = class_N.slice(3,5);

    if (index_Palette !== "ta"){
        index_Palette = parseInt(index_Palette);
        let text = alltextColor[index_Palette].innerText;
        let textArea  = document.createElement('textarea');
        textArea.value = text;
        document.body.append(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    }
}