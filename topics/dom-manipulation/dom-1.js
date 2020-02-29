/* eslint-disable */
// Examining the document object
let val;

   val = document;
   val = document.all; // returns HTML collection
   val = document.all[0]; // returns html tag
   val = document.all.length; // returns the length 
   val = document.body;
   val = document.doctype;
   val = document.domain; // 127.0.0.1
   val = document.characterSet; // UTF-8
   val = document.contentType;

   // forms
   val = document.forms; // returns form collection
   val = document.forms[0];
   val = document.forms[0].className;
   val = document.forms[0].method;
   val = document.forms[0].action;

   // links
   val = document.links;
   val = document.links[0];
   val = document.links[0].href;
   val = document.links[0].className;
   val = document.links[0].classList; // returns DOMToken List

   // images
   val = document.images;   
   val = document.images[0];  
   val = document.images[0].src;  
   val = document.images[0].className;
   val = document.images[0].classList;

   // scripts
   val = document.scripts;
   val = document.scripts[0];
   val = document.scripts[0].getAttribute('src');
   
  let scripts = document.scripts,
      // convert HTML collection to iterable (array)
      scriptsArray = Array.from(scripts);

  scriptsArray.forEach(function(script){
     console.log(script.getAttribute('src'));
  });
   
   
  console.log(val);