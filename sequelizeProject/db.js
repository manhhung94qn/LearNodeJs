const Sequelize = require('sequelize');

const db = new Sequelize({
    database: 'myDB',
    username: 'postgres',
    password: 'hung764119P',
    host: 'localhost',
    port: '5432',
    dialect: 'postgres',
    dialectOptions: {
        ssl: false
    },
    define: {
        freezeTableName: true,
    }
    
});
db.authenticate()
.then(()=>console.log('Ket noi thanh cong'))
.catch(err=>console.log(err.message));

const user = db.define('user', {
    username: Sequelize.STRING,
    password: Sequelize.STRING
});
// db.sync();
// user.create({
//     username: 'ti',
//     password: '123'
// }).then(user=>{console.log(user);
// })

user.findAll({raw: true}).then(user=>console.log(user));