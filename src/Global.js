import { EventEmitter } from 'events'

const emitter = new EventEmitter()


let events = {}

export default {
  emit(eventName, ...rest) {
    Array.isArray(events[eventName]) && events[eventName].forEach(item => {
      emitter.emit(item, ...rest)
    })
  },
  
  on(eventName, ...rest) {
    if (eventName.indexOf('.') < 0) {
      console.log('on事件名结构为 aaa.bbb [aaa为事件名bbb为作用域]')
      return false
    }

    const name = eventName.split('.')[0]
    if (Array.isArray(events[name])) {
      events[name].push(eventName)
    } else {
      events[name] = [eventName]
    }

    emitter.on(eventName, ...rest)
  },

  off(eventName, ...rest) {
    const name = eventName.split('.')[0]
    events[name].splice(events[name].indexOf(eventName), 1)
    emitter.removeAllListeners(eventName, ...rest)
  }
}
