var radio28 = document.querySelector("#one_story"),
    radio35 = document.querySelector("#two_story"),
    afue    = document.querySelector("#afue"),
    sizeMultiplier = 28,
    squareFootEntered,
    btusRequired,
    furnaceSizesArray = ["40000","60000","80000","100000","120000"],
    furnaceSizeArrayElement = 0,
    totalQuoted = 0;

// Section A

// Radio buttons
radio28.addEventListener("click", function() {
   sizeMultiplier = 28;
   console.log ("sizeMultiplier: " + sizeMultiplier);
});

radio35.addEventListener("click", function() {
   sizeMultiplier = 35;
   console.log ("sizeMultiplier: " + sizeMultiplier);
});


// square ft of the building input (enter key = 13)
$(':input[type="number"]').keypress(function(event){
    if(event.which === 13) {
        squareFootEntered = $(this).val();
        sqMultiplier();
        console.log("btusRequired = " + btusRequired);
        $("#reqBtus").text(btusRequired);
    }
});

// possible javascript replacement for the above block
// document.getElementById("sqft_input")
//     .addEventListener("keyup", function(event) {
//     event.preventDefault();
//     if (event.keyCode === 13) {
//         document.getElementById("sqft_input").click();
//     }
// });

// bump up, and down buttons
var bump_down       = document.getElementById("bump_down"),
    bump_up         = document.getElementById("bump_up"),
    btu_selector    = document.getElementById("btu_selector");
    
bump_down.addEventListener("click", function(){
    console.log("the bump down button was clicked");
    furnaceSizeArrayElement --;
    if(furnaceSizeArrayElement < 0){
        furnaceSizeArrayElement ++;
    }
    console.log("Size: " + furnaceSizesArray[furnaceSizeArrayElement]);
    btu_selector.innerHTML = (furnaceSizesArray[furnaceSizeArrayElement]);
});

bump_up.addEventListener("click", function(){
    console.log("the bump up button was pushed");
    furnaceSizeArrayElement ++;
    if(furnaceSizeArrayElement > 4){
        furnaceSizeArrayElement --;
    }
    console.log("Size: " + furnaceSizesArray[furnaceSizeArrayElement]);
    btu_selector.innerHTML = (furnaceSizesArray[furnaceSizeArrayElement]);
});


// 80% afue checkbox toggle
document.addEventListener("DOMContentLoaded", function(event) {
    var _selector = document.querySelector('input[name=afue]');
    _selector.addEventListener('change', function(event) {
        if(_selector.checked) {
            console.log("80% afue check box checked");
            furnaceSizesArray.pop();
            furnaceSizesArray.pop();
            furnaceSizesArray.pop();
            furnaceSizesArray.pop();
            furnaceSizesArray.pop();
            furnaceSizesArray.push("45000","70000","90000","110000","135000");
        }else{
            console.log("80% afue check box unchecked");
            furnaceSizesArray.pop();
            furnaceSizesArray.pop();
            furnaceSizesArray.pop();
            furnaceSizesArray.pop();
            furnaceSizesArray.pop();
            furnaceSizesArray.push("40000","60000","80000","100000","120000");
        }
    });
});


// submit sizr for priceing button
$("#section1submit").click(function() {
    if(furnaceSizeArrayElement === 0) {
        $("#payneSingle80Card").text("1774.00");
        $("#payneSingle95Card").text("2340.00");
        $("#payneTwo95Card").text("2570.00");
        $("#carrierSingle95Card").text("3177.00");
        $("#carrierTwo95Card").text("Unavailable");
        $("#carrierVariable95Card").text("Unavailable");
    }else if(furnaceSizeArrayElement === 1) {
        $("#payneSingle80Card").text("2161.00");
        $("#payneSingle95Card").text("2420.00");
        $("#payneTwo95Card").text("2695.00");
        $("#carrierSingle95Card").text("3222.00");
        $("#carrierTwo95Card").text("4302.00");
        $("#carrierVariable95Card").text("4775.00");
    }else if(furnaceSizeArrayElement === 2) {
        $("#payneSingle80Card").text("2265.00");
        $("#payneSingle95Card").text("2465.00");
        $("#payneTwo95Card").text("2820.00");
        $("#carrierSingle95Card").text("3306.00");
        $("#carrierTwo95Card").text("4557.00");
        $("#carrierVariable95Card").text("5003.00");
    }else if(furnaceSizeArrayElement === 3) {
        $("#payneSingle80Card").text("2395.00");
        $("#payneSingle95Card").text("2520.00");
        $("#payneTwo95Card").text("2920.00");
        $("#carrierSingle95Card").text("3362.00");
        $("#carrierTwo95Card").text("4775.00");
        $("#carrierVariable95Card").text("5281.00");
    }else{
        $("#payneSingle80Card").text("2470.00");
        $("#payneSingle95Card").text("2620.00");
        $("#payneTwo95Card").text("3070.00");
        $("#carrierSingle95Card").text("3417.00");
        $("#carrierTwo95Card").text("4948.00");
        $("#carrierVariable95Card").text("5449.00");
    }
});

function sqMultiplier () {
    console.log("sizeMultiplier: " + sizeMultiplier);
    console.log("squareFootEntered: " + squareFootEntered);
    btusRequired = sizeMultiplier * squareFootEntered;
}

// Section B

$("#f1btn").click(function() {
    $(this).css('background','green');
    console.log("80% AFUE Payne Single Stage Furnace PG8MAA Selected");
    $("#selectedEquipment").text(furnaceSizesArray[furnaceSizeArrayElement] + " BTU Payne Furnace Model: PG8MAA");
    var fPrice = $("#payneSingle80Card").text();
    $("#selectedUnitPrice").text(fPrice);
});

$("#f2btn").click(function() {
    $(this).css('background','green');
    console.log("95.5% AFUE Payne Single Stage Furnace PG9SAS Selected");
    $("#selectedEquipment").text(furnaceSizesArray[furnaceSizeArrayElement] + " BTU Payne Furnace Model: PG9SAS");
    var fPrice = $("#payneSingle95Card").text();
    $("#selectedUnitPrice").text(fPrice);
});

$("#f3btn").click(function() {
    $(this).css('background','green');
    console.log("95.5% AFUE Payne Two Stage Furnace PG9XAT Selected");
    $("#selectedEquipment").text(furnaceSizesArray[furnaceSizeArrayElement] + " BTU Payne Furnace Model: PG9XAT");
    var fPrice = $("#payneTwo95Card").text();
    $("#selectedUnitPrice").text(fPrice);
});

$("#f4btn").click(function() {
    $(this).css('background','green');
    console.log("95.5% AFUE Carrier Single Stage Furnace 59SC5 Selected");
    $("#selectedEquipment").text(furnaceSizesArray[furnaceSizeArrayElement] + " BTU Carrier Furnace Model: 59SC5");
    var fPrice = $("#carrierSingle95Card").text();
    $("#selectedUnitPrice").text(fPrice);
});

$("#f5btn").click(function() {
    $(this).css('background','green');
    console.log("96.7% AFUE Carrier Two Stage Furnace 59TN6 Selected");
    $("#selectedEquipment").text(furnaceSizesArray[furnaceSizeArrayElement] + " BTU Carrier Furnace Model: 59TN6");
    var fPrice = $("#carrierTwo95Card").text();
    $("#selectedUnitPrice").text(fPrice);
});

$("#f6btn").click(function() {
    $(this).css('background','green');
    console.log("97.5% AFUE Carrier Variable Speed Furnace 59MN7 Selected");
    $("#selectedEquipment").text(furnaceSizesArray[furnaceSizeArrayElement] + " BTU Carrier Furnace Model: 59MN7");
    var fPrice = $("#carrierVariable95Card").text();
    $("#selectedUnitPrice").text(fPrice); 
});

// Section C


document.addEventListener("DOMContentLoaded", function(event) {
    var _selector = document.querySelector('input[name=cond-pump-add]');
    _selector.addEventListener('change', function(event) {
        if(_selector.checked) {
            console.log("add condensate pump checked");
            totalQuoted += 150.00;
            $('#myTable tbody').append('<tr id="cond-pump"><td>1</td><td>Install Condensate Pump and nessasary tubing</td><td>$150.00</td></tr>');
        }else{
            console.log("add programmable thermostat unchecked");
            totalQuoted -= 150.00;
            $("#cond-pump").remove();
        }
    });
});

document.addEventListener("DOMContentLoaded", function(event) {
    var _selector = document.querySelector('input[name=prog-tstat-add]');
    _selector.addEventListener('change', function(event) {
        if(_selector.checked) {
            console.log("add programmable thermostat checked");
            totalQuoted += 70.00;
            $('#myTable tbody').append('<tr id="prog-tstat"><td>1</td><td>Upgrade Standard Thermostat to Programmable</td><td>$70.00</td></tr>');
        }else{
            console.log("add programmable thermostat unchecked");
            totalQuoted -= 70.00;
            $("#prog-tstat").remove();
        }
    });
});

document.addEventListener("DOMContentLoaded", function(event) {
    var _selector = document.querySelector('input[name=two-tstat-add]');
    _selector.addEventListener('change', function(event) {
        if(_selector.checked) {
            console.log("add two stage programmable thermostat checked");
            totalQuoted += 150.00;
            $('#myTable tbody').append('<tr id="two-stage"><td>1</td><td>Upgrade Two Stage Thermostat to Programmable</td><td>$150.00</td></tr>');
        }else{
            console.log("add two stage programmable thermostat unchecked");
            totalQuoted -= 150.00;
            $("#two-stage").remove('tr');
        }
    });
});

document.addEventListener("DOMContentLoaded", function(event) {
    var _selector = document.querySelector('input[name=lowboy-boot-add]');
    _selector.addEventListener('change', function(event) {
        if(_selector.checked) {
            console.log("add lowboy boot checked");
            totalQuoted += 75.00;
            $('#myTable tbody').append('<tr id="ret-drop"><td>1</td><td>Custom Return Boot with Filter Slot</td><td>$75.00</td></tr>');
        }else{
            console.log("add lowboy boot unchecked");
            totalQuoted -= 75.00;
            $("#ret-drop").remove('tr');
        }
    });
});

document.addEventListener("DOMContentLoaded", function(event) {
    var _selector = document.querySelector('input[name=crawl-attic-add]');
    _selector.addEventListener('change', function(event) {
        if(_selector.checked) {
            console.log("add crawl or attic checked");
            totalQuoted += 200.00;
            $('#myTable tbody').append('<tr id="crawl"><td>1</td><td>Attic or Crawlspace Installation</td><td>$200.00</td></tr>');
        }else{
            console.log("add crawl or attic unchecked");
            totalQuoted -= 200.00;
            $("#crawl").remove('tr');
        }
    });
});

document.addEventListener("DOMContentLoaded", function(event) {
    var _selector = document.querySelector('input[name=after-hours-add]');
    _selector.addEventListener('change', function(event) {
        if(_selector.checked) {
            console.log("add after hours checked");
            totalQuoted += 150.00;
            $('#myTable tbody').append('<tr id="after"><td>1</td><td>After Hours / Emergency Installation</td><td>$150.00</td></tr>');
        }else{
            console.log("add after hours unchecked");
            totalQuoted -= 150.00;
            $("#after").remove('tr');
        }
    });
});

document.addEventListener("DOMContentLoaded", function(event) {
    var _selector = document.querySelector('input[name=lp-kit-add]');
    _selector.addEventListener('change', function(event) {
        if(_selector.checked) {
            console.log("add lp kit checked");
            totalQuoted += 125.00;
            $('#myTable tbody').append('<tr id="lpkit"><td>1</td><td>Convert The Furnace To Operate On Propane Gas</td><td>$125.00</td></tr>');
        }else{
            console.log("add lp kit unchecked");
            totalQuoted -= 125.00;
            $("#lpkit").remove('tr');
        }
    });
});

document.addEventListener("DOMContentLoaded", function(event) {
    var _selector = document.querySelector('input[name=horz-install-add]');
    _selector.addEventListener('change', function(event) {
        if(_selector.checked) {
            console.log("add horizonal install checked");
            totalQuoted += 100.00;
            $('#myTable tbody').append('<tr id="horz"><td>1</td><td>Horizonal Installation Ductwork and Accessories</td><td>$100.00</td></tr>');
        }else{
            console.log("add horizonal unchecked");
            totalQuoted -= 100.00;
            $("#horz").remove('tr');
        }
    });
});

document.addEventListener("DOMContentLoaded", function(event) {
    var _selector = document.querySelector('input[name=tenyear-warranty-add]');
    _selector.addEventListener('change', function(event) {
        if(_selector.checked) {
            console.log("add 10 year warranty checked");
            totalQuoted += 475.00;
            $('#myTable tbody').append('<tr id="warranty"><td>1</td><td>Upgrade Payne Labor Warranty to 10 Years</td><td>$475.00</td></tr>');
        }else{
            console.log("add 10 year warranty unchecked");
            totalQuoted -= 475.00;
            $("#warranty").remove('tr');
        }
    });
});

document.addEventListener("DOMContentLoaded", function(event) {
    var _selector = document.querySelector('input[name=one-piece-permit]');
    _selector.addEventListener('change', function(event) {
        if(_selector.checked) {
            console.log("add one piece permit checked");
            totalQuoted += 200.00;
            $('#myTable tbody').append('<tr id="onepiece"><td>1</td><td>One piece permit</td><td>$200.00</td></tr>');
        }else{
            console.log("add one piece permit unchecked");
            totalQuoted -= 200.00;
            $("#onepiece").remove('tr');
        }
    });
});

document.addEventListener("DOMContentLoaded", function(event) {
    var _selector = document.querySelector('input[name=two-piece-permit]');
    _selector.addEventListener('change', function(event) {
        if(_selector.checked) {
            console.log("add two piece permit checked");
            totalQuoted += 250.00;
            $('#myTable tbody').append('<tr id="twopiece"><td>1</td><td>Two piece permit</td><td>$250.00</td></tr>');
        }else{
            console.log("add two piece permit unchecked");
            totalQuoted -= 250.00;
            $("#twopiece").remove('tr');
        }
    });
});

document.addEventListener("DOMContentLoaded", function(event) {
    var _selector = document.querySelector('input[name=sbpHumidifier]');
    _selector.addEventListener('change', function(event) {
        if(_selector.checked) {
            console.log("add small bypass humidifier checked");
            totalQuoted += 350.00;
            $('#myTable tbody').append('<tr id="sbphum"><td>1</td><td>Install a Small Bypass Humidifier</td><td>$350.00</td></tr>');
        }else{
            console.log("add small bypass humidifier unchecked");
            totalQuoted -= 350.00;
            $("#sbphum").remove('tr');
        }
    });
});

document.addEventListener("DOMContentLoaded", function(event) {
    var _selector = document.querySelector('input[name=lbpHumidifier]');
    _selector.addEventListener('change', function(event) {
        if(_selector.checked) {
            console.log("add large bypass humidifier checked");
            totalQuoted += 380.00;
            $('#myTable tbody').append('<tr id="lbphum"><td>1</td><td>Install a Large Bypass Humidifier</td><td>$380.00</td></tr>');
        }else{
            console.log("add large bypass humidifier unchecked");
            totalQuoted -= 380.00;
            $("#lbphum").remove('tr');
        }
    });
});

// Section D
// put money in here = totalQuoted 
// the place to display the mone is here = totalPriceDisplay
$("#totalButton").click(function() {
    $(this).css('background','green');
    var equipItem = +$("#selectedUnitPrice").text();
    console.log(" equipItem = " + equipItem);
    if(equipItem == isNaN()) {
        alert("stop skipping my hard work... ");
    }
    console.log(" totalQuoted = " + totalQuoted);
    totalQuoted += equipItem;
    $("#totalPriceDisplay").text(" $" + totalQuoted + ".00");
});
