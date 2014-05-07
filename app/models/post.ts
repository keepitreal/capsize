var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    config = require('../../config/config');

var PostSchema = new Schema({
    title: {
        type: String,
        default: '',
        trim: true
    },
    content: {
        type: String,
        default: '',
        trim: true
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    created: {
        type: Date,
        default: Date.now
    },
    published: {
        type: Boolean
    },
    updated: [],
    tags: [String]
});


/*
 * Validations
 */
PostSchema.path('title').validate(function (title) {
    return title.length;
}, 'Title cannot be blank.');

/*
 * Statics
 */
PostSchema.statics = {
    load: function (id, cb) {
        this.findOne({
            _id: id
        }).populate('user').exec(cb);
    }
};

mongoose.model('Post', PostSchema);