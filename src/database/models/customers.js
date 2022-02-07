module.exports = (sequelize, Datatypes) => {
  const Customer = sequelize.define('Customer', {
    name: Datatypes.STRING,
    lastname: Datatypes.STRING,
    address: Datatypes.STRING,
    phoneNumber: Datatypes.STRING,
    comments: Datatypes.STRING,
  }, { timestamps: true, underscored: true });

  return Customer;
};