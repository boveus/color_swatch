let $ = require('jquery')
let colors = require('../data/colors.js')

$('.text-submission button').on('click', function() {
    let textBox = $('.text-submission textarea')
    let colorValues = textBox.val()
    let colorArray = $.unique(colorValues.split(' '))
    console.log(colorArray)
});
