hexamap = {
    "0": "0", "1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9",
    "10": "A", "11": "B", "12": "C", "13": "D", "14": "E", "15": "F",
    "A": "10",
    "B": "11",
    "C": "12",
    "D": "13",
    "E": "14",
    "F": "15"
};

function deci() {
    x = document.getElementsByClassName("deci")[0].value.toUpperCase();
    x = parseFloat(x);
    octal = x.toString(8);
    binary = x.toString(2);
    hexa = x.toString(16).toUpperCase();
    output = "<div class = 'answer'>Decimal : " + x + "<br>Octal : " + octal + "<br>Binary : " + binary + "<br>HexaDecimal : " + hexa + "</div>";
    document.getElementsByClassName("output")[0].innerHTML = output;
}

function todeci(x, base) {
    x = parseFloat(x);
    octal = x.toString(8);
    binary = x.toString(2);
    hexa = x.toString(16).toUpperCase();
    switch (base) {
        case 2: output = "<div class = 'answer'>Decimal : " + x + "<br>Octal : " + octal + "<br>Binary : " + binary + "<br>HexaDecimal : " + hexa + "</div>"; break;
        case 8: output = "<div class = 'answer'>Decimal : " + x + "<br>Octal : " + octal + "<br>Binary : " + binary + "<br>HexaDecimal : " + hexa + "</div>"; break;
        case 16: output = "<div class = 'answer'>Decimal : " + x + "<br>Octal : " + octal + "<br>Binary : " + binary + "<br>HexaDecimal : " + hexa + "</div>"; break;


    }
    document.getElementsByClassName("output")[0].innerHTML = output;


}

function callfunc(base) {
    x = document.getElementsByClassName("base" + base)[0].value.toUpperCase();


    b = x.split(".");

    intans = 0
    floatans = 0
    for (i = 0; i < b[0].length; i++) {
        intans = parseFloat(intans) + parseFloat(hexamap[b[0][i].toString()]) * Math.pow(base, b[0].length - i - 1);
    }

    if (b.length == 2) {
        for (i = 0; i < b[1].length; i++) {
            floatans = parseFloat(floatans) + parseFloat(hexamap[b[1][i].toString()]) * Math.pow(base, -1 * (i + 1));
        }
    }

    finalanswer = intans + floatans
    todeci(finalanswer, base);

}


