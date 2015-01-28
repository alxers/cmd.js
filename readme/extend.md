## Extend

### `cmd.extend(arg1, ...)(val1, ...)`

| name       | all or each?  | accepts args?  | return value    |
|------------|---------------|----------------|-----------------|
| `extend`   | each          | yes            | `[{...}, ...]`  |

Extends each value with each argument, in order.

#### Example

```js
cmd.extend({color: 'red'})({item: 'wrench'}, {item: 'apple'});
// [{item: 'wrench', color: 'red'}, {item: 'apple', color: 'red'}]
```