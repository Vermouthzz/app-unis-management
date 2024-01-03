// const routeList = require('./src/hooks/useRouteLsit')

let p = '/online'

console.log(routeList.forEach(item => {
  console.log(Object.values(item).includes(p));
}));