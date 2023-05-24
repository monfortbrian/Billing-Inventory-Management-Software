import mysql from 'mysql';
const con = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'extra miles pos system',
  port: 3306,
  connectionLimit: 99,
  //  queueLimit: 0,
  waitForConnection: true,
};

const dbConnect = mysql.createConnection(con);
dbConnect.connect(function (err: string) {
  if (err) throw new Error(err);
  console.log('db connect successufull..');
});

export default dbConnect;
