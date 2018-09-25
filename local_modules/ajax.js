const ajax = (options, success, error) => {
  return new Promise((resolve, reject) => {
    console.log(options)
    if (options.data.email === 'amz@amz.amz' && options.data.password === 'amz') {
      resolve({status: 0, msg: '登录已成功'})
    } else {
      reject({status: 1, msg: '登录失败'})
    }
  })
}

export default ajax
