/**
 * We'll load general libraries, such as lodash, jQuery, and moment
 */
try {
    window._ = require('lodash');
    window.moment = require('moment');
    window.d3 = require('d3');
} catch (e) {
    console.error(e);
}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;

if (csrftoken) {
    window.axios.defaults.headers.common['X-CSRFToken'] = csrftoken;
} else {
    console.error('CSRF token not found: https://docs.djangoproject.com/en/3.1/ref/csrf/');
}

/**
 * We will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

const files = require.context('./vue-components', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

/**
 * Sample code to register Vue components manually
 *
 * Vue.component('example-component', require('./vue-components/ExampleComponent.vue').default);
 */

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// add the global event bus to avoid import in each components.
Vue.prototype.$eventBus = new Vue();

const app = new Vue({
    el: '#app',
});
