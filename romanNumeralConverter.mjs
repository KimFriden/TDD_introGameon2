function decToRoman(dec) {

    let output = "";
    while (dec > 0) {
        let diff = 0;
        if (dec >= 1000) {
            diff = 1000;
            output += "M";
        }
        else if (dec >= 900) {
            diff = 900;
            output += "CM";
        }
        else if (dec >= 500) {
            diff = 500;
            output += "D";
        }
        else if (dec >= 400) {
            diff = 400;
            output += "CD";
        }
        else if (dec >= 100) {
            diff = 100;
            output += "C";
        }
        else if (dec >= 90) {
            diff = 90;
            output += "XC";
        }
        else if (dec >= 50) {
            diff = 50;
            output += "L";
        }
        else if (dec >= 40) {
            diff = 40;
            output += "XL";
        }
        else if (dec >= 10) {
            diff = 10;
            output += "X";
        }
        else if (dec >= 9) {
            diff = 9;
            output += "IX";
        }
        else if (dec >= 5) {
            diff = 5;
            output += "V";
        }
        else if (dec >= 4) {
            diff = 4;
            output += "IV";
        }
        else {
            diff = 1;
            output += "I";
        }
        dec -= diff;
    }
    return output;
}

export default decToRoman;