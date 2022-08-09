const { isPromiseLike } = require("mongodb/lib/utils")

USERS

    var Schema = mongoose.Schema
    const UserSchema = new Schema({
      firstName: 
      lastName: 
      username:
      email:
      password: encrypted
      phoneNumber: optional
      image: (placeholder)
      {timestamps: true}
    
      module.exports = mongoose.model('Users', usersSchema)
      
      const friendsSchema = new Schema({
       FK  requester: { type: Schema.Types.ObjectId, ref: 'Users'},
       FK  recipient: { type: Schema.Types.ObjectId, ref: 'Users'},
          status: {
              type: Number,
              enums: [
                  0,    //'pending',
                  1,    //'friends'
                ]
            }
        }, {timestamps: true})
        
        //for queries  
    friends: [{ type: Schema.Types.ObjectId,  ref: 'Friends'}] //search in recipient & requester columns

    friends_requests: [{ type: Schema.Types.ObjectId, ref: 'pending'}] //search in recipient column 
  }, {timestamps: true})

    friends_requestsThatIMade: [{ type: Schema.Types.ObjectId , ref: 'pending'}] //search in requester column 
  }, {timestamps: true})

POSTS

Schema 1
post {
    postId - ser
    userID
    message: str
    {timestamps: true}
}

Schema 2
comments {
    commentId - ser 
    postId - FK
    userID - FK
    content
    {timestamps: true}
    
}
Schema 3
Likes
    likeId ser
    postId - FK
    userID - FK