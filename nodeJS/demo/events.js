const EventEmitter = require('events')
 
// const emitter = new EventEmitter()

// emitter.on('anything', (data) => {
//   console.log('ON:anything',data)
// })

// emitter.emit('anything', { a: 1 })
// emitter.emit('anything', { a: 3 })

// setTimeout(() => {
//   emitter.emit('anything', { a:5})
// }, 2000)


class Dispatcher extends EventEmitter {
    subscribe(eventName, cb) {
      console.log('[subscribe...]')
      this.on(eventName, cb)
  }
  dispatch(eventName, data) {
    console.log('[dispatch...]')
    this.emit(eventName, data)
  }
}

const dis = new Dispatcher();
dis.subscribe("aa", data => {
  console.log('ON:aa',data)
})
 dis.dispatch('aa',{aa:22})