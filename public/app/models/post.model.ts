module platynem.models {
    export class Post {
        static createPost(post: any): IPost {
            return Post.__utils.deepExtend({}, post);
        }

        static update(post: any): IPost {
            //if (!Post.__utils.isArray(post.updated)) {
            //    post.updated = [];
            //}
            post.updated.push(new Date().getTime());
            return Post.__utils.deepExtend({}, post);
        }

        static getAll(posts: Array<any>) {
            return posts.map(function (post) {
                return Post.createPost(post);
            });
        }

        private static __utils: plat.IUtils;
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
        plat.Utils
    ], plat.register.injectableType.STATIC);
}