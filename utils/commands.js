const lc = require('./lc.json');
const len = Object.keys(lc).length/2;


exports.generateRandom = function generateRandom(args){
    if (args.length>1){
        console.log(args[1]);
        if (args[1].toLowerCase() =="easy"){
            console.log("in easy")
            var easy = false;
            var paid = true;
            while(easy!='Easy'||paid){
                console.log('looping easy');
                var ind=0;
                while(!ind){
                    ind = Math.floor(Math.random() * Math.floor(len));
                }
                easy = lc[ind].difficulty;
                paid = lc[ind].paid_only;
            }
            return ind
        }
        if (args[1].toLowerCase() =="medium" || args[1].toLowerCase() =="med"){
            console.log("in med");
            var med = false;
            var paid = true;
            while(med!='Medium'||paid){
                console.log('looping medium');
                var ind=0;
                while(!ind){
                    ind = Math.floor(Math.random() * Math.floor(len));
                }
                med = lc[ind].difficulty;
                paid = lc[ind].paid_only;
            }
            return ind;
        }
        if (args[1].toLowerCase() =="hard"){
            console.log("in hard")
            var hard = false;
            var paid = true;
            while(hard!='Hard'||paid){
                console.log('looping hard');
                var ind=0;
                while(!ind){
                    ind = Math.floor(Math.random() * Math.floor(len));
                }
                console.log(ind);
                hard = lc[ind].difficulty;
                paid = lc[ind].paid_only;
            }
            return ind;
        }
    }
    else{
        var paid = true;
        while(paid){
            console.log('looping paid');
            var ind=0;
            while(!ind){
                ind = Math.floor(Math.random() * Math.floor(len));
            }
            paid = lc[ind].paid_only;
        }
        return ind;
    }
}