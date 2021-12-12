const {
  express: { BASE_URL, router }
} = require('../config')

const { user } = require('../controllers')

router.post(`/${BASE_URL}/POST/add/user`, user.addUser)

router.get(`/${BASE_URL}/GET/all/user`, user.getAllUser)

router.put(`/${BASE_URL}/PUT/edit/user`, user.updateUser)

module.exports = router