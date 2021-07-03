module.exports = (req, res) =>
{
    res.clearCookie();
    res.redirect('/');
}