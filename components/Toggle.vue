<template>
    <div class="toggle-wrapper">
        <!-- Rounded switch -->
        <label class="switch">
            <input type="checkbox" ref="input" :checked="value" :disabled="disabled" :id="id" :style="setColorStyles()" :value="value" @click="update">
            <span class="slider" :class="[ type == 'round' ? 'round' : null ]" :style="setColorStyles()"></span>
            <template v-if="useLabels">
                <span class="checkbox-label left" v-if="value">{{ labels.true_label }}</span>
                <span class="checkbox-label right" v-if="!value">{{ labels.false_label }}</span>
            </template>
        </label>
    </div>
</template>

<script>
    import defaults from '../options';

    export default {
        name: 'toggle',

        props: {
            altColor: {
                type: String,
                default: () => defaults.altColor
            },

            color: {
                type: String,
                default: () => defaults.color
            },

            disabled: {
                type: Boolean,
                default: false
            },

            id: {
                type: String,
                default: null
            },

            labels: {
                type: Object,
                validate(obj) {
                    return 'true_label' in obj && 'false_label' in obj;
                },
                default: () => defaults.labels
            },

            type: {
                type: String,
                validate(val) {
                    return val == 'round' || val == 'rectangle';
                },
                default: () => defaults.type
            },

            useLabels: {
                type: Boolean,
                default: () => defaults.useLabels
            },

            value: {
                required:   false,
                default:    false
            }
        },

        methods: {
            setColorStyles() {
                if (this.value) {
                    return 'background-color: ' + this.color + ';';
                } else {
                    return 'background-color: ' + this.altColor + ';';
                }
            },

            update() {
                this.$refs.input.value = !this.value;
                this.$emit('input', !this.value);
            }
        }
    }
</script>


<style>
    /* REF: https://www.w3schools.com/howto/howto_css_switch.asp */
    /* The switch - the box around the slider */
    .switch {
        position:           relative;
        display:            inline-block;
        width:              60px;
        height:             25px;
    }

    /* Hide default HTML checkbox */
    .switch input {
        display:            none;
    }

    /* The slider */
    .slider {
      position:             absolute;
      cursor:               pointer;
      top:                  0;
      left:                 0;
      right:                0;
      bottom:               0;
      background-color:     #ccc;
      -webkit-transition:   .4s;
      transition:           .4s;
    }

    .slider:before {
      position:             absolute;
      content:              "";
      height:               18px;
      width:                18px;
      left:                 8px;
      bottom:               4px;
      background-color:     white;
      -webkit-transition:   .4s;
      transition:           .4s;
    }

    input:checked + .slider:before {
        -webkit-transform:  translateX(26px);
        -ms-transform:      translateX(26px);
        transform:          translateX(26px);
    }

    /* Rounded sliders */
    .slider.round {
        border-radius:      34px;
    }

    .slider.round:before {
        border-radius:      50%;
    }

    .toggle-wrapper > .switch > .checkbox-label {
        color: white;
        position: absolute;
        font-size: 12px;
    }

    .toggle-wrapper > .switch > .checkbox-label.left, .checkbox-label.right {
        top: 3px;
    }

    .toggle-wrapper > .switch > .checkbox-label.left {
        left: 4px;
    }

    .toggle-wrapper > .switch > .checkbox-label.right {
        right: 4px;
    }
</style>
