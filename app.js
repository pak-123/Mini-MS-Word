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
let fonts = document.getElementById("fonts");
let bgcolor = document.getElementById("bgcolor");

let copyBtn = document.getElementById("copy");
let cutBtn = document.getElementById("cut");
let pasteBtn = document.getElementById("paste");

let bulletBtn = document.getElementById("bullet");
let numberedBtn = document.getElementById("numbered");

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

// font size change
sizing.addEventListener("click", () => {
      editor.style.fontSize = sizing.value + "px";
})

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

// text color
colorpicker.addEventListener("input", () => {
      editor.style.color = colorpicker.value;
});

// font change
fonts.addEventListener('change', () => {
      editor.style.fontFamily = fonts.value;
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

// copy
copyBtn.addEventListener("click", () => {
      editor.focus();
      document.execCommand("copy");
});

// cut
cutBtn.addEventListener("click", () => {
      editor.focus();
      document.execCommand("cut");
});

// paste
pasteBtn.addEventListener("click", () => {
      alert("Use Ctrl+V to paste text into the editor.");
});

// toggle btn
toggleMode.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
});


// bullet list
bulletBtn.addEventListener("click", () => {
      document.execCommand("insertUnorderedList");
});

// numbered list
numberedBtn.addEventListener("click", () => {
      document.execCommand("insertOrderedList");
});