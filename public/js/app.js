import getSessions from './sessionRepository.js'
import { sessionTemplate } from './template.js'

function render() {
  var list = document.querySelector('#sessions')
  if (!list) return
  list.innerHTML = sessionTemplate(data.listItems)
}

var data = {
  listItems: []
}

getSessions().then(sessions => {
  console.log('promises!')
  data.listItems = sessions
  render()
})

jQuery(document).ready(function () {
  // alert("wow");
  //  jQuery("header").addClass("fixed");
  jQuery('#hamburger').click(function () {
    //alert("The paragraph was clicked.");
    jQuery('header').toggleClass('fixed')
  })
})
