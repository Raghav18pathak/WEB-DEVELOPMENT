/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inp = document.getElementById("num-input")
const butt = document.getElementById("convert-btn")
const length = document.getElementById("length-el")
const volume = document.getElementById("volume-el")
const mass = document.getElementById("mass-el")

function convertAll(){
    let val = Number(inp.value)
    lengthchange(val)
    volumechange(val)
    masschange(val)
}

butt.addEventListener("click", convertAll)

inp.addEventListener("keydown", function(event){
    if (event.key === "Enter") {
        convertAll()
    }
})

function lengthchange(value){
    let feet = (value*3.281).toFixed(3)
    let meter = (value/3.281).toFixed(3)
    length.textContent = `${value} meters = ${feet} feet | ${value} feet = ${meter} meters`
}

function volumechange(value){
    let gallons = (value*0.264).toFixed(3)
    let liter = (value/0.264).toFixed(3)
    volume.textContent = `${value} liters = ${gallons} gallons | ${value} gallons = ${liter} liters`
}

function masschange(value){
    let pounds = (value*2.204).toFixed(3)
    let kilos = (value/2.204).toFixed(3)
    mass.textContent = `${value} kilos = ${pounds} pounds | ${value} pounds = ${kilos} kilos`
}