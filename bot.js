require("dotenv").config();


console.log("beep beep!🐱‍🏍");


const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.BOTTOKEN);

client.on('ready' , () =>{
    console.log(":D")
})

const commandHandler = require('./cmd');
client.on("message" , commandHandler);