// customer info
var customerName        = document.querySelector("#customerName"),
    customerAddress     = document.querySelector("#customerAddress"),
    customerCity        = document.querySelector("#customerCity"),
    customerMobile      = document.querySelector("#customerMobile"),
    customerHome        = document.querySelector("#customerHome"),
    customerJobNumber   = document.querySelector("#customerJobNumber");
    
// equipment info
var quotedFurnace           = document.querySelector("#quotedFurnace"),
    quotedFurnaceModel      = document.querySelector("#quotedFurnaceModel"),
    quotedFurnaceBtus       = document.querySelector("#quotedFurnaceBtus"),
    quotedFurnaceEfficiency = document.querySelector("#quotedFurnaceEfficiency");
    
var quotedAirconditioner            = document.querySelector("#quotedAirconditioner"),
    quotedAirconditionerModel       = document.querySelector("#quotedAirconditionerModel"),
    quotedAirconditionerBtus        = document.querySelector("#quotedAirconditionerBtus"),
    quotedAirconditionerEfficiency  = document.querySelector("#quotedAirconditionerEfficiency");
    
var warrantyInformation     = document.querySelector("#warrantyInformation");

// indoor air quality options
var airPurifier                 = document.querySelector("#airPurifier"),
    airPurifierPrice            = document.querySelector("#airPurifierPrice"),
    electronicAircleaner        = document.querySelector("#electronicAircleaner"),
    electronicAircleanerPrice   = document.querySelector("#electronicAircleanerPrice");
    
var mediaFilter                 = document.querySelector("#mediaFilter"),
    mediaFilterPrice            = document.querySelector("#mediaFilterPrice"),
    humidifier                  = document.querySelector("#humidifier"),
    humidifierPrice             = document.querySelector("#humidifierPrice");
    
var extendedWarranty            = document.querySelector("#extendedWarranty"),
    extendedWarrantyPrice       = document.querySelector("#extendedWarrantyPrice"),
    ductwork                    = document.querySelector("#ductwork"),
    ductworkPrice               = document.querySelector("#ductworkPrice");
    
// pricing
var permitFee                   = document.querySelector("#permitFee"),
    proposalWordedPrice         = document.querySelector("#proposalWordedPrice"),
    proposalPrice               = document.querySelector("#proposalPrice");


    
function warrantySelector(quotedFurnace){
    if(quotedFurnace == "Payne"){
        "10 Years All Parts, and 1 Year Labor with online registration";
    }else{
        "10 Years All Parts, and 10 Years Labor with online registration. Includes one Infinity Control Replacement.";
    }
}


