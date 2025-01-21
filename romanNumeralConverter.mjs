function decToRoman(dec) {

    let output = "";
    while (dec > 0) {
        let diff = 0;
        if (dec >= 10) {
            diff = 10;
            output += "X";
        }
        else if (dec >= 9) {
            diff = 9;
            output += "IX";
        }
        else if (dec >= 5) {
            output += "V";
            diff = 5;
        }
        else if (dec >= 4) {
            output += "IV";
            diff = 4
        }
        else {
            output += "I";
            diff = 1;
        }

        dec -= diff
    }
    return output;
}



export default decToRoman;