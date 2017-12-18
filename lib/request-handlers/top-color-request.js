let $ = require('jquery')

const getTopColor = function() {
  $.get('https://color-swatch-api.herokuapp.com/api/v1/top_color', function ( data ) {
    console.log(data)
    $('.top-color').append(data['value'])
  })
}

export { getTopColor }
