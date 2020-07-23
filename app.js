var pronoun = ["the", "our"];
var adj = ["powerful","great","strong","independent", "solitary"];
var noun = ["women", "dog", "athlete", "gamer"];
var dom = [".com",".gob",".org",".de",".ve",".xyz",".es",".fr"];
for (var i=0; i < pronoun.length; i++) {
    for (var k=0; k < adj.length; k++){
        for (var p=0; p < noun.length; p++) {
            for (var z=0; z < dom.length; z++) {
                console.log(pronoun[i].concat(adj[k], noun[p], dom[z]));
            }
        }
    }
};

//$ node app.js para correr :P