module platynem.models {
    'use strict';

    export class Post {
        private static utils: plat.IUtils;

        static createPost(post: any): IPost {
            if (Post.utils.isObject(post)) {
                return new Post(post._id, post.title, post.content,
                    post.user, post.created, post.published, post.updated,
                    post.tags);
            }
        }

        static update(post: any): IPost {
            if (Post.utils.isObject(post)) {
                post.updated.push(new Date().getTime());

                return new Post(post._id, post.title, post.content,
                    post.user, post.created, post.published, post.updated,
                    post.tags);
            }
        }

        static getAll(posts: Array<any>) {
            if (Post.utils.isArray(posts)) {
                return posts.map(function (post) {
                    return Post.createPost(post);
                });
            }

            return [];
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

    export function PostFactory(utils?: plat.IUtils) {
        (<any>Post).utils = utils;
        return Post;
    }

    plat.register.injectable('postFactory', PostFactory, [
        plat.IUtils
    ], plat.register.injectable.FACTORY);
}
