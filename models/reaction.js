module.exports = (sequelize, DataTypes) => {
    const Reaction =  sequelize.define('Reaction', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },like: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },textId: {
            type: DataTypes.INTEGER,
            references: { model: Text, key: 'id' },
            allowNull: false
        },userId: {
            type: DataTypes.INTEGER,
            references: { model: User, key: 'id' },
            allowNull: false
        },
    },
    {
        freezeTableName: true,
        tableName: 'reaction_tbl',
    });

    return Reaction
}