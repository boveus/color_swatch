let $ = require('jquery')

const url = 'https://color-swatch-api.herokuapp.com/api/v1/'

const getTopColor = function() {
  $.get(`${url}/top_color`, function ( data ) {
    $('.top-color').append(data['value'])
  })
}
const postColor = function(color) {
  $.post(`${url}/colors`, { color: { value: `${color}` } })
}

export { getTopColor, postColor }
