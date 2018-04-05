# Vue Toggle
A vue.js component for a toggle input.

## How to initialize Vue Toggle
Vue toggle is built as a vue plugin. It can be initialized just as the Vue documentation states.

```javascript
import Toggle from "@pderas/vue2-toggle";

Vue.use(Toggle, {
    altColor:   '#ccc',     // default
    color:      '#2196F3',  // default
    useLabels:  true,       // default
    type:       'round'     // default
});
```
## Usage

#### Creation
A vue toggle is easily created and can be bound to data with v-model.<br>
```HTML
<toggle></toggle>
```

## Properties
| Property   | Required | Type    | Default   | Description                                   |
|------------|----------|---------|-----------|-----------------------------------------------|
| alt-color  | false    | String  | '#ccc'    | The color of the toggle when unchecked        |
| color      | false    | String  | '#2196F3' | The color of the toggle when checked          |
| type       | false    | String  | 'round'   | The type of style to use for the toggle       |
| use-labels | false    | Boolean | true      | Use on/off labels on the toggle               |
| value      | false    | Boolean | false     | Value for the input, can be used with v-model |

##### Available Types
1. round
2. rectangle

#### Styling
Styling is currently limited, but can be expanded in the future.

## License
This project is covered under the MIT License. Feel free to use it wherever you like.