//validate the Principal field to make sure only integers (1 or greater) is entered
function validateForm()
{
  let x = principal = document.getElementById("principal").value;
  if (x < 1) {
    alert("Enter a positive number");
    return false;
        }
 else {
   principal = document.getElementById("principal").value; 
    }
}

//Update the rate dynamically via range "slider"
function updateRate() 
{
   var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

//Calculate the rough estimate of how long it'd take to double investment.
function compute()
{
    principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var ruleof72 = 72/rate;
    var interest = principal * (1 + rate/100) ** ruleof72 - principal;
    var year = new Date()+parseInt(ruleof72);
    let amountDividedbyHalf = 0.30102999566;  // Log (principal/principal * 0.5) aka log 2 DIVIDED by 12 log (1 + r /12)
    let denominator = 12*Math.log10(1 + (rate * 0.01)/12);
    let yearsToDouble = amountDividedbyHalf / denominator;
    
    /*
    var timetodouble = 12*Math.log10(1.006666);
    */

    document.getElementById("result").innerHTML="If you invest <mark>"+principal+"</mark> at a compound interest rate of <mark>"+rate+"%</mark><br\>You'll DOUBLE your investment by earning an additional <mark>"+principal+",\</mark><br\> in approximately <mark>"+yearsToDouble.toFixed(1)+" years\</mark><br\>"
 return false;
 }

//Reset Form
 function resetform()
 {
    document.getElementById('myform').reset();
  }