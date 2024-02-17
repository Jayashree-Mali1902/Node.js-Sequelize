module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define('Book', {
        name: DataTypes.STRING,
        author_id: DataTypes.INTEGER // Use INTEGER instead of INT
    });
 
    Book.associate = (models) => {
        // Define associations
        Book.belongsTo(models.Author, {
            foreignKey: 'author_id' // Foreign key in the Book table referencing the Author table
        });
    };
 
    return Book;
};