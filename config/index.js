var configValues = require('./config');

//in production: I must use a hashed user and password in the config file for security reasons
module.exports = {
  getDbConnectionString: () =>{
    return 'mongodb://' + configValues.uname +
    ':' + configValues.pwd +
    '@ds161038.mlab.com:61038/nodetodosample';
  }
}
