"use strict";

const elQs = document.querySelectorAll('q');

for (let el of elQs) {
    var elBlockquote = document.createElement('blockquote');
    elBlockquote.innerHTML = el.innerHTML;
    elBlockquote.className = 'pullquote';
    el.insertBefore(elBlockquote, el.childNodes[0]);
}
