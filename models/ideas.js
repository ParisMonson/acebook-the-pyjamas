const User = require("./user");

    var Schema = mongoose.Schema
    const UserSchema = new Schema({
      firstName: 
      lastName: 
      username:
      email:
      password: encrypted
      phoneNumber: optional
      image: (placeholder)
      friends: [{ type: Schema.Types.ObjectId,  ref: 'Friends'}] //search in recipient & requester columns
      {timestamps: true}

    
    module.exports = mongoose.model('Users', usersSchema)
    
    const friendsSchema = new Schema({
        requester: { type: Schema.Types.ObjectId, ref: 'Users'},
        recipient: { type: Schema.Types.ObjectId, ref: 'Users'},
        status: {
            type: Number,
            enums: [
                0,    //'pending',
                1,    //'friends'
            ]
        }
    }, {timestamps: true})
    
  //for queries  
    friends_requests: [{ type: Schema.Types.ObjectId, ref: 'pending'}] //search in recipient column 
  }, {timestamps: true})

    friends_requestsThatIMade: [{ type: Schema.Types.ObjectId , ref: 'pending'}] //search in requester column 
  }, {timestamps: true})
