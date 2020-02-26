const DAO = require("../../lib/dao");
const mySQLWrapper = require("../../lib/mysqlWrapper");

class Post extends DAO {
  /**
   * Overrides TABLE_NAME with this class' backing table at MySQL
   */
  static get TABLE_NAME() {
    return "post";
  }

  /**
   * Returns a post by its ID
   */
  static async getByID(_, { id }) {
    return await this.find(id);
  }

  /**
   * Returns a list of bacons matching the passed fields
   * @param {*} fields - Fields to be matched
   */
  static async findMatching(_, fields) {
    // Returns early with all bacons if no criteria was passed
    if (Object.keys(fields).length === 0) return this.findAll();

    // Find matching bacons
    return this.findByFields({
      fields
    });
  }

  /**
   * Returns a list of posts matching the passed fields
   * @param {*} fields - Fields to be matched
   */
  static async findTeam(_, { fields, rolesId }) {
    // Returns early with all posts if no criteria was passed
    return this.findArmy({ fields, rolesId });
  }

  /**
   * Creates a new post
   */
  static async createEntry(_, { attack, defense, comment = "" }) {
    const connection = await mySQLWrapper.getConnectionFromPool();
    try {
      let _result = await this.insert(connection, {
        data: {
          attack,
          defense,
          comment,
          good: 0,
          bad: 0
        }
      });

      return this.getByID(_, { id: _result.insertId });
    } finally {
      // Releases the connection
      if (connection != null) connection.release();
    }
  }

  /**
   * Updates a post
   */
  static async updateEntry(_, { id, attack, defense, good, bad, comment }) {
    const connection = await mySQLWrapper.getConnectionFromPool();
    try {
      await this.update(connection, {
        id,
        data: {
          attack,
          defense,
          good,
          bad,
          comment
        }
      });

      return this.getByID(_, { id });
    } finally {
      // Releases the connection
      if (connection != null) connection.release();
    }
  }
}

module.exports = Post;
