/**
 * logout operation
 * status: passed
 */

module.exports = async function (req, res) {
  var redisClient = redisServer.createClient(redisCfg)
  var out = {
    status: '',
    msg: ''
  }
  let idExisting
  await redisClient.existsAsync('id:' + req.body.sessionId).then(function (reply) {
    idExisting = reply
    // console.log('get usr id exisitence status: ' + reply)
  }).catch(function (err) {
    logger.error('get usr id exisitence error: ' + err)
  })
  if (idExisting) {
    // obtain usr account
    var account = ''
    await redisClient.getAsync('id:' + req.body.sessionId).then(function (reply) {
      account = reply
    }).catch(function (err) {
      logger.error('get usr account name error: ' + err)
    })
    await redisClient.delAsync('id:' + req.body.sessionId).then(function (reply) {
      // console.log('delete usr id status: ' + reply)
    }).catch(function (err) {
      logger.error('delete usr id error: ' + err)
    })
    logger.action(account + ' logged out.')
    out.status = 724
    out.msg = statusCode.success['724']
  } else {
    out.status = 827
    out.msg = statusCode.illegal['827']
  }
  if (out.status !== 724) {
    logger.warn('illegal logging out from ' + req.ip)
  }
  await redisClient.quitAsync()
  res.send(out)
}
