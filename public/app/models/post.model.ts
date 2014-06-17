module platynem.models {
    'use strict';

    export class Post {
        private static __utils: plat.IUtils;

        static createPost(post: any): IPost {
            return Post.__utils.deepExtend({}, post);
        }

        static update(post: any): IPost {
            post.updated.push(new Date().getTime());
            return Post.__utils.deepExtend({}, post);
        }

        static getAll(posts: Array<any>) {
            return posts.map(function (post) {
                return Post.createPost(post);
            });
        }
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
        author: string;
        created: string;
        published: boolean;
        updated: string;
        tags: Array<string>;
    }

    export function PostFactory(__utils) {
        (<any>Post).__utils = __utils;
        return Post;
    }

    plat.register.injectable('postFactory', PostFactory, [
        plat.IUtils
    ], plat.register.injectable.FACTORY);
}