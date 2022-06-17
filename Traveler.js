class Traveler {

    constructor(name) {
        // this = {}
        this.name = name
        this.food = 1
        this.isHealthy = true

        // registerTravelerWithDatabase(this)
        // return this
    }

    speak () {
        console.log("Hey howdy, how you doin'?")
    }

    hunt() {
        this.food += 2
        return this.food
    }

    eat() {
        if (this.food <= 0) {
            this.isHealthy = false
            return false
        }

        this.food -= 1
        return this.food
    }
}

export { Traveler }