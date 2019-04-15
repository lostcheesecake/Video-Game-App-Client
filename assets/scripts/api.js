const config = require('./config')
const store = require('./store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getReviews = () => {
  return $.ajax({
    url: config.apiUrl + '/reviews',
    method: 'GET'
  })
}

const deleteReview = (reviewId) => {
  return $.ajax({
    url: config.apiUrl + '/reviews/' + reviewId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createReview = data => {
  return $.ajax({
    url: config.apiUrl + '/reviews',
    method: 'POST',
    headers: { Authorization: 'Token token=' + store.user.token },
    data
  })
}

const updateReview = (data, reviewId) => {
  return $.ajax({
    url: config.apiUrl + '/reviews/' + reviewId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getConsoles = () => {
  return $.ajax({
    url: config.apiUrl + '/consoles',
    method: 'GET'
  })
}

const deleteConsole = (consoleId) => {
  return $.ajax({
    url: config.apiUrl + '/consoles/' + consoleId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createConsole = data => {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/consoles',
    method: 'POST',
    headers: { Authorization: 'Token token=' + store.user.token },
    data
  })
}

const updateConsole = (data, consoleId) => {
  return $.ajax({
    url: config.apiUrl + '/consoles/' + consoleId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  getReviews,
  deleteReview,
  updateReview,
  createReview,
  getConsoles,
  deleteConsole,
  updateConsole,
  createConsole,
  signUp,
  signIn,
  signOut,
  changePassword
}
