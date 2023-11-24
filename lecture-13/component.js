class InfoCard extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'closed' });
    }

    render() {
        const title = this.getAttribute('card-title');
        this.shadow.innerHTML = `
            <style>
                h3 { 
                    color: green; 
                }
                :host {
                    padding: 24px;
                }
                :host([centered]) {
                    text-align: center;
                }
            </style>
            <h3>${title}</h3>
            <p>Author: 
                <slot name="author">Abobus</slot>
            </p>
            <slot></slot>
        `;
    }

    // Вызывается при появлении элемента на странице
    connectedCallback() {
        console.log('Card is created');
        this.render();
    }

    static get observedAttributes() {
        return ['card-title'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }
}

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

class AlertButton extends HTMLButtonElement {
    constructor() {
        super();
        this.addEventListener('click', () => {
            let message = this.getAttribute('message');
            alert(message);
        })
    }
}

// Обязательно использовать дефис
customElements.define('info-card', InfoCard);
customElements.define('inner-element', InnerElement);
customElements.define('outer-element', OuterElement);
customElements.define('alert-button', AlertButton, { extends: 'button' });