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
})
two.addEventListener('click', ()=>{
    screen.value += two.value;
})
three.addEventListener('click', ()=>{
    screen.value += three.value;
})
four.addEventListener('click', ()=>{
    screen.value += four.value;
})
five.addEventListener('click', ()=>{
    screen.value += five.value;
})
six.addEventListener('click', ()=>{
    screen.value += six.value;
})
seven.addEventListener('click', ()=>{
    screen.value += seven.value;
})
eight.addEventListener('click', ()=>{
    screen.value += eight.value;
})
nine.addEventListener('click', ()=>{
    screen.value += nine.value;
})
zero.addEventListener('click', ()=>{
    screen.value += zero.value;
})
dzero.addEventListener('click', ()=>{
    screen.value += dzero.value;
})
dot.addEventListener('click', ()=>{
    screen.value += dot.value;
})
add.addEventListener('click', ()=>{
    screen.value += add.value;
})
sub.addEventListener('click', ()=>{
    screen.value += sub.value;
})
multi.addEventListener('click', ()=>{
    screen.value += multi.value;
})
division.addEventListener('click', ()=>{
    screen.value += division.value;
})
percent.addEventListener('click', ()=>{
    screen.value += percent.value;
})
ac.addEventListener('click', ()=>{
    screen.value = '';
})
back.addEventListener('click', ()=>{
    screen.value = screen.value.slice(0,-1);
})
// prevent user to input unnecessasry characters
screen.addEventListener('input', ()=>{
    screen.value = screen.value.replace(/[^0-9+\-*/%.()✕÷]/g,'');
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