const express = require('express');
const {
  User
} = require('../../models');
const {
  Loan
} = require('../../models');
const {
  Userinfo
} = require('../../models');
const {
  Tab
} = require('../../models');
const router = express.Router();

//注册接口
router.post('/reg', async (req, res) => {
  if (!req.body.userName) {
    res.json({
      status: 'error',
      info: '用户名不能为空'
    })
    return;
  }
  const userCount = await User.countDocuments({
    userName: req.body.userName
  })
  if (userCount > 0) {
    res.json({
      status: 'error',
      info: '用户名已存在'
    })
  } else {
    try {
      const user = new User(req.body);
      await user.save()
      res.json({
        status: 'success',
        info: '注册成功',
      })
    } catch (err) {
      res.json({
        status: 'error',
        info: err
      })
    }
  }
})
//登录接口
router.post('/login', async (req, res) => {
  if (!req.body.userName) {
    res.json({
      status: 'error',
      info: '用户名不能为空',
    })
    return;
  }
  try {
    const name1 = await User.findOne({
      userName: req.body.userName
    });
    if (!name1) {
      res.json({
        status: 'error',
        info: '用户名不存在',
      })
      return;
    }
    if (name1.password == req.body.password) {
      res.json({
        status: 'success',
        info: '登陆成功',
        token: name1.id,
      })
    } else {
      res.json({
        status: 'error',
        info: "登陆失败",
      })
      return
    }
  } catch (err) {
    res.json({
      status: 'error',
      info: '密码不正确',
    })
  }
})
//贷款管理
//获取全部用户贷款信息
router.post('/findloanall', async (req, res) => {
  if (req.body.name == "") {
    const page = req.body.page || 1;
    const products = await Loan.find({}).skip((page - 1) * 5).limit(5);
    res.json({
      status: 'success',
      products
    })
    return
  } else {
    const page = req.body.page || 1;
    const products = await Loan.find({
      name: new RegExp(req.body.name)
    }).skip((page - 1) * 5).limit(5);
    res.json({
      status: 'success',
      products
    })
    return
  }
});
//获取一个用户贷款信息
router.get('/findloan', async (req, res) => {
  const con = await Loan.countDocuments({
    name: new RegExp(req.query.name)
  });
  if (con) {
    const result = await Loan.find({
      name: new RegExp(req.query.name)
    });
    res.json({
      status: 'success',
      info: {
        result
      },
    })
  } else {
    res.json({
      status: 'error',
      info: '没有这个人的信息',
    })
  }
});
//用户查看个人贷款
router.post('/userfind', async (req, res) => {
  const con = await Loan.countDocuments({
    flag: req.body.flag
  });
  if (con) {
    const result = await Loan.find({
      flag: req.body.flag
    });
    res.json({
      status: 'success',
      result
    })
  } else {
    res.json({
      status: 'error',
      info: '没有这个人的信息',
    })
  }
});
//贷款新增
router.post('/uploan', async (req, res) => {
  try {
    const loan = new Loan(req.body);
    await loan.save()
    res.json({
      status: 'success',
      info: '添加成功',
    })
  } catch (err) {
    res.json({
      status: 'error',
      info: err
    })
  }
});

//贷款修改
router.post('/gailoan', async (req, res) => {
  if (!req.body.id) {
    res.json({
      status: 'error',
      info: 'id是空的',
    })
    return;
  }
  const con = await Loan.countDocuments({
    _id: req.body.id
  });
  if (con) {
    try {
      await Loan.findOneAndUpdate({
        _id: req.body.id
      }, {
        name: req.body.name,
        phone: req.body.phone,
        price: req.body.price,
        address: req.body.address,
        zhtai: req.body.zhtai
      });
      res.json({
        status: 'success',
        info: '修改成功',
      })
    } catch (err) {
      res.json({
        status: 'error',
        info: err
      })
    }
  } else {
    res.json({
      status: 'error',
      info: "id不存在"
    })
  }
});
//删除贷款
router.post('/deleteloan', async (req, res) => {
  if (!req.body.id) {
    res.json({
      status: 'error',
      info: 'id是空的',
    })
    return;
  }
  const con = await Loan.countDocuments({
    _id: req.body.id
  });
  if (con) {
    try {
      await Loan.findOneAndDelete({
        _id: req.body.id
      });
      res.json({
        status: 'success',
        info: '删除成功',
      })
    } catch (err) {
      res.json({
        status: 'error',
        info: err,
      })
    }
  } else {
    res.json({
      status: 'error',
      info: "id不存在"
    })
  }
});
//用户信息查看
router.post('/user', async (req, res) => {
  const sele = await Userinfo.find({
    flag: req.body.flag
  });
  res.json({
    status: 'success',
    info: {
      sele
    },
  })
});
// //用户信息修改
// router.put('/user/:id', async (req, res) => {
//   if (!req.params.id) {
//     res.json({
//       status: 'error',
//       info: 'id是空的',
//     })
//     return;
//   }
//   const con = await Userinfo.countDocuments({
//     _id: req.params.id
//   });
//   if (con) {

//   } else {
//     res.json({
//       status: 'error',
//       info: "id不存在"
//     })
//   }
// });
//用户信息添加
router.post('/tjuser', async (req, res) => {
  const con = await Userinfo.countDocuments({
    flag: req.body.flag
  });
  if (con) {
    try {
      await Userinfo.findOneAndUpdate({
        flag: req.body.flag
      }, {
        name: req.body.name,
        phone: req.body.phone,
        sex: req.body.sex,
        number: req.body.number,
        email: req.body.email,
        address: req.body.address,
        age: req.body.age
      });
      res.json({
        status: 'success',
        info: '修改成功',
      })
      return
    } catch (err) {
      res.json({
        status: 'error',
        info: err
      })
      return
    }
  } else {
    try {
      const tianjia = new Userinfo(req.body);
      await tianjia.save()
      res.json({
        status: 'success',
        info: '添加成功',
        tianjia
      })
      return
    } catch (err) {
      res.json({
        status: 'error',
        info: err
      })
      return
    }
  }
});
//消息新增
router.post('/xztab', async (req, res) => {
  try {
    const tab = new Tab(req.body);
    await tab.save()
    res.json({
      status: 'success',
      info: '添加成功',
    })
  } catch (err) {
    res.json({
      status: 'error',
      info: err
    })
  }
});
//消息查询
router.get('/findtab', async (req, res) => {
  try {
    const result = await Tab.find({});
    res.json({
      status: 'success',
      result
    })
  } catch {
    res.json({
      status: 'error',
      info: '出错了',
    })
  }
});
//查看内容
router.post('/findcontent', async (req, res) => {
  try {
    const result = await Tab.find({
      _id: req.body.id
    });
    res.json({
      status: 'success',
      result
    })
  } catch {
    res.json({
      status: 'error',
      info: '出错了',
    })
  }
});
module.exports = router;