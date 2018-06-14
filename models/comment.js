module.exports = (sequelize, DataTypes) => {
    const Comment =  sequelize.define('Comment', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },comment: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notEmpty: true }
        },userId: {
            type: DataTypes.INTEGER,
            references: { model: User, key: 'id' },
            allowNull: false
        },textId: {
            type: DataTypes.INTEGER,
            references: { model: Text, key: 'id' },
            allowNull: false
        }
    },
    {
        freezeTableName: true,
        tableName: 'comment_tbl',
    });

    return Comment
}