'use strict';

module.exports = {

    up: function(queryInterface, Sequelize) {

        queryInterface.createTable('tasks', {
            id: {
                type:           Sequelize.INTEGER,
                primaryKey:     true,
                autoIncrement:  true
            },
            userId: {
                type:           Sequelize.INTEGER,
                references: {
                    model:      'users',
                    key:        'id'
                },
                onUpdate:       'CASCADE',
                onDelete:       'CASCADE'
            },
            name:               Sequelize.STRING,
            description:        Sequelize.STRING,
            createdAt: {
                type:           Sequelize.DATE
            },
            updatedAt: {
                type:           Sequelize.DATE
            }
        })
    },

    down: function(queryInterface, Sequelize) {

        return queryInterface.dropTable('tasks');

    }
};
