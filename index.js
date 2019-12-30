// Your code here 
class Polygon {
    constructor(sideArray){
        this.sideArray = sideArray
    }

    get countSides(){
        // console.log(this.sideArray)
        return this.sideArray.length
    }

    get perimeter(){
        let result = this.sideArray.reduce(function(total, sum){
            return sum + total
        })
        return result
    }
}

class Triangle extends Polygon {

    get isValid(){
        if (this.sideArray.length !== 3){return}
        console.log(this.sideArray)
        let side1 = this.sideArray[0]
        let side2 = this.sideArray[1]
        let side3 = this.sideArray[2]
        return ((side1 + side2 > side3) && (side2 + side3 > side1) && (side3 + side1 > side2))
        
    return true
    }
}

class Square extends Polygon{
    get isValid(){
        if (this.sideArray.length !== 4){return}
            let side1 = this.sideArray[0]
            let side2 = this.sideArray[1]
            let side3 = this.sideArray[2]
            let side4 = this.sideArray[3]
        return ((side1 == side2) && (side1 == side3) && (side1 == side4))
    }
    get area(){
        if (this.sideArray.length !== 4){return}
        return this.sideArray[0] ** 2;        
    }
}
