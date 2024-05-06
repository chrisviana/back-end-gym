import mongoose from "mongoose"


async function connectWithDB() {
	mongoose.connect(process.env.DB_CONNECTION_STRING)

	return mongoose.connection
} 

export default connectWithDB