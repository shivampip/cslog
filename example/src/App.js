import React from 'react'

import log from 'cslog'

const App = () => {
  //   log.border(true)
  //   log.setColor('red')

  log.success('Hello World')
  log.error('Hello World')
  log.info('Hello World')
  log.warn('Hello World')

  const lname = 'Javascript'
  log.d(lname, 'Language')

  const data = {
    name: 'Shivam Agrawal',
    city: 'Pipariya'
  }
  log.d(data, 'PersonInfo')

  log.h1('Hello World')
  log.h2('Hello World')
  log.h3('Hello World')
  log.h4('Hello World')

  log.table(data)
  log.p('Hello')
  log.p(
    'This is a sample paragraph. it is multiline. if it is not, please decrease console width so that it may become multiline'
  )
  log.b('I am Bold')
  log.br()
  log.i('I am Bold')
  log.bi('I am Bold italic')
  return <h2>Check Console (Ctrl + i)</h2>
}

export default App
