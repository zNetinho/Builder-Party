const CheckPartyBudget = (budget, services) => {
    const priceTotal = services.reduce((sum, serviceOne) => sum + serviceOne.precoServico, 0)
    parseInt(priceTotal)
    console.log(priceTotal, budget)
    if ( priceTotal > budget ) {
        return false
    }
    return true
}
module.exports = {
    CheckPartyBudget
};