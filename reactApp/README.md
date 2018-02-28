I have some doubts to this:

```html
<div>
   <input type = "text" value = {this.state.data}
      onChange = {this.updateState} />
   <h4>{this.state.data}</h4>
</div>
```

`onChange` event will update `state` and the `state` value will change input value again. So I expect an infinite loop here. But it didn't happen. Why?

I found the answer [here](https://github.com/facebook/react/issues/1152):

> onChange does not fire when React gives an input a new value

This makes all things clear.
