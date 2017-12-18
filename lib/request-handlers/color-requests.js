let $ = require('jquery')

const getTopColor = function() {
  $.get('https://color-swatch-api.herokuapp.com/api/v1/top_color', function ( data ) {
    console.log(data)
    $('.top-color').append(data['value'])
  })
}
const postColor = function(color) {
  $.post('https://color-swatch-api.herokuapp.com/api/v1/colors', { color: { value: `${color}` } })
}

export { getTopColor, postColor }
