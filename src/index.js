import React from 'react'
// import styles from './styles.module.css'

let isBorder = false
let color = '#4f2c8f'
const getVariableName = (varObj) => Object.keys(varObj)[0]

const CSLog = {
  setBorder(enable) {
    isBorder = enable
  },

  setColor(ncolor) {
    color = ncolor
  },

  d(variable, name = 'VALUE') {
    if (typeof variable === 'object') {
      console.log(
        `%c ▼ %c ${name} `,
        `background: #1c4761; color: white; padding: 2px; ${
          isBorder && 'border: 1px solid black'
        }; border-bottom: none; border-right: none;`,
        `background: cyan; color: black; font-weight: bold;  ${
          isBorder && 'border: 1px solid black'
        }; padding: 2px; border-bottom: none;`,
        variable
      )
      //   console.log('%c ````````````', `background: cyan; color: cyan;`)
    } else {
      console.log(
        `%c ${name} ` + `%c ${variable} `,
        `background: black; color: white; font-weight: bold; ${
          isBorder && 'border: 1px solid black'
        }; padding: 2px;`,
        `background: #148ff5; color: white; font-weight: bold; ${
          isBorder && 'border: 1px solid black'
        }; padding: 2px; `
      )
    }
  },

  h1(msg, fg = color, bg = 'white', border = isBorder) {
    console.log(
      `%c${msg} `,
      `color: ${fg}; background-color: ${bg}; ${
        border && 'border: 1px solid black'
      }; font-weight: bold; font-family: Verdana, Geneva, sans-serif;  font-size: 2.5rem; padding: 2px;`
    )
  },

  h2(msg, fg = color, bg = 'white', border = isBorder) {
    console.log(
      `%c${msg} `,
      `color: ${fg}; background-color: ${bg}; ${
        border && 'border: 1px solid black'
      }; font-weight: bold; font-family: Verdana, Geneva, sans-serif;  font-size: 2rem; padding: 2px;`
    )
  },

  h3(msg, fg = color, bg = 'white', border = isBorder) {
    console.log(
      `%c${msg} `,
      `color: ${fg}; background-color: ${bg}; ${
        border && 'border: 1px solid black'
      }; font-weight: bold; font-family: Verdana, Geneva, sans-serif;  font-size: 1.5rem; padding: 2px;`
    )
  },

  h4(msg, fg = color, bg = 'white', border = isBorder) {
    console.log(
      `%c${msg} `,
      `color: ${fg}; background-color: ${bg}; ${
        border && 'border: 1px solid black'
      }; font-weight: bold; font-family: Verdana, Geneva, sans-serif;  font-size: 1rem; padding: 2px;`
    )
  },

  p(msg, fg = 'black', bg = '#d4ffe1', border = isBorder) {
    console.log(
      `%c${msg} `,
      `color: ${fg}; background-color: ${bg}; ${
        border && 'border: 1px solid black'
      }; font-family: Verdana, Geneva, sans-serif; padding: 2px; padding-left: 5px; line-height: 1.2rem;`
    )
  },

  b(msg, fg = color, bg = '#f7f7f7', border = isBorder) {
    console.log(
      `%c${msg} `,
      `color: ${fg}; background-color: ${bg}; ${
        border && 'border: 1px solid black'
      }; font-family: Verdana, Geneva, sans-serif; padding: 3px; font-weight: bold;`
    )
  },

  i(msg, fg = color, bg = '#f7f7f7', border = isBorder) {
    console.log(
      `%c${msg} `,
      `color: ${fg}; background-color: ${bg}; ${
        border && 'border: 1px solid black'
      }; font-family: Verdana, Geneva, sans-serif; padding: 3px; font-style: italic;`
    )
  },

  bi(msg, fg = color, bg = '#f7f7f7', border = isBorder) {
    console.log(
      `%c${msg} `,
      `color: ${fg}; background-color: ${bg}; ${
        border && 'border: 1px solid black'
      }; font-family: Verdana, Geneva, sans-serif; padding: 3px; font-style: italic; font-weight: bold;`
    )
  },

  br() {
    console.log('')
  },

  success(msg) {
    console.log(
      `%c ${msg} `,
      `color: white; background-color: green;  font-family: Verdana, Geneva, sans-serif; padding: 3px; display: block`
    )
  },

  error(msg) {
    console.log(
      `%c ${msg} `,
      `color: white; background-color: red;  font-family: Verdana, Geneva, sans-serif; padding: 3px; display: block`
    )
  },

  info(msg) {
    console.log(
      `%c ${msg} `,
      `color: white; background-color: blue;  font-family: Verdana, Geneva, sans-serif; padding: 3px; display: block`
    )
  },

  warn(msg) {
    console.log(
      `%c ${msg} `,
      `color: black; background-color: yellow;  font-family: Verdana, Geneva, sans-serif; padding: 3px; display: block`
    )
  },

  table(data, name = 'VALUE') {
    if (typeof data === 'object') {
      console.log(
        `%c ▼ %c ${name} `,
        `background: #331038; color: white; padding: 2px; ${
          isBorder && 'border: 1px solid black'
        }; border-bottom: none; border-right: none;`,
        `background: #6ded87; color: black; font-weight: bold;  ${
          isBorder && 'border: 1px solid black'
        }; padding: 2px; border-bottom: none;`
      )
      console.table(data)
      //   console.log('%c ````````````', `background: cyan; color: cyan;`)
    } else {
      console.log(
        `%c ${name} ` + `%c ${data} `,
        `background: black; color: white; font-weight: bold; ${
          isBorder && 'border: 1px solid black'
        }; padding: 2px;`,
        `background: #148ff5; color: white; font-weight: bold; ${
          isBorder && 'border: 1px solid black'
        }; padding: 2px; `
      )
    }
  }
}

export default CSLog
