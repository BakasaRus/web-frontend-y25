class InnerElement extends HTMLElement {
    constructor() {
        super();
        console.log('Inner is created');
    }

    connectedCallback() {
        console.log('Inner is connected');
    }
}

class OuterElement extends HTMLElement {
    constructor() {
        super();
        console.log('Outer is created');
    }

    connectedCallback() {
        console.log('Outer is connected');
    }
}

customElements.define('inner-element', InnerElement);
customElements.define('outer-element', OuterElement);
