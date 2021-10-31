const url = process.env.MONGODB_URL

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}


module.exports = { url, options }