
// Inputs
var CardHolderName = document.querySelector("#input-carholder-name");
var CardNumber = document.querySelector("#input-card-number");
var Month = document.querySelector("#input-month");
var Year = document.querySelector("#input-year");
var CVC = document.querySelector("#input-cvc");

// Preview
var PreviewCardholderName = document.querySelector(".preview-carholder-name");
var PreviewCardNumber = document.querySelector(".preview-card-number");
var PreviewMonth = document.querySelector(".preview-month");
var PreviewYear = document.querySelector(".preview-year");
var PreviewCVC = document.querySelector(".preview-cvc");

function isValid () {
    var Error = 0;
    
    // Test
    // console.log(CardNumber.value);
    // console.log(/\d/.test(CardHolderName.value));
    
    // Cardholder
    if (!CardHolderName.value)
    {
        document.querySelector("#one").innerHTML = "Enter a proper name"; Error = 1;
    }
    else if (/\d/.test(CardHolderName.value)) {
        document.querySelector("#one").innerHTML = "Can't contain numbers"; Error = 1
    }
    else
        document.querySelector("#one").innerHTML = "";
    
    // Cardnumber
    if (!CardNumber.value || CardNumber.value.length != 16)
    {
        document.querySelector("#two").innerHTML = "Enter a proper number"; Error = 1
    }
    else if (!Number.isInteger(Number.parseInt(CardNumber.value)))
    {
        document.querySelector("#two").innerHTML = "Can't contain letters"; Error = 1
    }
    else
        document.querySelector("#two").innerHTML = "";
    
    // Month
    if (!Month.value)
    {
        document.querySelector("#three").innerHTML = "Can't be blank"; Error = 1
    }
    else if (!Number.isInteger(Number.parseInt(Month.value)))
    {
        document.querySelector("#three").innerHTML = "Can't contain letters"; Error = 1
    }
    else if (Month.value < 1 || Month.value > 12)
    {
        document.querySelector("#three").innerHTML = "Invalid month"; Error = 1
    }
    else 
        document.querySelector("#three").innerHTML = "";
    
    // Year
    if (!Year.value)
    {
        document.querySelector("#four").innerHTML = "Can't be blank"; Error = 1
    }
    else if (!Number.isInteger(Number.parseInt(Year.value)))
    {
        document.querySelector("#four").innerHTML = "Can't contain letters"; Error = 1
    }
    else if (Year.value < 0 || Year.value > 99)
    {
        document.querySelector("#four").innerHTML = "Invalid year"; Error = 1
    }
    else 
        document.querySelector("#four").innerHTML = "";

    // CVC
    if (!CVC.value)
    {
        document.querySelector("#five").innerHTML = "Can't be blank"; Error = 1
    }
    else if (!Number.isInteger(Number.parseInt(CVC.value)))
    {
        document.querySelector("#five").innerHTML = "Can't contain letters"; Error = 1
    }
    else if (CVC.value.length != 3)
    {
        document.querySelector("#five").innerHTML = "Invalid CVC"; Error = 1
    }
    else
        document.querySelector("#five").innerHTML = "";

    // Confirm
    if (Error == 0)
    {
        document.querySelector("form").style.display="none";
        document.querySelector(".show").style.display="block";
    }
}

//------ Real-time change

CardHolderName.addEventListener('input', function() {
PreviewCardholderName.textContent = CardHolderName.value;
});

CardNumber.addEventListener('input', function() {

    let result ='';
    for (let i = 0; i <CardNumber.value.length ; i++)
    {
        if (i > 0 && i % 4 === 0)
            result += ' ';
        else if (CardNumber.value.length > 16)
            document.querySelector("#two").innerHTML = "Can't be longer than 16 characters";
        else
            document.querySelector("#two").innerHTML = '';

        result += CardNumber.value[i];
        PreviewCardNumber.textContent = result;
    }
});

Month.addEventListener('input', function() {
    PreviewMonth.textContent = Month.value;
});

Year.addEventListener('input', function() {
    PreviewYear.textContent = Year.value;
});

CVC.addEventListener('input', function() {
    PreviewCVC.textContent = CVC.value;
});

function goBack() {
    document.querySelector(".show").style.display="none";
    document.querySelector("form").reset();

    document.querySelector(".preview-carholder-name").textContent = "Jane Appleseed";
    document.querySelector(".preview-card-number").textContent = "0000 0000 0000 0000";
    document.querySelector(".preview-month").textContent = "00";
    document.querySelector(".preview-year").textContent = "00";
    document.querySelector(".preview-cvc").textContent = "000";

    document.querySelector("form").style.display="block";
}