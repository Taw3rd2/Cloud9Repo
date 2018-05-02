var radio28 = document.querySelector("#one_story"),
    radio35 = document.querySelector("#two_story"),
    afue    = document.querySelector("#afue"),
    sizeMultiplier = 18,
    squareFootEntered,
    btusRequired,
    furnaceSizesArray = ["18000","24000","30000","36000","42000","48000","60000"],
    furnaceSizeArrayElement = 0,
    totalQuoted = 0;

// Section A

// Radio buttons
radio28.addEventListener("click", function() {
   sizeMultiplier = 18;
   console.log ("sizeMultiplier: " + sizeMultiplier);
});

radio35.addEventListener("click", function() {
   sizeMultiplier = 23;
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
    if(furnaceSizeArrayElement > 6){
        furnaceSizeArrayElement --;
    }
    console.log("Size: " + furnaceSizesArray[furnaceSizeArrayElement]);
    btu_selector.innerHTML = (furnaceSizesArray[furnaceSizeArrayElement]);
});

// submit sizr for priceing button
$("#section1submit").click(function() {
    if(furnaceSizeArrayElement === 0) { // 18000
        $("#payneSingle80Card").text("2882.00");
        $("#payneSingle95Card").text("3704.00");
        $("#payneTwo95Card").text("4004.00");
    }else if(furnaceSizeArrayElement === 1) { // 24000
        $("#payneSingle80Card").text("3063.00");
        $("#payneSingle95Card").text("3843.00");
        $("#payneTwo95Card").text("4143.00");
    }else if(furnaceSizeArrayElement === 2) { // 30000
        $("#payneSingle80Card").text("3203.00");
        $("#payneSingle95Card").text("3990.00");
        $("#payneTwo95Card").text("4290.00");
    }else if(furnaceSizeArrayElement === 3) { // 36000
        $("#payneSingle80Card").text("3359.00");
        $("#payneSingle95Card").text("4131.00");
        $("#payneTwo95Card").text("4431.00");
    }else if(furnaceSizeArrayElement === 4){ // 42000
        $("#payneSingle80Card").text("3633.00");
        $("#payneSingle95Card").text("4425.00");
        $("#payneTwo95Card").text("4725.00");
    }else if(furnaceSizeArrayElement === 5){ // 48000
        $("#payneSingle80Card").text("3854.00");
        $("#payneSingle95Card").text("4660.00");
        $("#payneTwo95Card").text("4960.00");
    }else{                                      // 60000
        $("#payneSingle80Card").text("4269.00");
        $("#payneSingle95Card").text("5100.00");
        $("#payneTwo95Card").text("5400.00");
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
    console.log("13 Seer Payne PA13NA Air Conditioner Selected");
    $("#selectedEquipment").text(furnaceSizesArray[furnaceSizeArrayElement] + " BTU Payne Air Conditioner Model: PA13NA");
    var fPrice = $("#payneSingle80Card").text();
    $("#selectedUnitPrice").text(fPrice);
});

$("#f2btn").click(function() {
    $(this).css('background','green');
    console.log("13 Seer Carrier 24ABB Air Conditioner Selected");
    $("#selectedEquipment").text(furnaceSizesArray[furnaceSizeArrayElement] + " BTU Carrier Air Conditioner Model: 24ABB");
    var fPrice = $("#payneSingle95Card").text();
    $("#selectedUnitPrice").text(fPrice);
});

$("#f3btn").click(function() {
    $(this).css('background','green');
    console.log("16 Seer Carrier 24ABC Air Conditioner Selected");
    $("#selectedEquipment").text(furnaceSizesArray[furnaceSizeArrayElement] + " BTU Carrier Air Conditioner Model: 24ABC");
    var fPrice = $("#payneTwo95Card").text();
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
            totalQuoted -= 160.00;
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
            totalQuoted -= 210.00;
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
