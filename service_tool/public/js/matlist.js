var job_name_input      = document.getElementById("job_name-input"),
    job_number_input    = document.getElementById("job_number-input");
    
// material row
var materialQuantity        = document.getElementsByName("materialQuantity"),
    materialDiscription     = document.getElementsByName("materialDiscription"),
    quantityFromStock       = document.getElementsByName("quantityFromStock"),
    quantityFromSupplier    = document.getElementsByName("quantityFromSupplier"),
    supplierName            = document.getElementsByName("supplierName"),
    materialPrice           = document.getElementsByName("materialPrice"),
    extended                = document.getElementsByName("extended");
    

function addRow(tableID) {
    var table = document.getElementById(tableID);
    var rowCount = table.rows.length;
    if (rowCount < 48) { // limit the user from creating fields more than your limits
        var row = table.insertRow(rowCount);
        var colCount = table.rows[1].cells.length;
        row.id = 'row_'+rowCount;
            for (var i = 0; i < colCount; i++) {
                var newcell = row.insertCell(i);
                newcell.outerHTML = table.rows[1].cells[i].outerHTML; 
            }
        var listitems= row.getElementsByTagName("input");
        for (i=0; i<listitems.length; i++) {
            listitems[i].setAttribute("oninput", "calculate('"+row.id+"')");
        }
        }else{alert("Max lines = 47. Print and start a new page.");}
}

// function calculate(elementID) {
//     var mainRow = document.getElementById(elementID);
//     var myBox1 = mainRow.cells[0].firstChild.value;
//     var myBox2 = mainRow.cells[5].firstChild.value;
//     var myBoxTotal = myBox1 * myBox2;
//     var formattedTotal = toFinalNumberFormat(myBoxTotal);
//     console.log("formattedTotal = " + formattedTotal);
//     mainRow.cells[6].firstChild.data = formattedTotal;
//     var test =  mainRow.cells[6].firstChild.textContent;
//     console.log("test = " + test);





function calculate(elementID) {
    var mainRow = document.getElementById(elementID);
    var myBox1 = mainRow.cells[0].firstChild.value;
        console.log("myBox1 = " + myBox1);
    var myBox2 = mainRow.cells[5].firstChild.value;
        console.log("myBox2 = " + myBox2);
    var myBoxTotal = myBox1 * myBox2;
        console.log(" myBoxTotal = " + myBoxTotal);
    mainRow.cells[6].firstChild.value = myBoxTotal.toFixed(2);
}

function deleteRow(tableID) {
    var table = document.getElementById(tableID);
    var rowCount = table.rows.length;
    rowCount--;
    if(rowCount <=1){
        alert("you can not delete the first row.");
        return;
    }
    table.deleteRow(rowCount);
    }
    
function subtotaler(){
    var totalPrice = document.getElementsByClassName("total-price");
    var i, priceText, grandTotal = 0;
    for (i = 0; i < totalPrice.length; i++) {
        priceText = parseFloat(totalPrice[i].value);
        grandTotal += priceText;
    }
    document.getElementById('material_sub_total').value = toFinalNumberFormat(grandTotal);
    var sTotal = grandTotal * .06;
    document.getElementById("material_tax").value = toFinalNumberFormat(sTotal);
    var gTotal = sTotal + grandTotal;
    document.getElementById('material_total').value = toFinalNumberFormat(gTotal);
}

function toFinalNumberFormat(controlToCheck){
    var enteredNumber = controlToCheck.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        console.log("enteredNumber = "+ enteredNumber);
        return enteredNumber;
}


