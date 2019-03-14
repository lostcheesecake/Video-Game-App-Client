'use strict'

const getFormFields = require(`./../../lib/get-form-fields.js`)

const api = require('./api.js')
const ui = require('./ui.js')

const onGetReviews = (event) => {
  event.preventDefault()
  api.getReviews()
    .then(ui.getReviewsSuccess)
    .catch(ui.getReviewsFailure)
}

const onDeleteReview = (event) => {
  event.preventDefault()
  console.log(event)
  const reviewId = $(event.target).data('id')
  api.deleteReview(reviewId)
    .then(ui.deleteReviewSuccess)
    .catch(ui.deleteReviewFailure)
}

const onSignUp = function (event) {
  event.preventDefault()
  console.log('sign up ran!')

  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('sign in ran!')

  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('sign out ran')

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('change password ran!')

  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const addHandlers = () => {
  $('#get-reviews-form').on('click', onGetReviews)
  $('#reviews-display').on('click', '.delete-button', onDeleteReview)
  $('#sign-up-form').on('submit', onSignUp)
  $('#sign-in-form').on('submit', onSignIn)
  $('#change-password-form').on('submit', onChangePassword)
  $('#sign-out-button').on('click', onSignOut)
}

module.exports = {
  onGetReviews,
  addHandlers
}
