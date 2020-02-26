const DAO = require('../../lib/dao')
const mySQLWrapper = require('../../lib/mysqlWrapper')

class Role extends DAO {

    /**
     * Overrides TABLE_NAME with this class' backing table at MySQL
     */
    static get TABLE_NAME() {
        return 'role'
    }

    /**
     * Returns a role by its ID
     */
    static async getByID(_, {id}) {
        return await this.find(id)
    }

    /**
     * Returns a list of roles matching the passed fields
     * @param {*} fields - Fields to be matched
     */
    static async findMatching(_, fields) {
        // Returns early with all roles if no criteria was passed
        if (Object.keys(fields).length === 0) return this.findAll()
        
        // Find matching roles
        return this.findByFields({
            fields
        })
    }

    /**
     * Creates a new role
     */
    static async createEntry(_, {name, position,index}) {
        const connection = await mySQLWrapper.getConnectionFromPool()
        try {
            let _result = await this.insert(connection, {
                data: {
                    name,
                    position,
                    index
                }
            })

            return this.getByID(_, {id: _result.insertId})
        } finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
    }

    /**
     * Updates a role 
     */
    static async updateEntry(_, {id, name, position, index}) {
        const connection = await mySQLWrapper.getConnectionFromPool()
        try {

            await this.update(connection, {
                id,
                data: {
                    name,
                    position,
                    index
                }
            })

            return this.getByID(_, {id})
        } finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
    }
}

module.exports = Role