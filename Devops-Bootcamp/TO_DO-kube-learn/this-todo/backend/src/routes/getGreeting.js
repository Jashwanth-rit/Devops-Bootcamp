const GREETING = 'Hello world!-1';

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING,
    });
};
