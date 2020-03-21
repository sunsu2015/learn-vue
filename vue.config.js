module.exports = {
    configureWebpack: {
        devServer: {
            before(app) {
                app.use('/api/goods', function (req, res) {
                    res.json({
                        code: 0,
                        list: [
                            {id: 1, name: '全栈', price: 1000},
                            {id: 2, name: 'Python', price: 1000}
                        ] 
                    });
                });
            }
        }
    }
}
