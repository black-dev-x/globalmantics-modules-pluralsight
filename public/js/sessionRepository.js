function getSessions() {
  return new Promise(function (resolve, reject) {
    var oReq = new XMLHttpRequest()
    oReq.onload = function (e) {
      resolve(e.target.response)
    }
    oReq.open('GET', 'sessions.json', true)
    oReq.responseType = 'json'
    oReq.send()
  })
}

export { getSessions as default }
