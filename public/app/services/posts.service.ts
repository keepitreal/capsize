module platynem.services {
    'use strict';

    export class PostsService extends BaseService implements IPostsService {
        create(post: models.IPost): plat.async.IThenable<models.IPost> {
            return this._http({
                url: '/posts',
                method: 'POST',
                data: post
            });
        }

        getOne(id: string): plat.async.IThenable<models.IPost> {
            return this._http({
                url: '/posts/' + id,
                method: 'GET'
            });
        }

        getAll(): plat.async.IThenable<Array<models.IPost>> {
            return this._http({
                url: '/posts',
                method: 'GET'
            });
        }

        destroy(postid: string): plat.async.IThenable<void> {
            return this._http({
                url: '/posts/' + postid,
                method: 'DELETE'
            });
        }

        update(post: models.IPost): plat.async.IThenable<void> {
            return this._http({
                url: '/posts/' + post._id + '/edit',
                method: 'PUT',
                data: post
            });
        }
    }

    export interface IPostsService {
        /*
         * createPost
         * Creates a new blog post
         * @param {object} post: an object containing post content, title, etc
         * @return {object} response: returns a promise for the created post
         */
        create(post: models.IPost): plat.async.IThenable<models.IPost>;

        /*
         * findOne
         * Finds a single blog post
         * @param {string} id: the id for the requested post
         * @return {object} postPromise: returns a promise for the requested post
         */
        getOne(id: string): plat.async.IThenable<models.IPost>;

        /*
         * findAll
         * Finds all blog posts
         * @return {object} postsPromise: returns a promise for all posts
         */
        getAll(): plat.async.IThenable<Array<models.IPost>>;

        /*
         * destroy
         * Deletes a blog post by id
         * @param {string} id: the id for the post to be deleted
         */
        destroy(postid: string): plat.async.IThenable<void>;

        /*
         * update
         * Updates a blog post by id
         * @param {string} id: the id for the post to be updated
         */
        update(post: models.IPost): plat.async.IThenable<void>;
    }

    plat.register.injectable('postsService', PostsService);
}
