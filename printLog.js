var fs = require('fs');
var actionCountObject = {};
var s = fs.createReadStream('development.log',{encoding:'utf8'})

s.on('data',function(chunk){
   var lines =  chunk.split("\n")
   lines.forEach(function(element) {
        var words = element.split(' ');
        if(words[0] == "Processing" && words[2].indexOf('SprintsController')>-1){
          let  word = words[2]
          if(actionCountObject[word]){
              actionCountObject[word]++
          }
          else{
              actionCountObject[word] = 1
          }
        }
    }, this);
})

s.on('end',function(){
    Object.keys(actionCountObject).map(function(key){
    	console.log('SprintsController=> '+key.slice(key.indexOf('#'))+'ran '+actionCountObject[key]+' times')
    	})
})