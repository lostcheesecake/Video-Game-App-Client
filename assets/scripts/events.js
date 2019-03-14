'use strict'

const getFormFields = require(`./../../lib/get-form-fields.js`)

const api = require('./api.js')
const ui = require('./ui.js')

const onGetReviews = (event) => {
  if (event) { event.preventDefault() }
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
    .then(onGetReviews)
    .catch(ui.deleteReviewFailure)
}

const onCreateReview = () => {
  event.preventDefault()
  console.log(event)
  const data = getFormFields(event.target)
  api.createReview(data)
    .then(ui.createReviewSuccess)
    .then(onGetReviews)
    .catch(ui.createReviewFailure)
}

const onUpdateReview = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const reviewId = $(event.target).data('id')
  api.updateReview(data, reviewId)
    .then(ui.updateReviewSuccess)
    .then(onGetReviews)
    .catch(ui.updateReviewFailure)
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
  $('#create-review-form').on('submit', onCreateReview)
  $('#reviews-display').on('submit', '.update-review-form', onUpdateReview)
  $('#sign-up-form').on('submit', onSignUp)
  $('#sign-in-form').on('submit', onSignIn)
  $('#change-password-form').on('submit', onChangePassword)
  $('#sign-out-button').on('click', onSignOut)
}

module.exports = {
  onGetReviews,
  onDeleteReview,
  onCreateReview,
  onUpdateReview,
  addHandlers
}
