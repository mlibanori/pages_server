module.exports = {
    "development": {
        "database": "pages",
        "username": "postgres",
        "password": "password",
        params: {
            "host": "localhost",
            "dialect": "postgres",
            "define": {
                underscored: true,
                underscoredAll: true,
                paranoid: true
            }
        }
    }
};
