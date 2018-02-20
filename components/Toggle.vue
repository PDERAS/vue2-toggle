<template>
    <div class="toggle-wrapper">
        <!-- Rounded switch -->
        <label class="switch">
            <input :id="id" type="checkbox" ref="input" :value="value" :disabled="disabled" @click="update" :style="setColorStyles()">
            <span class="slider" :class="[ type == 'round' ? 'round' : null ]" :style="setColorStyles()"></span>
        </label>
    </div>
</template>

<script>
    export default {
        name: 'toggle',

        props: {
            altColor: {
                type: String,
                default: "#ccc"
            },

            color: {
                type: String,
                default: "#2196F3"
            },

            disabled: {
                type: Boolean,
                default: false
            },

            id: {
                type: String,
                default: null
            },

            type: {
                type: String,
                validate(val) {
                    return val == 'round' || val == 'rectangle';
                },
                default: 'round'
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
</style>