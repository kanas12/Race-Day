let raceNumber = Math.floor(Math.random() * 1000);
let early = true;
let age = 18;

if (early && age > 18) {
    raceNumber += 1000;
}

if (early && age > 18) {
    console.log(`Race will begain at 9:30, year race number is: ${raceNumber}.`);
}
if (!early && age > 18) {
    console.log(`Race will begain at 11:00, year race number is: ${raceNumber}.`);
} else if (age > 18) {
    console.log(`Race will begain at 12:30, year race number is: ${raceNumber}.`);
} else {
    console.log('Please approach the registration desk, thanks');
}