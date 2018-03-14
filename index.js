import Toggle from './components/Toggle.vue'
import options from './options';

function install (Vue, globalOptions) {
    if (globalOptions) {
        Object.keys(globalOptions).map(function(key) {
            options[key] = globalOptions[key];
        });
    }
    Vue.component('toggle', Toggle);
}

export default install;
