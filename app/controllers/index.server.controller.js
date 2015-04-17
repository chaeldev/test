exports.render = function(req, res) {
    res.render('index', {
        title: 'Sourcy app',
        user: JSON.stringify(req.user)
    });
};