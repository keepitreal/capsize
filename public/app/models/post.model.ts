module platynem.models {
    'use strict';

    export class Post {
        static createPost(post: any): IPost {
            return new Post(post._id, post.title, post.content,
                post.user, post.created, post.published, post.updated,
                post.tags);
        }

        static update(post: any): IPost {
            post.updated.push(new Date().getTime());

            return new Post(post._id, post.title, post.content,
                post.user, post.created, post.published, post.updated,
                post.tags);
        }

        static getAll(posts: Array<any>) {
            return posts.map(function (post) {
                return Post.createPost(post);
            });
        }

        constructor(public _id: string, public title: string, public content: string,
            public user: any, public created: string, public published: boolean,
            public updated: Array<Date>, public tags: Array<string>) { }
    }

    export interface IPostFactory {
        createPost(post: any): IPost;
        getAll(posts: Array<any>);
        update(post: any): IPost;
    }

    export interface IPost {
        _id: string;
        title: string;
        content: string;
        user: any;
        created: string;
        published: boolean;
        updated: Array<Date>;
        tags: Array<string>;
    }

    export function PostFactory() {
        return Post;
    }

    plat.register.injectable('postFactory', PostFactory, undefined, plat.register.injectable.FACTORY);
}
