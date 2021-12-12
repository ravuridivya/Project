const express = require('./express')
const db = require('./db')
const creds = require('./cred')

const config = {
  express,
  db,
  creds
}

module.exports = config
