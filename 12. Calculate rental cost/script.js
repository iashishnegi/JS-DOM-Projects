function calculateCost() {
    var carType = document.getElementById("carType").value;
    var numDays = document.getElementById("numDays").value;

    var rentalCost;
    if (carType === "economy") {
        rentalCost = 4000;
    } 
    else if (carType === "midsize") {
        rentalCost = 10000;
    } 
    else if (carType === "luxury") {
        rentalCost = 20000;
    }

    var totalCost = rentalCost * numDays;

    document.getElementById("totalCost").innerHTML = "Total rental cost: Rs. " + totalCost;
    return totalCost;
}