export const monateryDisplay = (val: number | string) => `${val} .-`
export const NUMBER_STEPS = 10
export const generateRange = (min: number, max: number, nSteps: number) => {
    const diff = (max - min) / nSteps
    const container = new Array(nSteps)
    container[0] = min
    container[nSteps - 1] = max

    for (let i = 1; i < (nSteps - 1); i++) {
        container[i] = min + i * diff
    }
    return container
}