import { getTopColor } from '../request-handlers/top-color-request'
let $ = require('jquery')
let colors = require('../data/colors.js')

console.log(colors)

getTopColor()



// As a user
// when I visit Color Swatch
// and paste a paragraph into the "Paste text here" textarea
// and I click "Colorize!"
// Then I should see a swatch for each unique color from the paragraph that matches the
// colors in `lib/data/colors.js`.
// I should not see duplicate color swatches even if the color
// appeared multiple times in the paragraph.
// Each color swatch should have a background color of its text's correlating hex code,
// e.g., "red" => `<div class="swatch" style="background-color:#FF0000;"></div>`
