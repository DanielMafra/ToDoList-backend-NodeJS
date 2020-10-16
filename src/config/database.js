module.exports = {
  dialect: 'YOUR_DIALECT', //example: postgres
  host: 'YOUR_HOST', //example: localhost
  username: 'USERNAME_DATABASE',
  password: 'PASSWORD_DATABASE',
  database: 'YOUR_DATABASE', //example: tasklist
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  }
};