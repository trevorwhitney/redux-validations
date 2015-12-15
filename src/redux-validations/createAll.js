import createValidateComponent from './createValidateComponent'

export function createAll(React, connect) {
  return {
    validateComponent: createValidateComponent(React, connect)
  }
}