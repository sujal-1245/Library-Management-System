import mongoose, {Schema} from "mongoose"
const bookSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    publicationYear:{
        type: Number,
        required: true
    },
    count:{
        type: Number,
        default : 1
    }
}, {timestamps: true})

const Book = mongoose.model("Book", bookSchema)

export default Book