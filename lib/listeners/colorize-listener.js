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
      $.post(function(data, status){
          alert("Data: " + data + "\nStatus: " + status);
      })
    }
})


// 'https://color-swatch-api.herokuapp.com/api/v1/colors'

// For story 2,
// each invidivual color parsed should be sent via POST request (including duplicates)
// to the Color Swatch API.
