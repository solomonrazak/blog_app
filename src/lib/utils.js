const {default : mongoose } = require('mongoose')

// since we are in development mode whenever we refresh our application it is going to create a new connection
// to prevent this we have to check if we have the connection or not 
// if we have we are going to return an existion connection if we dont we are going to create a new one.

const connection = {};
export const connectToDb = async () => {
    try {
if(connection.isConnected){
    console.log('using existion connection');
    return;
}
const db = await mongoose.connect(process.env.MONGO);
connection.isConnected = db.connections[0].readyState; 
        
      } catch (error) {
        console.log(error)
        throw new Error('Error connecting to database')
      }
}