const Balancer = require('./balance');
class RoundRobin extends Balancer {

    constructor(points = []) {
        super(points);
        this.curr = 0;
    }

    next() {
        if (this.curr >= this.points.length)
            this.curr = 0;
        return this.points[this.curr++];
    }

    updatepoints(points) {
        this.curr = 0;
        super.notify(points);
    }

}

module.exports = RoundRobin;