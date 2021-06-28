var questions = [{
    title: "Inside which HTML do we put JavaScript?",
    choice:["<js>", "<javascript>", "<script>", "<scripting>"],
    answer: "<script>",
},
{ 
    title: "What is the correct JS syntax to change the content of the HTML element? <p id='demo'> This </p>", 
    choice:["document.getElementByName('p').innerHTML = 'Hello'", "document.getElement('p').innerHTML = 'Hello'", "#demo.innerHTML = 'Hello'", 
    "document.getElementById('demo').innerHTML ='Hello'"],
    answer: "document.getElementById('demo').innerHTML = 'Hello'",
},
{
    title: "Where is the correct place to insert a JavaScript?",
    choice:["The <Head> Element", "Both <head> element and the <body> section are correct", "The <body> section", "none of the above"],
    answer: "The <body> section",
},
{
    title: "What is the correct syntax for reffering to an external script called 'yyy.js'?",
    choice: ["<script href='yyy.js'></script></script>", "<script src='yyy.js'></script>","<script rel='yyy.js'></script>", 
    "<script name='yyy.js'></script>"],
    answer: "<script src='yyy.js'></script>",
},
    
]