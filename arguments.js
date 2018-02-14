
/**
 * Filename: c:\Users\HP\Desktop\Javascript\arguments.js
 * Path: c:\Users\HP\Desktop\Javascript
 * Created Date: Wednesday, February 14th 2018, 11:44:10 am
 * Author: HP Asiya
 * 
 * Copyright (c) 2018 VLIT
 */

function neverending()
{
   for (var i = 0; i < arguments.length; i++) {
       console.log(arguments[i]);
       console.log(arguments[i].id + arguments[i].name );
      // console.log(arguments[i].name);
  
    }
}

neverending(3,4,5,7);
console.log("--------------------------------------");

neverending("Asiya","Tooba","Affan","Abu");
console.log("--------------------------------------");
neverending("Asiya",20,"Tooba",25);

neverending({id:1, name: "asiya"}, {id: 1, name: "asiya"});