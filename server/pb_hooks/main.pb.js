routerAdd('GET', '/staff-members', (c) => {
  const staff = require('../seed/staff.json')
  return c.json(200, staff)
})