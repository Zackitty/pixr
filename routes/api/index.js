const router = require('express').Router();

const routes = ['users', 'session', 'feed', 'upload', 'register'];

for (let route of routes) {
  router.use(`/${route}`, require(`./${route}`));
}

module.exports = router;
