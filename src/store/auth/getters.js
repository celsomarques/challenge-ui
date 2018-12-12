'use strict'

import { isEmpty } from 'lodash/fp'

export const isAuthenticated = (state) => !isEmpty(state.token)
export const getToken = (state) => state.token
