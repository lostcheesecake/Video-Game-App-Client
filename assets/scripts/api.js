const config = require('./config')
const store = require('./store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
    // data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
    // data: data
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
  console.log('data is ', data)
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
    // data: data
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

const updateReview = (bookId) => {
  return $.ajax({
    url: config.apiUrl + '/reviews/' + bookId,
    method: 'PATCH'
  })
}
module.exports = {
  getReviews,
  deleteReview,
  updateReview,
  signUp,
  signIn,
  signOut,
  changePassword
}
