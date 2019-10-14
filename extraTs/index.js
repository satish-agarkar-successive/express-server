// var email=require("./emailValidaiton/indix");
// email.email_V();

const permission = require('./emailValidaiton/index').permission;
const validation = require('./emailValidaiton/index').validation;
const diamond_print=require("./patterns/indix").diamond_print;
// const Euilateral_Pattern=require("./patterns/indix").Euilateral_Pattern;

validation();
permission();
diamond_print();
// Euilateral_Pattern();

