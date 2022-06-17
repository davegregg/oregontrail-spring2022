import { Traveler } from "./Traveler.js"

class Hunter extends Traveler {

    constructor (name) {
        // this = {}
        super(name) // But with its "this" as our "this"
        this.food = 2
        // return this
    }

    eat () {
        super.eat()
        super.eat()

        return this.food
    }

    hunt () {
        this.food += 5

        return this.food
    }

    giveFood (traveler, numOfFoodUnits) {
        if (this.food < numOfFoodUnits) {
            return false
        }

        this.food -= numOfFoodUnits
        traveler.food += numOfFoodUnits

        return true
    }

}

export { Hunter }