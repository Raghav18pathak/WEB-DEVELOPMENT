function calculator(){
let distance=document.getElementById("distance").value;
let mileage=document.getElementById("mileage").value;
let price=document.getElementById("price").value;
if(distance && mileage && price){
    let fuelNeeded = distance / mileage;
    let totalCost = fuelNeeded * price;
    document.getElementById("total-cost-display").value = `₹ ${totalCost.toFixed(2)}`;
}
else{    alert("Please fill in all the fields.");
    return;
}

}


document.getElementById("onclick").addEventListener("click", calculator);