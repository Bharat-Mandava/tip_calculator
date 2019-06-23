function totalTip (){
var totalBill= document.getElementById("totalBill").value
let serviceQuality= document.getElementById("serviceQuality").value
let splitQuantity = document.getElementById("splitQuantity").value;
if (splitQuantity>1){
let totalbillwithtip= ((totalBill*serviceQuality)/splitQuantity)
let roundedtotal=totalbillwithtip.toFixed(2)
 
   console.log(totalbillwithtip)
   document.getElementById("resulttip").innerHTML =roundedtotal ;
    return (roundedtotal)
    
} else {
    let totalbillwithtip =  (totalBill*serviceQuality)
    console.log(totalbillwithtip)
    document.getElementById("resulttip").innerHTML =totalbillwithtip ;
    return totalbillwithtip
}
}

document.getElementById("calculatetip").onclick =() => {
    totalTip();
   console.log('you just calculated the tip')
}