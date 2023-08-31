const left = document.querySelector("#left");
const right = document.querySelector("#right");
const bar = document.querySelector(".koder-bar");
const editor = document.querySelector(".editor");
const run = document.querySelector(".run");
const iframe = document.querySelector(".ifram");

const drag = (e) => {
    e.preventDefault();
    document.selection ? document.selection.empty() : window.getSelection().removeAllRanges();
    left.style.width = (e.pageX - bar.offsetWidth / 3) + "px"; 
    editor.setAttribute("aria-setsize", left.style.width);
};

bar.addEventListener('mousedown', () => {
    document.addEventListener('mousemove', drag);
});

document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', drag);
});

run.addEventListener('click', () => {
    const html = editor.textContent;
    iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
});
