const xlsx = require('node-xlsx')
const fs = require('fs')
const path = require('path')

const sheets = xlsx.parse('./i18n.xlsx')
// 还有别的语言就继续在这个数组里面加
// 对应i18n.xlsx 表头就行
const langs = ['zh-CN', 'en-US']

const intl = [{
  name: 'bit123',
  key: 's',
  index: 0
}]

let jsonData = {}

const initJsonData = () => {
  langs.forEach(lang => {
    jsonData[lang] = {}
  })
}

const loop = (index, cb) => {
  sheets[index].data.forEach(item => {
    let id = item[0]
    if (id) {
      id = id.toString().replace(/.*[^\d](\d*)$/, '$1')
      cb && cb(id, item)
    }
  })
}

const release = (index) => {
  index.forEach((obj, item) => {
    loop(item, (id, item) => {
      langs.forEach((lang, index) => {
        let ct = item[index + 1]
        if (Boolean(ct)) {
          jsonData[lang][obj.key + (id)] = (`${ct} `).trim().replace('\r\n', '')
        }
      })
    })
  })
}

const write = () => {
  Object.keys(jsonData).forEach(key => {
    fs.writeFileSync(path.join(__dirname, '../src/lang', `${key}.json`), JSON.stringify(jsonData[key], null, 2))
  })
}

const start = () => {
  initJsonData()
  release(intl)
  write()
}

start()
