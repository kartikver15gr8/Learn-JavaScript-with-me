
let sec = document.getElementsByTagName('section')[0];
sec.innerHTML = "I just changed the innerHTML of section tag!";

// Other Methods for performing insertion in HTML

let div = document.createElement('div');

div.innerHTML = "<h1>Hello how's it all going!</h1>";

sec.append(div);
sec.prepend(div);
sec.before(div);
sec.after(div);
sec.replaceWith(div);
