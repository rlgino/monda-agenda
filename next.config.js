const path = require('path')

module.exports = {
    /* config options here */
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
}