module platynem.services {
    export class PostsService implements IPostsService {
        constructor(private http: plat.async.IHttp) { }

        /*
         * createPost
         * Creates a new blog post
         * @param post: an object containing post content, title, etc
         * @return response: returns a promise for the created post
         */
        createPost(post: models.IPost) {
            return this.__http({
                url: '/posts',
                method: 'POST',
                data: post
            });
        }

        /*
         * findOne
         * Finds a single blog post
         * @param id: the id for the requested post
         * @return postPromise: returns a promise for the requested post
         */
        findOne(id: string) {
            return this.__http({
                url: '/posts/' + id,
                method: 'GET'
            });
        }

        /*
         * findAll
         * Finds all blog posts
         * @return postsPromise: returns a promise for all posts
         */
        findAll() {
            return this.__http({
                url: '/posts',
                method: 'GET'
            });
        }

        /*
         * destroy
         * Deletes a blog post by id
         * @param id: the id for the post to be deleted
         */
        destroy(post: models.IPost) {
            return this.__http({
                url: '/posts/' + post._id,
                method: 'DELETE'
            });
        }

        /*
         * update
         * Updates a blog post by id
         * @param id: the id for the post to be updated
         */
        update(post: models.IPost) {
            return this.__http({
                url: '/posts/' + post._id + '/edit',
                method: 'PUT',
                data: post
            });
        }

        /*
         * http
         * Private wrapper method on the http.json method
         */
        private __http(options: plat.async.IHttpConfigStatic) {
            return this.http.json(options);
        }
    }

    export interface IPostsService {
        createPost(post: models.IPost): any;
        findOne(id: string): any;
        findAll(): any;
        destroy(post: models.IPost): any;
        update(post: models.IPost): any;
    }

    plat.register.injectable('postsService', PostsService, [
        plat.async.Http
    ]);
}