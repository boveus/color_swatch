let $ = require('jquery')
let colors = require('../data/colors.js')
import { postColor } from '../request-handlers/color-requests'

$('.text-submission button').on('click', function() {
  getColorInput()
})

$('.text-submission textarea').on('keyup', function(e) {
  if (e.which == 13 && ! e.shiftKey) {
     getColorInput()
  }
});

const getColorInput = function() {
  let textBox = $('.text-submission textarea')
  let colorValues = textBox.val()
  let colorArray = $.unique(colorValues.split(' '))
  console.log(colorArray)
  let swatch = $('article.colorized-text')

  for (var i = 0; i < colorArray.length; i++) {
    let color = colorArray[i]
    let rgbColor = colors[color]
    if (colors[color] && swatch.children(`#${color}`).length !== 1) {
      swatch.append(`<div class="swatch" id='${color}' style="background-color:${rgbColor};"></div>`)
      postColor(color)
    }
    else if (colors[color]) {
      postColor(color)
    }
  }
  textBox.val('')
}
