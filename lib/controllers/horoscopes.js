const { Router } = require('express');
const { horoscopes } = require('../../data/horoscopes');
const router = Router();

router
  .get('/:id', (req, res) => {
    const horoscope = horoscopes.find(
      (horoscope) => horoscope.id === req.params.id
    );
    res.json(horoscope);
  })
  .get('/', (req, res) => {
    const ids = horoscopes.map((horoscope) => ({
      id: horoscope.id,
      name: horoscope.name,
    }));
    console.log('id param');
    res.json(ids);
  });

module.exports = router;
