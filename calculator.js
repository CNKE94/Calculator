const display = document.getElementById(`calculate`);
const result = document.getElementById(`result`);

const jedan = document.getElementById(`jedan`);
const dva = document.getElementById(`dva`);
const tri = document.getElementById(`tri`);
const cetiri = document.getElementById(`cetiri`);
const pet = document.getElementById(`pet`);
const sest = document.getElementById(`sest`);
const sedam = document.getElementById(`sedam`);
const osam = document.getElementById(`osam`);
const devet = document.getElementById(`devet`);
const nula = document.getElementById(`nula`);

const plus = document.getElementById(`plus`);
const minus = document.getElementById(`minus`);
const podeljeno = document.getElementById(`podeljeno`);
const puta = document.getElementById(`puta`);
const jednako = document.getElementById(`jednako`);
const obrisi = document.getElementById(`obrisi`);

const allButtons = document.getElementsByClassName(`center`);
const img = document.getElementById(`img`);
const max_chars = 15;
const max_chars_result = 8;

window.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        try {
            result.textContent = eval(display.textContent);
        } catch {
            display.textContent = `Error!`;
        }
    }
    if(e.key === "1") {
        display.textContent += 1;
    }
    if(e.key === "2") {
        display.textContent += 2;
    }
    if(e.key === "3") {
        display.textContent += 3;
    }
    if(e.key === "4") {
        const jedan = 1;
        display.textContent += 4;
    }
    if(e.key === "5") {
        const jedan = 1;
        display.textContent += 5;
    }
    if(e.key === "6") {
        display.textContent += 6;
    }
    if(e.key === "7") {
        display.textContent += 7;
    }
    if(e.key === "8") {
        display.textContent += 8;
    }
    if(e.key === "9") {
        display.textContent += 9;
    }
    if(e.key === "0") {
        display.textContent += 0;
    }


    if(e.key === "*") {
        display.textContent += "*";
    }
    if(e.key === "+") {
        display.textContent += "+";
    }
    if(e.key === "-") {
        display.textContent += "-";
    }
    if(e.key === "/") {
        display.textContent += "/";
    }
});

window.addEventListener(`keydown`, function(e) {
    if(e.key === "Backspace") {
        display.textContent = display.textContent.slice(0, -1);
    }

    if(e.key === "Delete") {
        display.textContent = ``;
        result.textContent = `0`;
    }
});

jedan.addEventListener(`click`, function() {
    display.textContent += 1;
});


dva.addEventListener(`click`, function() {
    display.textContent += 2;
});

tri.addEventListener(`click`, function() {
    display.textContent += 3;
});

cetiri.addEventListener(`click`, function() {
    display.textContent += 4;
});

pet.addEventListener(`click`, function() {
    display.textContent += 5;
});

sest.addEventListener(`click`, function() {
    display.textContent += 6;
});

sedam.addEventListener(`click`, function() {
    display.textContent += 7;
});

osam.addEventListener(`click`, function() {
    display.textContent += 8;
});

devet.addEventListener(`click`, function() {
    display.textContent += 9;
});

nula.addEventListener(`click`, function() {
    display.textContent += 0;
});

obrisi.addEventListener(`click`, function() {
    display.textContent = ``;
    result.textContent = `0`;
});

plus.addEventListener(`click`, function() {
    if(display.textContent.length == display.textContent.lastIndexOf("+") + 1) {
        display.textContent += '';
    } else {
        display.textContent += '+';
        if(display.textContent.length - 1 == display.textContent.lastIndexOf("-") + 1) {
            display.textContent = display.textContent.slice(0, -2);
            display.textContent += '+';
        }
        if(display.textContent.length - 1 == display.textContent.lastIndexOf("*") + 1) {
            display.textContent = display.textContent.slice(0, -2);
            display.textContent += '+';
        }
        if(display.textContent.length - 1 == display.textContent.lastIndexOf("/") + 1) {
            display.textContent = display.textContent.slice(0, -2);
            display.textContent += '+';
        }
    }
});

minus.addEventListener(`click`, function() {
    if(display.textContent.length == display.textContent.lastIndexOf("-") + 1) {
        display.textContent += '';
    } else {
        display.textContent += '-';
        if(display.textContent.length - 1 == display.textContent.lastIndexOf("*") + 1) {
            display.textContent = display.textContent.slice(0, -2);
            display.textContent += '-';
        }
        if(display.textContent.length - 1 == display.textContent.lastIndexOf("+") + 1) {
            display.textContent = display.textContent.slice(0, -2);
            display.textContent += '-';
        }
        if(display.textContent.length - 1 == display.textContent.lastIndexOf("/") + 1) {
            display.textContent = display.textContent.slice(0, -2);
            display.textContent += '-';
        }
    }
});

puta.addEventListener(`click`, function() {
    if(display.textContent.length == display.textContent.lastIndexOf("*") + 1) {
        display.textContent += '';
    } else {
        display.textContent += '*';
        if(display.textContent.length - 1 == display.textContent.lastIndexOf("-") + 1) {
            display.textContent = display.textContent.slice(0, -2);
            display.textContent += '*';
        }
        if(display.textContent.length - 1 == display.textContent.lastIndexOf("+") + 1) {
            display.textContent = display.textContent.slice(0, -2);
            display.textContent += '*';
        }
        if(display.textContent.length - 1 == display.textContent.lastIndexOf("/") + 1) {
            display.textContent = display.textContent.slice(0, -2);
            display.textContent += '*';
        }
    }
});

podeljeno.addEventListener(`click`, function() {
    if(display.textContent.length == display.textContent.lastIndexOf("/") + 1) {
        display.textContent += '';
    } else {
        display.textContent += '/';
        if(display.textContent.length - 1 == display.textContent.lastIndexOf("-") + 1) {
            display.textContent = display.textContent.slice(0, -2);
            display.textContent += '/';
        }
        if(display.textContent.length - 1 == display.textContent.lastIndexOf("+") + 1) {
            display.textContent = display.textContent.slice(0, -2);
            display.textContent += '/';
        }
        if(display.textContent.length - 1 == display.textContent.lastIndexOf("*") + 1) {
            display.textContent = display.textContent.slice(0, -2);
            display.textContent += '/';
        }
    }
})

jednako.addEventListener(`click`, function() {
    try {
        let rezultat = eval(display.textContent);
        if (parseFloat(rezultat) % 1 !== 0) {
            result.textContent = rezultat.toFixed(8);
        } else {
            result.textContent = rezultat;
        }
    } catch {
        display.textContent = `Error!`;
    }
    // result.textContent = result.textContent.substring(0, max_chars_result);
});

img.addEventListener(`click`, function() {
    display.textContent = display.textContent.slice(0, -1);
});

for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener(`mousedown`, function() {
        display.style.borderRight = `2px solid black`;
        display.style.animation = `none`;
    });

    allButtons[i].addEventListener(`mouseup`, function() {
        display.style.animation = `crtica 1s infinite`;
    });

    allButtons[i].addEventListener(`click`, function() {
        display.textContent = display.textContent.substring(0, max_chars);
    })
};

img.addEventListener(`mousedown`, function() {
    display.style.borderRight = `2px solid black`;
    display.style.animation = `none`;
});

img.addEventListener(`mouseup`, function() {
    display.style.animation = `crtica 1s infinite`;
});