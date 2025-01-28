let padding = 0;
let totaltTime = 0;


function Test(description) {

    console.log(description)

    return {
        isEqual,
        padd: (n = 1) => { padding += n; },
        removePadd: () => {
            padding--;
            if (padding < 0) {
                padding = 0;
            }
        },
        end: () => {
            console.timeEnd("Test");
        }

    }
}

function isEqual(recived, expected, description) {
    if (recived === expected) {
        console.log(`${addPadd(padding)}🟢 ${description}`);
    } else {
        console.log(`${addPadd(padding)}🔴 ${description}, forventett ${expected}, fikk ${recived}`);
    }
}

function addPadd(padding) {
    return "".padStart(padding, " ");
}

export default Test