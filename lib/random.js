const Balance = require("lib/balance")


class  Random extends  Balance{

    constructor(points){

        super(points)

        this.length = points.length;

    }

    next(){

        return this.points[Math.floor(Math.random() * this.length)]

    }

    updatepoints(points){

        super.updatepoints(points)

    }

}
module.exports = Random;


