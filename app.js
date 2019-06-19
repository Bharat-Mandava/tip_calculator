function totalTip (){
var totalBill= document.getElementById("totalBill").value
let serviceQuality= document.getElementById("serviceQuality").value
let splitQuantity = document.getElementById("splitQuantity").value;
if (splitQuantity>1){
let totalbillwithtip= ((totalBill*serviceQuality)/splitQuantity)

 
   console.log(totalbillwithtip)
   document.getElementById("resulttip").innerHTML =totalbillwithtip ;
    return (totalbillwithtip)
    
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