let a = document.getElementsByClassName('division')[0];
// Method to check for existence of an attribute
console.log(a.hasAttribute('class'));

// Method to get the value of an attribute
console.log(a.getAttribute('class'));

// Method used to set the value of an attribute 
a.setAttribute('class', 'div');
console.log(a.getAttribute('class'));

// Method to remove the attribute from element.
// a.removeAttribute('class');
console.log(a.hasAttribute('class'));

// Methods to get the colections of all attributes
console.log(a.attributes);

// custom attributes

let b = document.getElementsByClassName('span')[0];
console.log(b.dataset);
console.log(b.dataset.tech);
console.log(b.dataset.scope)
