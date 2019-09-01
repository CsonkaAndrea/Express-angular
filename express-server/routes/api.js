var express = require('express');
var router = express.Router();
const DataBase = require('../module/dataBase');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('Please set api endpoint.');
});

router.get('/:entity/:id', (req, res, next) => {
    let db = new DataBase(req.params.entity);
    let id = req.params.id || 0;

    db.find(id).then(
        data => res.json(data),
        err => res.json(err)
    );
});
router.get('/:entity', (req, res, next) => {
    let db = new DataBase(req.params.entity);

    db.find().then(
        data => res.json(data),
        err => res.json(err)
    );
});

router.post('/:entity', (req, res, next) => {
    let db = new DataBase(req.params.entity);
    db.add(req.body).then(
        object => res.json(object),
        err => res.json(err)
    );
});

router.put('/:entity/:id', (req, res, next) => {
    let db = new DataBase(req.params.entity);
    res.json(db.putData(req.body, req.params.id));
});


router.delete('/:entity/:id', (req, res, next) => {
    let db = new DataBase(req.params.entity);
    db.remove(req.params.id).then(
        object => res.json(object),
        err => res.json(err)
    );
});

module.exports = router;
