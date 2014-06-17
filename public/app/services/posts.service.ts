module platynem.services {
    'use strict';

    export class PostsService implements IPostsService {
        constructor(private http: plat.async.IHttp) { }

        create(post: models.IPost) {
            return this.__http({
                url: '/posts',
                method: 'POST',
                data: post
            })
                .then<models.IPost>((result) => {
                    return result.response;
                });
        }

        getOne(id: string) {
            return this.__http({
                url: '/posts/' + id,
                method: 'GET'
            })
                .then<models.IPost>((result) => {
                    return result.response;
                });
        }

        getAll() {
            return this.__http({
                url: '/posts',
                method: 'GET'
            })
                .then<Array<models.IPost>>((result) => {
                    return result.response;
                });
        }

        destroy(postid: string) {
            return this.__http({
                url: '/posts/' + postid,
                method: 'DELETE'
            })
                .then((result) => {
                    return result.response;
                });
        }

        update(post: models.IPost) {
            return this.__http({
                url: '/posts/' + post._id + '/edit',
                method: 'PUT',
                data: post
            })
                .then(() => { });
        }

        /*
         * http
         * Private wrapper method on the http.json method
         * @param {object} options: configuration for the http request
         */
        private __http(options: plat.async.IHttpConfig) {
            return this.http.json<any>(options);
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

    plat.register.injectable('postsService', PostsService, [
        plat.async.IHttp
    ]);
}