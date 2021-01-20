const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Creating a schema, sort of like working with an ORM
const MessageSchema = new Schema({
	name: {
		type: String,
		required: [true, 'Name field is required.']
    },
    city: {
		type: String,
		required: [true, 'Body field is required.']
    },
    type: {
		type: String,
		required: [true, 'Body field is required.']
	},
	reference: {
		type: String,
		required: [true, 'Body field is required.']
	}
})

// Creating a table within database with the defined schema
const Message = mongoose.model('message', MessageSchema)
/*firt argument:the singular name of the collection 
that will be created for the model */
/*second argument:the schema wish to use in creating the model*/

// Exporting table for querying and mutating(變異)
module.exports = Message
