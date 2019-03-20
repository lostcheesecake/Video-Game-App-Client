'use strict'

const reviewListing = require('./review-listing.handlebars')

const store = require('./store')

const getReviewsSuccess = (data) => {
  const showReviewsHtml = reviewListing({
    reviews: data.reviews
  })
  $('#reviews-display').html(showReviewsHtml)
}
const getReviewsFailure = () => {
  $('#message').text('Error on Show Reviews')
}

const deleteReviewSuccess = () => {
  $('#reviews-display').empty()
  setTimeout(() => {
    $('#message').text('Delete successful!')
  }, 2000)
}

const deleteReviewFailure = () => {
  $('#message').text('YOU DON\'T OWN THIS REVIEW')
  setTimeout(() => {
    $('#message').text('')
  }, 2000)
}

const createReviewSuccess = (data) => {
  const showReviewsHtml = reviewListing({
    reviews: data.reviews
  })
  $('#reviews-display').html(showReviewsHtml)
  $('form').trigger('reset')
}
const createReviewFailure = () => {
  $('#message').text('Error on Create Review')
}

const updateReviewSuccess = () => {
  $('form').trigger('reset')
}

const updateReviewFailure = () => {
  $('#message').text('Error on Update Review')
}

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
  $('input').trigger('reset')
  setTimeout(() => {
    $('#message').text('')
  }, 2000)
}

const signUpFailure = function () {
  $('#message').text('Error on Sign Up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
  $('input').trigger('reset')
  setTimeout(() => {
    $('#message').text('')
  }, 2000)
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
  $('input').trigger('reset')
  setTimeout(() => {
    $('#message').text('')
  }, 2000)
  store.user = data.user
  $('#sign-out-button').show()
  $('#change-password-form').show()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('#create-review-form').show()
  $('#get-reviews-form').show()
  $('#update-review-form').show()
  $('#reviews-display').show()
}

const signInFailure = function () {
  $('#message').text('Error on Sign In')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
  $('input').trigger('reset')
  setTimeout(() => {
    $('#message').text('')
  }, 2000)
}

const signOutSuccess = function () {
  $('#message').text('Signed out successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-out-button').hide()
  $('#change-password-form').hide()
  $('#user-message').hide()
  $('#create-review-form').hide()
  $('#get-reviews-form').hide()
  $('#reviews-display').hide()
  $('#sign-up-form').show()
  $('#sign-in-form').show()
  $('form').trigger('reset')
  $('input').trigger('reset')
  setTimeout(() => {
    $('#message').text('')
  }, 2000)
  store.user = null
}

const signOutFailure = function () {
  $('#message').text('Error on Sign Out')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
  $('input').trigger('reset')
  setTimeout(() => {
    $('#message').text('')
  }, 2000)
}

const changePasswordSuccess = function () {
  $('#message').text('Changed password successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
  $('input').trigger('reset')
  setTimeout(() => {
    $('#message').text('')
  }, 2000)
}

const changePasswordFailure = function () {
  $('#message').text('Error on Change Password')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
  $('input').trigger('reset')
  setTimeout(() => {
    $('#message').text('')
  }, 2000)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  getReviewsSuccess,
  getReviewsFailure,
  createReviewSuccess,
  createReviewFailure,
  deleteReviewSuccess,
  deleteReviewFailure,
  updateReviewSuccess,
  updateReviewFailure
}
