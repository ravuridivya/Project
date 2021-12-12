const { uid } = require('../helpers')
const { db, creds } = require('../config')
const fetch = require('node-fetch')
const createCsvWriter = require('csv-writer').createObjectCsvWriter

const addUser = async (req, res) => {
  const { name, email, gender, status } = req.body

  let response = await fetch(`https://gorest.co.in/public-api/users`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${creds.accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, name, gender, status })
  })

  response = await response.json()

  console.log(response)

  if (response) {
    if (response.code === 201) {
      db.firestore()
        .collection('Users')
        .add(response.data)
        .then(addedUser => {
          addedUser.update({ uid: addedUser.id }).then(() => {
            res.json({ success: true })
          })
        })
    } else {
      res.json({ success: false, error: response.data })
    }
  }

  return res
}

const getAllUser = (req, res) => {
  db.firestore()
    .collection('Users')
    .get()
    .then(users => {
      let tempUsers = []
      users.docs.forEach(doc => {
        tempUsers.push({
          name: doc.data().name,
          email: doc.data().email,
          gender: doc.data().gender,
          status: doc.data().status,
          uid: doc.data().uid
        })
      })
      res.json({ success: true, data: tempUsers })
    })
  return res
}

const updateUser = (req, res) => {
  const { uid } = req.body
  db.firestore()
    .collection('Users')
    .doc(uid)
    .update({
      ...req.body
    })
    .then(() => {
      res.json({ success: true })
    })
  return res
}

module.exports = {
  addUser,
  getAllUser,
  updateUser
}