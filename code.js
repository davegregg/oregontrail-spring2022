import { Traveler } from "./Traveler.js"
import { Wagon } from "./Wagon.js"
import { Doctor } from "./Doctor.js"
import { Hunter } from "./Hunter.js"

// Now that the classes are built and tested, this is where we would begin using
// our new classes and actually build a game!
const janel = new Doctor("Janel")
const chi = new Hunter("Chi")
console.log("Before:", chi)
chi.hunt()
console.log("After:", chi)

export { Doctor, Hunter, Traveler, Wagon };