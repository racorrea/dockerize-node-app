const env = process.env;

const config = {
  db: { /* don't expose password or any sensitive info, done only for demo */
    host: env.DB_HOST || 'dataparquesdb.crg7rfevyvh3.us-east-1.rds.amazonaws.com',
    user: env.DB_USER || 'root',
    password: env.DB_PASSWORD || 'yKlUgGnZY6cJ',
    database: env.DB_NAME || 'dataparquesdb',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};


module.exports = config;