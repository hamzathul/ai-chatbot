import { connect, disconnect } from 'mongoose';
async function connectToDatabase() {
    try {
        await connect(process.env.MONGODB_URL);
    }
    catch (error) {
        console.log(error);
        throw new Error("Cannot connect to MONGODB database");
    }
}
async function disconnectFromDatabase() {
    try {
        await disconnect;
    }
    catch (error) {
        console.log(error);
        throw new Error("Cannot connect to MONGODB database");
    }
}
export { connectToDatabase, disconnectFromDatabase };
//# sourceMappingURL=connection.js.map