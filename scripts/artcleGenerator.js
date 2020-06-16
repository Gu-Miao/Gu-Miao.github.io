const readline = require('readline')
const fs = require('fs').promises
const path = require('path')
const day = require('dayjs')
const { timeStamp } = require('console')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
const questionHandler = name => {
  const { res, message } = nameValidator(name)
  if (res) {
    rl.close()
    console.log(`generating new article ${name}...`)
    generator(name)
  } else {
    console.log(`error: ${message}`)
    rl.question('Input article name here: ', questionHandler)
  }
}

rl.question('Input article name here: ', questionHandler)

const nameValidator = () => {
  return { res: true, message: '' }
}
const generator = async name => {
  const timeStamp = day().format('YYYYMMDD')
  const dirPath = path.join(__dirname, '../src/articles', `${timeStamp}-${name}`)
  try {
    const mdRes = await fs.mkdir(dirPath)
    console.log(mdRes)
    const jsxRes = await fs.writeFile(
      path.join(dirPath, `${name}.jsx`),
      JSXTemplate(name, timeStamp)
    )
    console.log(jsxRes)
    const lessRes = await fs.writeFile(path.join(dirPath, `${name}.less`), lessTemplate(name))
    console.log(lessRes)
    const articleRes = await fs.writeFile(
      path.join(dirPath, `${name}.article.json`),
      articleJSONTemplete(name, timeStamp)
    )
    console.log(articleRes)
    const packageRes = await fs.writeFile(
      path.join(dirPath, 'package.json'),
      packageJSONTemplate(name)
    )
    console.log(packageRes)
  } catch (err) {
    console.log('err:', err)
  }
}

const JSXTemplate = (name, timeStamp) =>
  `import React from 'react'
import '@articles/${timeStamp}-${name}/${name}.less'

const ${name} = () => {
  return (
    <div id="${name}"></div>
  )
}

export default ${name}
`
const lessTemplate = name => `#${name}{}`
const articleJSONTemplete = (name, timeStamp) =>
  `
{
  "name": "${name}",
  "create_time": "${timeStamp}",
  "abstract": ""
}
`
const packageJSONTemplate = name => `{"main":"${name}.jsx"}`
