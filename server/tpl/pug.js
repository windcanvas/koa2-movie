module.exports = `
doctype html
html
 head
  meta(charset='utf-8')
  meta(name='viewport', content='with=device-width, initial-scale=1')
  title Koa Server Pug
  link(href='https://cdn.bootcss.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css' ref='stylesheet')
  srcipt(src='https://cdn.bootcss.com/jquery/3.2.0/jquery.min.js')
  srcipt(src='https://cdn.bootcss.com/bootstrap/4.0.0-beta.2/js/bootstrap.bundle.min.js')
body
 .container
   .row
     .col-md-8
       h1 Hi #{you}
       p This is #{me}
     .col-md-4
       p 测试静态 Pug 模板引擎
`