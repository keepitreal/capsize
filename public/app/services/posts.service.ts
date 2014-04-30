module platynem.services {
    export class PostsService implements IPostsService {
        constructor(private http: plat.async.IHttp) { }

        /*
         * createPost
         * Creates a new blog post
         * @param post: an object containing post content, title, etc
         * @return response: returns a promise for the created post
         */
        create(post: models.IPost) {
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
        getOne(id: string) {
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
        getAll() {
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
        create(post: models.IPost): any;
        getOne(id: string): any;
        getAll(): any;
        destroy(post: models.IPost): any;
        update(post: models.IPost): any;
    }

    plat.register.injectable('postsService', PostsService, [
        plat.async.Http
    ]);
}