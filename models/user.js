module.exports = (sequelize, DataTypes) => {
    var User =  sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: { notEmpty: true }
        },username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notEmpty: true }
        },password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notEmpty: true }
        },logged_in: {
            type: DataTypes.BOOLEAN,
            default: 0
        }
    },
    {
        freezeTableName: true,
        tableName: 'user_tbl',
    }
);
    User.associate = function(models) {
        User.hasMany(models.Comment, { foreignKey: { allowNull: false } })
    }
}