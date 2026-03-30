let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let editor = document.getElementById("editor");

let bold = document.getElementById("bold");
let underline = document.getElementById("underline");
let italic = document.getElementById("italic");
let clear = document.getElementById("clear");

let left = document.getElementById("left");
let center = document.getElementById("center");
let right = document.getElementById("right");
let justify = document.getElementById("justify");

let colorpicker = document.getElementById("colorpicker");
let font = document.getElementById("font");
let bgcolor = document.getElementById("bgcolor");

let copyBtn = document.getElementById("copy");
let cutBtn = document.getElementById("cut");
let pasteBtn = document.getElementById("paste");

let bulletBtn = document.getElementById("bullet");
let numberedBtn = document.getElementById("numbered");

let slider = document.getElementById("fontSizeSlider");
let fontSizeValue = document.getElementById("fontSizeValue");

let toggleMode = document.getElementById("toggleMode");

let size = 1;

// font increase
plus.addEventListener("click", () => {
    size += 0.1;
    editor.style.fontSize = size + "em";
});

// font decrease
minus.addEventListener("click", () => {
    size -= 0.1;
    if (size < 0.5) size = 0.5;
    editor.style.fontSize = size + "em";
});

// bold
bold.addEventListener("click", () => {
    editor.style.fontWeight = "bold";
});

// underline
underline.addEventListener("click", () => {
    editor.style.textDecoration = "underline";
});

// italic
italic.addEventListener("click", () => {
    editor.style.fontStyle = "italic";
});

// clear
clear.addEventListener("click", () => {
    editor.innerHTML = "";
});

// text color
colorpicker.addEventListener("input", () => {
    editor.style.color = colorpicker.value;
});

// font change
font.addEventListener('click', ()=>{
    para.style.fontFamily = font.value;
});

// background color
bgcolor.addEventListener("input", () => {
    editor.style.backgroundColor = bgcolor.value;
});

// alignment
left.addEventListener("click", () => {
    editor.style.textAlign = "left";
});

// center
center.addEventListener("click", () => {
    editor.style.textAlign = "center";
});

// right
right.addEventListener("click", () => {
    editor.style.textAlign = "right";
});

// justify
justify.addEventListener("click", () => {
    editor.style.textAlign = "justify";
});


// copy cut paste
copyBtn.addEventListener("click", () => {
    editor.focus(); 
    document.execCommand("copy"); 
});

cutBtn.addEventListener("click", () => {
    editor.focus();
    document.execCommand("cut"); 
});

pasteBtn.addEventListener("click", () => {
    alert("Use Ctrl+V (Cmd+V on Mac) to paste text into the editor.");
});


// unordered list
bulletBtn.addEventListener("click", () => {
    editor.focus();
    document.execCommand("insertUnorderedList");
});

// ordered list
numberedBtn.addEventListener("click", () => {
    editor.focus();
    document.execCommand("insertOrderedList");
});


// font size range 
slider.addEventListener("input", () => {
    editor.style.fontSize = slider.value + "em";
});


// toggle btn
toggleMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
