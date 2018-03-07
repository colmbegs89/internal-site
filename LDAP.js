'use strict'
var ldap = require('ldapjs')

// const username = process.env.SYS_ACCOUNT_NAME
// const password = process.env.SYS_ACCOUNT_PASS

var LDAPAPI = function () {
  this.client = ldap.createClient({
    url: ''
  })
  this.username = ''
  // this.username = 'uid=colm.begley,ou=users,o=DerryStrabane.com'

  this.password = ''
  this.domainString = ''
}

// function GetOpts (NTID) {
//   return {
//     filter: '(&(objectClass=user)(samaccountname=' + NTID + '))',
//     scope: 'sub'
//   }
// }

// LDAPAPI.prototype.authenticate = function (NTID) {
//   var that = this
//   var promise = new Promise(function (resolve, reject) {
//     that.client.bind(that.username, that.password, function (err) {
//       if (err) {
//         console.error('SMART_SERVE - LDAP.authenticate.client.bind', err.toString())
//         that.client.unbind()
//         return reject(err)
//       }
//       that.client.search(that.domainString, GetOpts(NTID), function (err, res) {
//         res.on('searchEntry', function (entry) {
//           return resolve(true)
//         })
//         res.on('error', function (error) {
//           console.error(err)
//           console.error('SMART_SERVE - LDAP.authenticate.client.res.on', error.toString())
//           that.client.unbind()
//           return reject(false)
//         })
//         res.on('end', function () {
//           that.client.unbind()
//           return reject(false)
//         })
//       })
//     })
//   })
//   return promise
// }

LDAPAPI.prototype.getInfo = function (NTID) {
  var that = this
  return new Promise(function (resolve, reject) {
    that.client.bind( that.username, that.password,function (err) {
      if (err) {
        console.error('SMART_SERVE - LDAP.getInfo.client.bind', err.toString())
        that.client.unbind()
        return reject(err)
      }
      that.client.search(that.domainString,  function (err, res) {
        res.on('searchEntry', function (entry) {
          return resolve(entry.object)
        })
        res.on('error', function (error) {
          console.error(err)
          console.error('SMART_SERVE - LDAP.getInfo.client.res.on', error.toString())
          that.client.unbind()
          return reject(false)
        })
        res.on('end', function () {
          that.client.unbind()
          return reject({})
        })
      })
    })
  })
}
// LDAPAPI.prototype.getInfo = function (NTID) {
//   var that = this
//   return new Promise(function (resolve, reject) {
//     that.client.bind(that.username, that.password, function (err) {
//       if (err) {
//         console.error('SMART_SERVE - LDAP.getInfo.client.bind', err.toString())
//         that.client.unbind()
//         return reject(err)
//       }
//       that.client.search(that.domainString, GetOpts(NTID), function (err, res) {
//         res.on('searchEntry', function (entry) {
//           return resolve(entry.object)
//         })
//         res.on('error', function (error) {
//           console.error(err)
//           console.error('SMART_SERVE - LDAP.getInfo.client.res.on', error.toString())
//           that.client.unbind()
//           return reject(false)
//         })
//         res.on('end', function () {
//           that.client.unbind()
//           return reject({})
//         })
//       })
//     })
//   })
// }

// LDAPAPI.prototype.getLdapUserDetails = function (searchParam) {
//   var that = this
//   var manager = searchParam.replace(/\\/, '\\\\')
//   var opts = {
//     filter: '(&(objectClass=user)(distinguishedName=' + manager + '))',
//     scope: 'sub'
//   }
//   return new Promise(function (resolve, reject) {
//     that.client.bind(that.username, that.password, function (err) {
//       if (err) {
//         console.error('SMART_SERVE - LDAP.getLdapUserDetails.client.bind', err.toString())
//         that.client.unbind()
//         return reject(err)
//       }
//       that.client.search(that.domainString, opts, function (err, res) {
//         res.on('searchEntry', function (entry) {
//           that.client.unbind()
//           return resolve(entry.object)
//         })
//         res.on('error', function (error) {
//           console.error('SMART_SERVE - LDAP.getLdapUserDetails.client.res.on', error.toString() + ' : ' + err)
//           that.client.unbind()
//           return reject(false)
//         })
//         res.on('end', () => {
//           that.client.unbind()
//           return reject('DN Not Found')
//         })
//       })
//     })
//   })
// }

// LDAPAPI.prototype.getSecurityGroups = function (NTID) {
//   const opts = GetOpts(NTID)
//   opts['attributes'] = ['memberOf']

//   var that = this
//   return new Promise((resolve, reject) => {
//     that.client.bind(that.username, that.password, (err) => {
//       if (err) {
//         console.error('SMART_SERVE - LDAP.getSecurityGroups.client.bind', err.toString())
//         that.client.unbind()
//         return reject(err)
//       }
//       that.client.search(that.domainString, opts, (err, res) => {
//         res.on('searchEntry', (entry) => {
//           return resolve(entry.object.memberOf)
//         })
//         res.on('error', function (error) {
//           console.error('SMART_SERVE - LDAP.getSecurityGroups.client.res.on', error.toString() + ' : ' + err)
//           that.client.unbind()
//           return reject(false)
//         })
//         res.on('end', () => {
//           that.client.unbind()
//           return reject('Invalid User')
//         })
//       })
//     })
//   })
// }

// LDAPAPI.prototype.getSecurityGroupInfo = function (groupName) {
//   var opts = {
//     filter: '(&(objectClass=group)(distinguishedName=' + groupName + '))',
//     scope: 'sub'
//   }
//   opts.attributes = ['description']

//   var that = this

//   return new Promise((resolve, reject) => {
//     that.client.bind(that.username, that.password, (err) => {
//       if (err) {
//         console.error('SMART_SERVE - LDAP.getSecurityGroupInfo.client.bind', err.toString())
//         that.client.unbind()
//         return reject(err)
//       }
//       that.client.search(that.domainString, opts, (err, res) => {
//         res.on('searchEntry', (entry) => {
//           return resolve(entry.object)
//         })
//         res.on('error', function (error) {
//           console.error('SMART_SERVE - LDAP.getSecurityGroupInfo.client.res.on', error.toString() + ' : ' + err)
//           that.client.unbind()
//           return reject(false)
//         })
//         res.on('end', () => {
//           that.client.unbind()
//           return reject('Invalid group name')
//         })
//       })
//     })
//   })
// }
module.exports = LDAPAPI
