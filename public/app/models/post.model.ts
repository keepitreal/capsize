/// <reference path="../references.d.ts" />

module capsize.models {
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
                var newPost = new Post(post._id, post.title, post.content,
                    post.user, post.created, post.published, post.updated,
                    post.tags);

                newPost.updated.push(Date.now());

                return newPost;
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
            public updated: Array<number>, public tags: Array<string>) {
            if (!updated) {
                this.updated = [];
            }
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
        user: any;
        created: string;
        published: boolean;
        updated: Array<number>;
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
