document
    .querySelectorAll('section > h2')
    .forEach((element) => {
        console.log(element.innerHTML);
        console.log(element.outerHTML);
        element.innerHTML = 'Test';
        console.log(element.tagName);
        console.log(element.nodeType);
    });

/* Don't use it for lab 5 & 6 */
let btn = document.getElementById('add-section-btn');
btn.addEventListener('click', (event) => {
    let section = document.createElement('section');

    let heading = document.createElement('h2');
    heading.innerText = prompt('Title for the section', 'New section');
    section.appendChild(heading);

    let content = document.createElement('p');
    content.innerText = prompt('Content for the section', 'Test content');
    section.appendChild(content);

    document.querySelector('body > main').appendChild(section);
});

/* Good to go */
document.getElementById('add-template-section-btn').addEventListener('click', () => {
    let section = document.getElementById('section-template').content.cloneNode(true);
    section.querySelector('h2').innerText = prompt('Title for the section', 'New section');
    section.querySelector('p').innerText = prompt('Content for the section', 'Test content');
    document.querySelector('body > main').appendChild(section);
});

btn.addEventListener('click', () => { alert('Hello!') });

document.getElementById('remove-section-btn').addEventListener('click', () => {
    let main = document.querySelector('body > main');
    if (main.lastElementChild.tagName === 'SECTION') {
        main.removeChild(main.lastElementChild);
    }
});

/*
let section = document.querySelector('section');
section.addEventListener('mouseenter', () => {
    section.style.backgroundColor = 'antiquewhite';
});
section.addEventListener('mouseleave', () => {
    section.style.backgroundColor = 'inherit';
});
*/