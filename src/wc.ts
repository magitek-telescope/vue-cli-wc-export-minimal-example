import Vue from 'vue'

// TS の定義はない
const { default: wrap } = require('@vue/web-component-wrapper')

// ?shadow を使って Shadow DOM での Scoped CSS を有効化するのでこう読む
const { default: MyComponent } = require('./MyComponent.vue?shadow')

window.customElements.define('my-component', wrap(Vue, MyComponent))
