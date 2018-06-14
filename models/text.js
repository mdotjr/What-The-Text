module.exports = (sequelize, DataTypes) => {
    const Text =  sequelize.define('Text', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },image: {
            type: DataTypes.BLOB,
            allowNull: false,
            validate: { notEmpty: true }
        },caption: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notEmpty: true }
        },ew: {
            type: DataTypes.BOOLEAN,
            default: 0
        },bff: {
            type: DataTypes.BOOLEAN,
            default: 0
        },lol: {
            type: DataTypes.BOOLEAN,
            default: 0
        },nsfw: {
            type: DataTypes.BOOLEAN,
            default: 0
        },fail: {
            type: DataTypes.BOOLEAN,
            default: 0
        },wtfam: {
            type: DataTypes.BOOLEAN,
            default: 0
        },userId: {
            type: DataTypes.INTEGER,
            references: { model: User, key: 'id' },
            allowNull: false
        },
    },
    {
        freezeTableName: true,
        tableName: 'text_tbl',
    });

    Text.associate = (models) => {
        Text.hasMany(models.Comment, { foreignKey: 'textId', sourceKey: 'id' })
        // hasMany association: foreign key (textId) stored on target model (Comment)
    };
    return Text
}
