let a = document.getElementsByTagName('div')[0];

// elem.innerHTML is a property that allows us to get the HTML inside the elem as a string
console.log(a.innerHTML);  // innerHTML is only valid of element nodes. For other node types we can use nodeValue or Data as given below

let text = document.body.firstChild.data;
console.log(text);

// elem.outerHTML is a property that allows us to get the whole HTML i.e, (HTML + the element itself)
console.log(a.outerHTML);



