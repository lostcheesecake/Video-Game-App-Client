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
  const reviewId = $(event.target).data('id')
  api.deleteReview(reviewId)
    .then(ui.deleteReviewSuccess)
    .then(onGetReviews)
    .catch(ui.deleteReviewFailure)
}

const onCreateReview = () => {
  event.preventDefault()
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

const onGetConsoles = (event) => {
  console.log('onGetConsoles')
  if (event) { event.preventDefault() }
  api.getConsoles()
    .then(ui.getConsolesSuccess)
    .catch(ui.getConsolesFailure)
}

const onDeleteConsole = (event) => {
  event.preventDefault()
  const consoleId = $(event.target).data('id')
  api.deleteConsole(consoleId)
    .then(ui.deleteConsoleSuccess)
    .then(onGetConsoles)
    .catch(ui.deleteConsoleFailure)
}

const onCreateConsole = () => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createConsole(data)
    .then(ui.createConsoleSuccess)
    .then(onGetConsoles)
    .catch(ui.createConsoleFailure)
}

const onUpdateConsole = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const consoleId = $(event.target).data('id')
  api.updateReview(data, consoleId)
    .then(ui.updateConsoleSuccess)
    .then(onGetConsoles)
    .catch(ui.updateConsoleFailure)
}

const onSignUp = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const addHandlers = () => {
  $('#get-reviews-form').on('click', onGetReviews)
  $('#create-review-form').on('submit', onCreateReview)
  $('#create-console-form').on('submit', onCreateConsole)
  $('#get-consoles-form').on('click', onGetConsoles)

  $('#sign-up-form').on('submit', onSignUp)
  $('#sign-in-form').on('submit', onSignIn)
  $('#change-password-form').on('submit', onChangePassword)
  $('#sign-out-button').on('click', onSignOut)

  $('#reviews-display').on('submit', '.update-review-form', onUpdateReview)
  $('#consoles-display').on('click', '.delete-button', onDeleteConsole)
  $('#consoles-display').on('submit', '.update-review-form', onUpdateConsole)
  $('#reviews-display').on('click', '.delete-button', onDeleteReview)
}

module.exports = {
  onGetReviews,
  onDeleteReview,
  onCreateReview,
  onUpdateReview,
  onGetConsoles,
  onDeleteConsole,
  onCreateConsole,
  onUpdateConsole,
  addHandlers
}
