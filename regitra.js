const ta = document.querySelector(".TA"),
vt = document.querySelector(".Test"),
bac = document.querySelector(".backg"),
inp = document.querySelector(".inp"),
inp2 = document.querySelector(".inp2"),
addbtn = document.querySelector(".add"),
sel = document.querySelector(".Test2"),
tb = document.querySelector(".prob2 table"),
ex = document.querySelector(".ex");

function tao(){
    if(ta.style.display = 'none'){
        ta.style.display = 'flex'
    }
}

function testo(){
    if(vt.style.display = 'none'){
        vt.style.display = 'flex'
    }
}

function closebtn(){
    if(ta.style.display = 'flex'){
        ta.style.display = 'none';
        inp.value = '';
        inp2.value = '';
    }
    else if(vt.style.display = 'flex'){
        vt.style.display = 'none';
        inp.value = '';
    }
}

function closebtn2(){
    if(vt.style.display = 'flex'){
        vt.style.display = 'none';
        inp.value = '';
    }
}

function closebtn3(){
    if(ex.style.display = 'flex'){
        ex.style.display = 'none';
        inp.value = '';
    }
}

function adbtn(){
    if(sel.style.display = 'none'){
        sel.style.display = 'flex';
        vt.style.display = 'none'
    }
}

function crt(){
    tb.createElement('tr');
}

function crtex(){
    if(sel.style.display = 'flex'){
        sel.style.display = 'none';
        ex.style.display = 'flex'
    }
}