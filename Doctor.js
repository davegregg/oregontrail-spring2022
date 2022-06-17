import { Traveler } from "./Traveler.js"

class Doctor extends Traveler {

    heal (traveler) {
        traveler.isHealthy = true
    }

}

export { Doctor }