/**
 * TESTS -----------------------------------------------------------
 * Do not modify these, but use them to verify that your code works.
 */

import { Doctor, Hunter, Traveler, Wagon } from "./code.js";

function kenzieAssert(paramObject) {
	let actual = paramObject.actual;
	let expected = paramObject.expected;
	if (actual === expected) {
		console.log(`PASS Test #${paramObject.testNumber} ${paramObject.testFunction}`);
	} else {
		console.error(`FAIL Test #${paramObject.testNumber} ${paramObject.testFunction}`, {
			test: paramObject.failureMessage,
			expected: expected,
			actual: actual,
		});
	}
}

// Create a wagon that can hold 4 people
let wagon = new Wagon(4);
// Create five travelers
let henrietta = new Traveler("Henrietta");
let juan = new Traveler("Juan");
let drsmith = new Doctor("Dr. Smith");
let sarahunter = new Hunter("Sara");
let maude = new Traveler("Maude");

let actual = wagon.getAvailableSeatCount();
kenzieAssert({
	actual: actual,
	expected: 4,
	testNumber: 1,
	testFunction: "getAvailableSeatCount",
	failureMessage:
		"There should be four available seats left in the empty wagon",
});

wagon.join(henrietta);
actual = wagon.getAvailableSeatCount();
kenzieAssert({
	actual: actual,
	expected: 3,
	testNumber: 2,
	testFunction: "getAvailableSeatCount",
	failureMessage:
		"There should be three available seats left after henrietta joins",
});

wagon.join(juan);
wagon.join(drsmith);
wagon.join(sarahunter);
wagon.join(maude); // There isn't room for her!

actual = wagon.getAvailableSeatCount();
kenzieAssert({
	actual: actual,
	expected: 0,
	testNumber: 3,
	testFunction: "getAvailableSeatCount",
	failureMessage: "There should be no available seats left",
});

sarahunter.hunt(); // Gets 5 more food
drsmith.hunt();

actual = wagon.totalFood();
kenzieAssert({
	actual: actual,
	expected: 12,
	testNumber: 1,
	testFunction: "totalFood",
	failureMessage: "There should be 12 total food",
});

henrietta.eat();
sarahunter.eat();
drsmith.eat();
juan.eat(); // After eating, Juan now has 0 food BUT is healthy
actual = wagon.shouldQuarantine();
kenzieAssert({
	actual: actual,
	expected: false,
	testNumber: 1,
	testFunction: "shouldQuarantine",
	failureMessage: "The wagon should NOT quarantine because no one is sick",
});

juan.eat(); // Juan tries to eat but has 0 food, so he's now hungry (sick)
actual = wagon.shouldQuarantine();
kenzieAssert({
	actual: actual,
	expected: true,
	testNumber: 2,
	testFunction: "shouldQuarantine",
	failureMessage: "The wagon should quarantine because juan is sick",
});

actual = wagon.totalFood();
kenzieAssert({
	actual: actual,
	expected: 7,
	testNumber: 2,
	testFunction: "totalFood",
	failureMessage: "The wagon should have 7 food",
});

drsmith.heal(juan);

actual = wagon.shouldQuarantine();
kenzieAssert({
	actual: actual,
	expected: false,
	testNumber: 3,
	testFunction: "shouldQuarantine",
	failureMessage: "The wagon should not quarantine because juan was healed",
});

sarahunter.giveFood(juan, 4);
sarahunter.eat(); // She only has 1, so she eats it and is now sick

actual = wagon.shouldQuarantine();
kenzieAssert({
	actual: actual,
	expected: true,
	testNumber: 4,
	testFunction: "shouldQuarantine",
	failureMessage: "The wagon should quarantine because sarah is now sick",
});

actual = wagon.totalFood();
kenzieAssert({
	actual: actual,
	expected: 6,
	testNumber: 3,
	testFunction: "totalFood",
	failureMessage: "The wagon should have 6 food",
});
