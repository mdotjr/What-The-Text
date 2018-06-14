module.exports = (sequelize, DataTypes) => {
    const User =  sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
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
    });

    User.associate = (models) => {
        User.hasMany(models.Text, { foreignKey: 'userId', sourceKey: 'id' });
        // hasMany association: foreign key (userId) stored on target model (Text)
        User.hasMany(models.Comment, { foreignKey: 'userId', sourceKey: 'id' })
        // hasMany association: foreign key(userId) stored on target model (Comment)
    };
    return User
}


// source.belongsTo(target)
