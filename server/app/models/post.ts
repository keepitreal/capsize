/// <reference path="../../typings/tsd.d.ts" />
import mongoose = require('mongoose');

var Schema = mongoose.Schema,
    PostSchema = new Schema({
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
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        created: {
            type: Date,
            default: Date.now
        },
        published: {
            type: Boolean
        },
        updated: [Date],
        tags: [String]
    });


/*
 * Validations
 */
PostSchema.path('title').validate((title: string): boolean => {
    return title.length > 0;
}, 'Title cannot be blank.');

/*
 * Statics
 */
PostSchema.static('load', function (id: string, cb: (err: any, res: any) => void) {
    (<mongoose.Model<mongoose.Document>>this).findOne({
        _id: id
    }).populate('user').exec(cb);
});

mongoose.model('Post', PostSchema);

export interface IPost {
    title: string;
    content: string;
    user: any;
    created: Date;
    published: boolean;
    updated: Array<Date>;
    tags: Array<string>;
}

export interface IPostDocument extends mongoose.Document, IPost { }

export interface IPostModel extends mongoose.Model<IPostDocument> {
    load(id: string, callback: (err: any, post: IPost) => void): void;
}
