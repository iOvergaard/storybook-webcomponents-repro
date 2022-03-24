import './button.css';

import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';

export interface ButtonProps {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
}
/**
 * Primary UI component for user interaction
 * @element my-button
 * @slot - I am the default slot with no name hence I am NOT SHOWN
 * @slot label - I am shown as I should
 * @slot action - I am a random slot
 */
@customElement('my-button')
export class ButtonElement extends LitElement implements ButtonProps {

  /**
   * The background color property
   * @attr
   */
  @property()
  backgroundColor?: string;

  /**
   * The size property
   * @attr
   */
  @property()
  size?: 'small' | 'medium' | 'large';

  /**
   * I am NOT SHOWN because I share a name with a slot
   * @attr
   */
  @property({ type: String })
  label?: string;

  render() {
    return html`
    <button
      type="button"
      class=${['storybook-button', `storybook-button--${this.size || 'medium'}`].join(' ')}
      style=${styleMap({ backgroundColor: this.backgroundColor })}
    >
      <slot></slot>
      <slot name="label">${this.label}</slot>
    </button>
  `;
  }
};
