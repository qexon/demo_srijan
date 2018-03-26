
//Program to execute controller's actions run

var fs = require('fs');
var s = fs.createReadStream('unsortedFile.txt',{encoding:'utf8'})

var sortedArrIndex = new Array(100)
for(i=0;i<sortedArrIndex.length;i++){
    sortedArrIndex[i] = 0
}

s.on('data',function(chunk){
   var line =  chunk.split("\n")
   line.forEach(function(element) {
        elementArr = element.split(' ');
        elementArr.forEach(function(data){
            sortedArrIndex[data] = sortedArrIndex[data]+1
        })
    
    }, this);
})
s.on('end',function(chunk){
   for(i=0;i<sortedArrIndex.length;i++){
       for(j=0;j<sortedArrIndex[i];j++){
           console.log(i);
           fs.appendFileSync('srtedFile.txt',i);
       }
   }
})

