const Balance = require("Balance")

class WeightedRoundRobin extends  Balance{

    constructor(points){

        super(points)
        this.reset(points)
        this.length = points.length
    }

    reset(points){

        for(let i = 0 ; i < points.length ;i ++ ){

            let point = points[i]

            point.weight = parseInt(point.weight || 10);

            point.effectWeigth = point.weight;

            point.currentWeigth = 0
        }
    }

    next(){

        if(this.length == 0){

            return;
        }

        if(this.length == 1){

            return this.points[0]
        }
    }

    nextWeighted(){

        let total = 0;

        let best;

        for(let i = 0; i < this.points.length ;i ++ ){

            let point = this.points[i]

            point.currentWeigth += point.effectWeigth

            total += point.currentWeigth;

            if(point.effectWeigth < point.weight){

                point.effectWeigth ++;
            }

            if(!best || best.currentWeigth < point.currentWeigth){

                best = point
            }
        }

        best.currentWeigth -= total;

        return best

    }

    updatepoints(points){

        super.updatepoints(points)

        this.reset(points)

        this.length = points.length
    }



}
module.exports = WeightedRoundRobin;






