let $ = require('jquery')
let colors = require('../data/colors.js')
import { getTopColor, postColor } from '../request-handlers/color-requests'

const textBox = $('.text-submission textarea')

const resetTextBox = function() {
  getTopColor()
  textBox.val('')
}

$( document ).ready(function() {
    resetTextBox()
})

$('.text-submission button').on('click', function() {
  handleColorInput()
})

$('.text-submission textarea').on('keyup', function(e) {
  if (e.which == 13 && ! e.shiftKey) {
     handleColorInput()
  }
})

const handleColorInput = function() {
  let colorArray = getColorArray()
  appendSwatches( colorArray )
}


const getColorArray = function() {
  let colorValues = textBox.val().replace(/[^A-Za-z]/g, " ")
  return $.unique(colorValues.split(' '))
}

const appendSwatches = function( colorArray ) {
  let swatch = $('article.colorized-text')

  for (var i = 0; i < colorArray.length; i++) {
    let color = colorArray[i].toLowerCase()
    let rgbColor = colors[color]
    if (colors[color] && swatch.children(`#${color}`).length === 0) {
      swatch.append(`<div class="swatch" id='${color}' style="background-color:${rgbColor};"></div>`)
      postColor(color)
    }
    else if (colors[color]) {
      postColor(color)
    }
  }
  resetTextBox()
}
