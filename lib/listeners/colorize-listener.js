let $ = require('jquery')
let colors = require('../data/colors.js')

$('.text-submission button').on('click', function() {
    let textBox = $('.text-submission textarea')
    let colorValues = textBox.val()
    let colorArray = $.unique(colorValues.split(' '))
    let swatch = $('article.colorized-text')

    for (var i = 0; i < colorArray.length; i++) {
      let color = colorArray[i]
      let rgbColor = colors[color]
      if (swatch.children(`#${color}`).length !== 1) {
        swatch.append(`<div class="swatch" id='${color}' style="background-color:${rgbColor};"></div>`)
      }
    }
})

// swatch. They should live within article.colorized-text.


// I should not see duplicate color swatches even if the color
// appeared multiple times in the paragraph.
// Each color swatch should have a background color of its text's correlating hex code,
// e.g., "red" => `<div class="swatch" style="background-color:#FF0000;"></div>`
