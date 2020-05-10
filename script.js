
const minEl = document.querySelector("input#min");
const maxEl = document.querySelector("input#max");
const btn = document.querySelector("button");
const res = document.querySelector("span");

minValue = 1;
maxValue = 100;

minEl.defaultValue = minValue;
maxEl.defaultValue = maxValue;

chosen = [];

btn.addEventListener("click", () => {
    if (chosen.length == maxEl.value - minEl.value) chosen = [];
    let rn = Math.floor(Math.random() * (maxEl.value - minEl.value + 1)) + parseInt(minEl.value);
    while (chosen.includes(rn)) 
        rn = Math.floor(Math.random() * (maxEl.value - minEl.value + 1)) + parseInt(minEl.value);
    res.textContent = rn;
    chosen.push(rn);
    console.log(chosen);
})



