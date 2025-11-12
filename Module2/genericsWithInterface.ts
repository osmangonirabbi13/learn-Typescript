interface Developer <T> {
    name : string,
    salary : number,
    device : {
        brand : string,
        model : string,
        releasedYear : string
    }
    smartWatch : T
}

interface brandCharaWatch  {
    heartRate : string,
    stopwatch : boolean
}

interface AppleWatch {
    heartRate : string,
    stopwatch : boolean
    callSupport : boolean 
    calculator : boolean
}

const poorDeveloper : Developer <brandCharaWatch> = {
    name : "osman goni",
    salary : 2000000,
    device :{
        brand : "Apple",
        model : "Iphone 17",
        releasedYear : "2025"
    },
    smartWatch :{
        heartRate : "200",
        stopwatch: true
    }
 }
const richDeveloper : Developer <AppleWatch> = {
    name : "osman goni",
    salary : 2000000,
    device :{
        brand : "Apple",
        model : "Iphone 17",
        releasedYear : "2025"
    },
    smartWatch :{
        heartRate : "200",
        stopwatch: true,
        callSupport : true,
        calculator :true,
    }
 }

 console.log(poorDeveloper)
 console.log(richDeveloper)