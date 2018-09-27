
const lodash = require("lodash")

class Balance {

    constructor(points,options){

        this.points = this.checkpoints(points)
        this.options = options
    }

    checkpoints(points){

        if(lodash.isString(points)){

            return [points]
        }else {

            return points || []
        }
    }

    updatepoints(points){

        this.points = this.checkpoints(points)
    }

}

module.exports = Balance




