# Redux Validations
---

A library to provide simple validations for React components using Redux and higher order component
decorators.

## Installation

`npm install --save redux-validations`

## Usage

The `createValidatedComponent` function takes a hash with configuration options, and returns a function
that takes a component. Export this return value of this function, instead of your original class.

```
class SimpleComponent extends Component {
  render() {
    return (
      <form>
        <label for="firstName">First Name</label>
        <input type="text" id="firstName name="firstName" />
      </form>
    )
  }
}

// validator takes the value of the field, and returns a promise that resolves
// with the validity of the field
function firstNameIsLongEnough(firstName) {
  const promise = new Promise();
   
   if (firstName && firstName.length > 2) {
     promise.resolve(true)
   }
   
   promise.resolve(false)
}

export default createValidatedComponent({
   validators: {
     ‘fieldName’: firstNameIsLongEnough
   },
   //optional configuration
   validatedChildren: [], //defaults to empty array
   reduxMountPoint: ‘validatedComponents’, //default mount point
   name: Component.constructor.name //default component name
})(SimpleComponent)
```