class InfoCard extends HTMLElement {
    constructor() {
        super();
        // Изолируем компонент от основной страницы с помощью теневого DOM
        // Скрываем внутренности компонента с помощью { mode: 'closed' }
        this.shadow = this.attachShadow({ mode: 'closed' });
    }

    // Клонируем шаблон, наполняем его разметкой и помещаем в компонент
    render() {
        const copy = infoCardTemplate.content.cloneNode(true);
        copy.querySelector('h3').innerText = this.getAttribute('card-title');
        this.shadow.replaceChildren(copy);
    }

    // Вызывается при появлении элемента на странице
    connectedCallback() {
        console.log('Card is created');
        this.render();
    }

    // С помощью специального геттера задаём атрибуты, на изменения которых будем реагировать
    static get observedAttributes() {
        return ['card-title'];
    }

    // Вызывается при изменении какого-то из атрибутов в observedAttributes
    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }
}

// В названии обязательно использовать дефис, чтобы браузер различал стандартные компоненты и сторонние
customElements.define('info-card', InfoCard);

// Кнопка для изменения атрибута и демонстрации обновления карточки
document.getElementById('changeTitle').addEventListener('click', () => {
    let card = document.querySelector('info-card');
    card.setAttribute('card-title', 'Web is cool');
    console.log('Button is clicked');
});