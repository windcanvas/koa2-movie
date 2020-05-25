const Koa = require('koa')
const app = new Koa()
const { normal } = require('./tpl')

app.use(async (ctx, next) => {
    ctx.type = 'text/html; charset=utf-8'
    ctx.body = normal
})

app.listen(4455)



// const Koa = require('koa')
// const logger = require('koa-logger')
// const session = require('koa-session')
// const app = new Koa()

// app.keys = ['Hi Luke']

// app.use(logger())
// app.use(session(app))

// app.use(ctx => {
//     if (ctx.path === '/favicon.ico') return

//     if (ctx.path === '/') {
//        let n = ctx.session.views
//        ctx.session.views = ++n
//        ctx.body = n + ' 次'
//     } else if (ctx.path == '/hi') {
//         ctx.body = 'Hi Luke'
//     } else {
//         ctx.body = '404'
//     }
// })

// app.listen(2333)