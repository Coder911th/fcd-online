module.exports = {
  // Порт, на котором будет открыт сервер
  PORT: process.env.PORT || 80,
  // Настройки подключения к базе данных
  DATABASE: {
    user: 'bfwnwmmlfxprzm',
    host: 'ec2-54-246-117-62.eu-west-1.compute.amazonaws.com',
    database: 'd4b5dfi63g51hc',
    password: '731586fb0e1acb56278d4ffdebc1d2ab52cd61fdff34e6304f3520611e87f33e',
    port: 5432,
    ssl: true
  },
  /**
   * Права на доступ к таблицам
   */
  RIGHTS: {
    products: {
      read: ['cashier', 'admin'],
      write: ['admin']
    },
    amount_types: {
      read: ['cashier', 'admin'],
      write: ['admin']
    },
    users: {
      read: ['cashier', 'admin'],
      write: ['admin']
    },
    roles: {
      read: ['cashier', 'admin'],
      write: ['admin']
    }
  }
}
