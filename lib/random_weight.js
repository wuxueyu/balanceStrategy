const Random = require('./random');
const spreadWeight = require('./spread_weight');

class RandomWeight extends Random {
    constructor(points = []) {
        super(spreadWeight(points));
    }

    next() {
        return super.next();
    }

    updatepoints(points) {
        super.updatepoints(spreadWeight(points));
    }
}
module.exports = RandomWeight;