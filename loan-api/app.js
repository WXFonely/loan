const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));


app.get('/', (req, res) => {
  res.json({
    status: 'success',
    info: 'api is ok!'
  })
})

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

app.use('/api/v1', require('./api/v1/auth'));
app.use('/api/v1/admin', require('./api/v1/auth'));
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`server is running on ${port}`)
})