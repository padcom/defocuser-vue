## Defocuser Vue plugin

It has been way too many times when I implemented (with greater or lesser success) automated way
for closing dropdowns when clicking outside of them or by pressing the Escape key. This utility
is a way for me to stop repeating myself and have it working always the way it should.

### Usage

There are 2 directives in this package:

```v-defocus="method"``` - when this directive is added to an element and the user clicks
outside of that element then the ```method``` will be called

```v-defocus-secondary="ref"``` when this directive is added alongside the ```v-defocus``` element
then the algorithm for checking if the click was inside or outside will take both roots into account.
This is useful when you have a label that is not a direct parent of your dropdown but you still want
it to be treated just like it would be one.

You can either manually import those directives like so

```
import { defocus } from 'defocuser-vue'

export default {
  directives: {
    defocus
  },
...
}
```

or use it as a plugin and register both directives automatically:

```
import Vue from 'vue'
import Defocuser from 'defocuser-vue'

Vue.use(Defocuser)
```

### Remarks

Please see the following repository to see it in action

https://github.com/padcom/defocuser-example
