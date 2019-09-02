const path = require('path')
const data = require('./berries.json')

exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  const template = path.resolve('./src/templates/berry.js')

  data.forEach(berry_object => {
    var path = berry_object.slug;
    createPage({
      path,
      component:template,
      context: berry_object,
    })
  })
}