class Wagon {
    constructor(capacity) {
        this.capacity = capacity
        this.passengers = []
    }

    getAvailableSeatCount() {
        return this.capacity - this.passengers.length
    }

    join(traveler) {
        if (this.passengers.length >= this.capacity)
            return false

        this.passengers.push(traveler)
        return true
    }

    shouldQuarantine() {
        return this.passengers.some(traveler => traveler.isHealthy === false)
    }

    totalFood() {
        return this
            .passengers
            .reduce((total, currTraveler) => total + currTraveler.food, 0)
    }
}

export { Wagon }