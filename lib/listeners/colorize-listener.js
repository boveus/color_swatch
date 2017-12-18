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
  let swatch = $('article.colorized-text')

  for (var i = 0; i < colorArray.length; i++) {
    let color = handleColorString(colorArray[i])
    console.log(color)
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

const handleColorString = function(string) {
  // string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
  string
  // .replace(/[^a-zA-Z0-9 !?]+/g, '')
  // .replace(/[^A-Za-z]/g, "")
  // .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()’]/gi, '')
  .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')
  // .replace(/[^\w\s]|_/g, "")
  // .replace(/\s+/g, " ")
  // .replace(/\./g, " ")
  // .replace(".", '')
  // .replace(/(\r\n|\n|\r)/gm,"")

  return string.toLowerCase()
  // return string.toLowerCase()
}

// Words processing is case insensitive.
// For example, 'red' and 'Red' and 'RED'
// all count toward the count (3) of 'red'.
