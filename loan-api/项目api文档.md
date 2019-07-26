### 用户注册

新用户注册个人信息

```
url
  /api/v1/reg
method
  post
params
  userName    用户名
  password    密码
result
  成功
    {
      status: 'success',
      info: '用户注册成功'
    }
  失败
    {
      status: 'error',
      info: '失败的提示消息内容'
    }
```

### 用户登录

```
url
  /api/v1/login
metod
  post
params
  userName    用户名
  password    密码
result
  成功
  {
    status: 'success',
    info: '用户登录成功'
  }

  失败
  {
    status: 'error',
    info: '失败原因'
  }
```



### 获取贷款信息

1. 获取全部用户贷款信息

```
url
  /api/v1/findloanall
method
  post
params
  name    名字(模糊匹配)
result
  {
    status: 'success',
    products
  }
```

2. 获取单一用户贷款信息

```
url
  /api/v1/findloan
method
  get
params
  name          名字
  
result
  成功
  {
    status: 'success',
    info: {
      result
    }
  }
  失败{
    status:'error',
    info:'没有这个人的信息'
  }
```

3. 用户查看个人贷款信息

```
url
  /api/v1/userfind
method
  post
params
  flag:'用户标识'
result
  成功
  {
    status: 'success',
    result
  }
  失败
  {
    status:'error',
    info:'没有这个人的信息'
  }
```

4. 用户信曾贷款

```
url
  /api/v1/uploan
method
  post
params
  name: 姓名,
  price: 贷款金额,
  phone: 联系方式,
  loantime: 贷款时间,
  address: 家庭住址,
  flag: 用户标识,
  zhtai: 贷款状态
result
  成功
  {
    status: 'success',
    info: '添加成功'
  }
  失败
  {
    status: 'error',
    info: '添加失败'
  }
```
5. 修改贷款

```
url
  /api/v1/gailoan
method
  post
params
  _id:贷款id
  name: 姓名,
  price: 贷款金额,
  phone: 联系方式,
  loantime: 贷款时间,
  address: 家庭住址,
result
  成功
  {
    status:'success',
    info:'修改成功'
  }
    失败  
  {
    status:'error',
    info:'修改失败'
  }
```
6. 管理员删除贷款

```
url
  /api/v1/deleteloan
method
  post
params
  _id:贷款id
result
  成功
  {
    status:'success',
    info:'删除成功'
  }
    失败  
  {
    status:'error',
    info:'删除失败'
  }
```
7. 获取用户个人信息

```
url
  /api/v1/user
method
  post
params
  flag:用户标识
result
  {
    status:'success',
    info:{
      sele
    }
  }
```
8. 添加与修改用户个人信息

```
url
  /api/v1/tjuser
method
  post
params
有
  flag: 用户标识
则修改
  name: 姓名
  phone: 电话,
  sex: 性别,
  number: 身份证号,
  email: 邮箱,
  address: 家庭住址,
  age: 年龄

无
  flag: 用户标识
则添加
  name: 姓名
  phone: 电话,
  sex: 性别,
  number: 身份证号,
  email: 邮箱,
  address: 家庭住址,
  age: 年龄
result
  成功
  {
    status:'success',
    info:'修改成功'
  }
  {
    status:'success',
    info:'添加成功'
  }
  失败
  {
    status:'error',
    info:'修改失败'
  }
  {
    status:'error',
    info:'添加失败'
  }
```
9. 管理员新增系统消息

```
url
  /api/v1/xztab
method
  post
params
  date:日期,
  title:标题,
  content:内容
result
  成功
  {
    status:'success',
    info:'添加成功'
  }
  失败
  {
    status:'error',
    info:'添加失败'
  }
```
10. 消息查询

```
url
  /api/v1/xztab
method
  get
params
 
result
  成功
  {
    status:'success',
    result
  }
  失败
  {
    status:'error',
    info:'出错了'
  }
```
11. 查看消息内容
```
url
  /api/vi/findcontent
method
  post
params
  _id:消息id
result
  成功
  {
    status:'success',
    result
  }
  失败
  {
    status:'error',
    info:'出错了'
  }
```