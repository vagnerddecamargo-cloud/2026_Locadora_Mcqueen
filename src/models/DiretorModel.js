const connection = require("../database/connection")

const DiretorModel = {
    async findAll() {
        const result = await connection.raw("SELECT * FROM diretor")

        return result
    },

    async create(data) {
        const { nome } = data

        const result = await connection.raw(
            "INSERT INTO diretor (nome) VALUES (?)",
            [ nome ]
        )

        return result
    }
}

module.exports = DiretorModel