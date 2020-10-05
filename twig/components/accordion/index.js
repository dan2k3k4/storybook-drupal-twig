import { LitElement, html, customElement } from 'lit-element';

/**
 * Will add click event to each menu button to show menu items.
 */
class Accordion extends LitElement {
  items = [];

  static get properties() {
    return {
      openText: String,
      closeText: String,
    };
  }

  connectedCallback() {
    super.connectedCallback();
    const buttons = this.querySelectorAll('button.accordion__action');

    if (buttons.length) {
      buttons.forEach(button => {
        button.addEventListener('click', this.toggleItem);
      });
    }

    this.items = this.querySelectorAll('.accordion__item');
  }

  /**
   * Will add necessary accessibility attributes.
   * @param {Element} element
   * @param {Boolean} isVisible
   */
  setAttributes = (element, isVisible = false) => {
    const { openText, closeText } = this;
    const button = element.querySelector('.accordion__close');
    const text = button.querySelector('.visually-hidden');
    element.setAttribute('aria-pressed', isVisible);
    element.setAttribute('aria-expanded', isVisible);
    button.title = isVisible ? closeText : openText;
    text.innerText = isVisible ? closeText : openText;

    const contentElement = element.parentNode.querySelector('.accordion__content');
    contentElement.style.height = `${contentElement.scrollHeight}px`;

    if (isVisible) {
      contentElement.parentNode.classList.add('visible');
      contentElement.addEventListener('transitionend', () => {
        contentElement.style.height = null;
      }, { once: true });
    } else {
      // Needs to be set twice otherwise transitionend does not fire
      contentElement.style.height = `${contentElement.scrollHeight}px`;
      contentElement.style.height = '1px';
      contentElement.addEventListener('transitionend', () => {
        contentElement.style.height = null;
        contentElement.parentNode.classList.remove('visible');
      }, { once: true });
    }
  };

  toggleItem = event => {
    const parent = event.currentTarget.parentNode;
    const isVisible = parent.classList.contains('visible');
    this.setAttributes(event.currentTarget, !isVisible);
  };

  render() {
    return html`
      <slot></slot>
    `;
  }
}

customElement('zi-accordion')(Accordion);
