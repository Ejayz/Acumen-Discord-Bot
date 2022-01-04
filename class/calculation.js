async function requiredExpCalculation(lvl) {
    let lvlExpRequirement = 400;
    const lvlExpPercentage = .30;
    for (let i = 1; i <= parseInt(lvl); i++) {
        lvlExpRequirement = lvlExpRequirement + (lvlExpPercentage * lvlExpRequirement);
    }
    return parseInt(lvlExpRequirement);
}

module.exports = {
    requiredExpCalculation
}