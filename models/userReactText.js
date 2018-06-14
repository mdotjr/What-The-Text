module.exports = (sequelize, DataTypes) => {
    const userReactText = sequelize.define('userReactText', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },userId: {
            type: DataTypes.INTEGER,
            references: { model: User, key: 'id' },
            allowNull: false
        },textId: {
            type: DataTypes.INTEGER,
            references: { model: Text, key: 'id' },
            allowNull: false
        }
    })
}