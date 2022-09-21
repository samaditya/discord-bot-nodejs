const fetch = require('node-fetch');
const gif = require('./commands/gif');
const cc = require('./commands/cc');

const replies = ['Howdy!' , 'wassup?' , 'choochoo' , 'welcome buddy' , 'hey bro!'];

const commands = {
    cmd : function(args) {},
    gif : function(args){},
};

module.exports = async function (msg) {
    if(msg.channel.id == "783947636339769354"){

        let tokens = msg.content.split(" "); 
        let cc= tokens.shift(); 
        
        if(cc.charAt(0) === "!"){
            cc = cc.substring(1);
            commands[cc]{tokens};
        }

        if(tokens[0] === "!cc"){
            const r = Math.floor(Math.random()*replies.length);
            msg.channel.send(replies[r]);
        }
        else if(tokens[0] === "!gif"){
            let keywords = "dragonballzsupersaiyan"

                if(tokens.length>1){
                    keywords = tokens.slice(1,tokens.length).join(" ");
                }

            let url = `https://api.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}`
            let response = await fetch(url);
            let json = await response.json();
            
            console.log(json);
            const index = Math.floor(Math.random()*json.results.length);
            msg.channel.send(json.results[index].url);
            }    
        }
}