function calculateTip() {
  var totalBill = document.getElementById("totalBill").value;
  var service = document.getElementById("service").value;
  var numOfPeople = document.getElementById("people").value;


  if (totalBill === "" || service == 0) {
    alert("You forgot something!");
    return;
  }
  
  if (numOfPeople <= 1) {
    alert("How many people are splitting the bill? Can't be just 1...");
    return;
  }

  
 var total = (totalBill * service) / numOfPeople;

  total = total.toFixed(2);

  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;

}

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("calculate").onclick = function() {
  calculateTip();

};