// tabla general con datos de una publicacion => atomo
import { mongoose } from "mongoose";

const AtomSchema = new mongoose.Schema({
    tt: {
        type: String,
        require: true,  //! si se crea una nueva publicacion y no hay titulo !error
        trim: true
    },
    des: {
        type: String,
        require: true,
        trim: true
    },
    img: {
        EO_url: String,
        EO_public_id: String
    }    

})

export default mongoose.model('Atom', AtomSchema)

// $$BACKEND$$