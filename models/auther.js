
module.exports = (sequelize,DataTypes) => {

    const Author = sequelize.define('Author',{

        name: DataTypes.STRING,
        address: DataTypes.STRING,
        contact: DataTypes.STRING,

    });
    
    return Author;
}