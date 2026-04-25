const MONGODB_URI = 'mongodb+srv://trung96ecvn_db_user:x2NDfYPm5mOREBaC@cluster0.if0jtnf.mongodb.net/?appName=Cluster0'
const DATABASE_NAME = 'funny-database'
import { MongoClient, ServerApiVersion } from "mongodb"
// khởi tạo một đối tượng funnyDataBaseInstance ban đầu là null (Vì chúng ta chưa connect)
let funnyDataBaseInstance = null
//Khởi tạo một đối tượng dùng để kết nối tới mongodb
const mongoClientInstance = new MongoClient(MONGODB_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
})

export const CONNECT_DB = async () => {
    // gọi kết nối tới mongodb atlas với URI đã khai báo
    await mongoClientInstance.connect()
    // kết nối thành công thì lấy ra database theo tên rồi gán ngược lại vào biến funnyDataBaseInstance
    funnyDataBaseInstance = mongoClientInstance.db(DATABASE_NAME)
}

export const GET_DB = () => {
    if (!funnyDataBaseInstance) throw new Error('Must connect to database first!')
    return funnyDataBaseInstance
}