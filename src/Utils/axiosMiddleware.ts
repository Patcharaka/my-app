import axios from 'axios'
import _ from 'lodash'
/**
 * Axios middleware
 *
 */
const axiosMiddleware = ({getState}: any) => (next: (arg0: any) => any) => (
  action: any,
) => {
  // add token to axios header
  const authToken = _.get(getState(), 'authState.accessToken')

  axios.defaults.headers.common.Authorization = authToken
    ? `Bearer ${authToken}`
    : ''

  return next(action)
}

export default axiosMiddleware
