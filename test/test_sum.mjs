import Test from "./test.mjs";
import sum from "../sum.mjs";

const test = Test("Sum tester");
test.padd(2);
/*
try {
    sum(2, 2);
    console.log("🟢 Sum funksjon eksisterer");
} catch (e) {
    console.log("🔴 Sum funksjon mangler");
}*/

test.isEqual(sum(2, 2), 4, "Enkel summering av posetive tall");
test.isEqual(sum(0, 0), 0, "Summering av 0");
test.isEqual(sum(-1, -1), -2, "Enkel summering av negative tall");
test.isEqual(isNaN(sum("@", "B")), true, "Ikke gyldig input");
test.isEqual(isNaN(sum("@", 1)), true, "Ikke Gyldig Input");
test.isEqual(sum(3, 2, 1), 6, "Tre eller fære inputs");


test.removePadd();
test.end();

