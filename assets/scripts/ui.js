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
  $('form').trigger('reset')
  $('#message').text('Error on Show Reviews')
}

const deleteReviewSuccess = () => {
  $('form').trigger('reset')
  $('#reviews-display').empty()
  setTimeout(() => {
    $('#message').text('Delete Successful!')
  }, 2000)
}

const deleteReviewFailure = () => {
  $('form').trigger('reset')
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
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').text('Error on Create Review')
  }, 2000)
}

const updateReviewSuccess = () => {
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').text('Successfully Updated Review')
  }, 2000)
}

const updateReviewFailure = () => {
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').text('')
  }, 2000)
}

const signUpSuccess = function (data) {
  $('#message').text('Signed Up Successfully')
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
  $('#message').text('Signed In Successfully!')
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
  $('#message').text('Signed Out Successfully!')
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
  $('#message').text('Changed Password Successfully!')
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
