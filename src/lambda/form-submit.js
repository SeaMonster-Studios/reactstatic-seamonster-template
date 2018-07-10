/* eslint-disable func-names, space-before-function-paren */
import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

exports.handler = function(event, context, callback) {
  const { form_id } = event.queryStringParameters
  const instance = axios.create({ baseURL: process.env.API_URL })

  instance
    .post(`${process.env.API_URL}/jwt-auth/v1/token`, {
      username: process.env.API_USER,
      password: process.env.API_PASSWORD,
    })
    .then(({ data: { token } }) => {
      instance.defaults.headers.common.Authorization = `Bearer ${token}`
    })
    .then(() =>
      instance.post(
        `${process.env.API_URL}/gf/v2/forms/${form_id}/submissions`,
        JSON.parse(event.body),
      ),
    )
    .then(({ data: { confirmation_message } }) => {
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify(confirmation_message),
      })
    })
    .catch(error => {
      return callback({
        ...error,
        statusCode: 500,
      })
    })
}
