

const getDistance=(arr)=>{

    var alreadyVisited=[]
    var min = -1

    arr.map(a=>{
        if(!alreadyVisited.includes(a)){
            alreadyVisited.push(a)

            //1 - find "m" the min distance between all the occurences of a
            var m = null
            var i = arr.indexOf(a)
            while(i!=-1){
                var i2 = arr.indexOf(a, i+1)
                if(i2!=-1){
                    var d = Math.abs(i - i2)
                    if(m==null||d<m){
                        m = d
                    }
                }
                i=i2
            }

            //2- compare "m" with the min distance of other numbers
            if(m!=null &&(min==-1||m<min)){
                min = m
            }
        }
    })

    console.log( min)
}

//read the file
const fs = require('fs')
    
fs.readFile('assignment02-1.txt', (err, data) => {
    if (err) throw err;
    var result = data.toString().split("\n")[1].split(" ")
    getDistance( result)
})

