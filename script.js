window.addEventListener('load', ()=>{
    const loader = document.getElementById("loader");
    setTimeout(()=> {
        loader.classList.add("hide");
    }, 1500);
})

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');

const ac = document.getElementById('ac');
const back = document.getElementById('c');

const dzero = document.getElementById('dzero');
const zero = document.getElementById('zero');
const dot = document.getElementById('dot');
const equal = document.getElementById('equal');

const percent = document.getElementById('p');
const division = document.getElementById('division');
const multi = document.getElementById('multiplication');
const sub = document.getElementById('substraction');
const add = document.getElementById('addition');

const screen = document.getElementById('s');

one.addEventListener('click', ()=>{
    screen.value += one.value;
    screen.scrollLeft = screen.scrollWidth;
    screen.focus();
})
two.addEventListener('click', ()=>{
    screen.value += two.value;
    screen.scrollLeft = screen.scrollWidth;
    screen.focus();
})
three.addEventListener('click', ()=>{
    screen.value += three.value;
    screen.scrollLeft = screen.scrollWidth;
    screen.focus();
})
four.addEventListener('click', ()=>{
    screen.value += four.value;
    screen.scrollLeft = screen.scrollWidth;
    screen.focus();
})
five.addEventListener('click', ()=>{
    screen.value += five.value;
    screen.scrollLeft = screen.scrollWidth;
    screen.focus();
})
six.addEventListener('click', ()=>{
    screen.value += six.value;
    screen.scrollLeft = screen.scrollWidth;
    screen.focus();
})
seven.addEventListener('click', ()=>{
    screen.value += seven.value;
    screen.scrollLeft = screen.scrollWidth;
    screen.focus();
})
eight.addEventListener('click', ()=>{
    screen.value += eight.value;
    screen.scrollLeft = screen.scrollWidth;
    screen.focus();
})
nine.addEventListener('click', ()=>{
    screen.value += nine.value;
    screen.scrollLeft = screen.scrollWidth;
    screen.focus();
})
zero.addEventListener('click', ()=>{
    screen.value += zero.value;
    screen.scrollLeft = screen.scrollWidth;
    screen.focus();
})
dzero.addEventListener('click', ()=>{
    screen.value += dzero.value;
    screen.scrollLeft = screen.scrollWidth;
    screen.focus();
})
dot.addEventListener('click', ()=>{
    screen.value += dot.value;
    screen.scrollLeft = screen.scrollWidth;
    screen.focus();
})
add.addEventListener('click', ()=>{
    screen.value += add.value;
    screen.scrollLeft = screen.scrollWidth;
    screen.focus();
})
sub.addEventListener('click', ()=>{
    screen.value += sub.value;
    screen.scrollLeft = screen.scrollWidth;
    screen.focus();
})
multi.addEventListener('click', ()=>{
    screen.value += multi.value;
    screen.scrollLeft = screen.scrollWidth;
    screen.focus();
})
division.addEventListener('click', ()=>{
    screen.value += division.value;
    screen.scrollLeft = screen.scrollWidth;
    screen.focus();
})
percent.addEventListener('click', ()=>{
    screen.value += percent.value;
    screen.scrollLeft = screen.scrollWidth;
    screen.focus();
})
ac.addEventListener('click', ()=>{
    screen.value = '';
    screen.scrollLeft = screen.scrollWidth;
    screen.focus();
})
back.addEventListener('click', ()=>{
    screen.value = screen.value.slice(0,-1);
    screen.scrollLeft = screen.scrollWidth;
    screen.focus();
})
// prevent user to input unnecessasry characters
screen.addEventListener('input', ()=>{
    screen.value = screen.value.replace(/[^0-9+\-*/%.()✕÷]/g,'');
    screen.scrollLeft = screen.scrollWidth;
    screen.focus();
})
equal.addEventListener('click', ()=>{
    let exp = screen.value;

    exp = exp.replace(/✕/g, "*");
    exp = exp.replace(/÷/g, "/");

    exp = exp.replace(/(\d+(\.\d+)?)%/g, "($1/100)");

    try {
        screen.value = eval(exp);
    } catch {
        screen.value = "Error";
    }
})