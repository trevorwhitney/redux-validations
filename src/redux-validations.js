import createAll from './redux-validations/createAll'

import React from 'react'
import {connect} from 'react-redux'

export const {
  validateComponent
} = createAll(React, connect)