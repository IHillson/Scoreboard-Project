let degreeC = 10

export function getTemp(min = -30, max = 50) {
    const change = Math.random() < 0.5 ? -1 : 1
    degreeC += change

    //Clamp the value within min and max
    degreeC = Math.max(min, Math.min(max, degreeC))
    return degreeC
}