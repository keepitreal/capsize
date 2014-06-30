module platynem.tests.mock {
    export class PostsService implements services.IPostsService {
        static post: models.IPost = {
            _id: '123',
            title: 'Test',
            content: 'test',
            user: {},
            created: '123',
            published: true,
            updated: [],
            tags: []
        };

        constructor(private Promise: plat.async.IPromise) { }

        create(post: models.IPost): plat.async.IThenable<models.IPost> {
            return this._http(post);
        }

        getOne(id: string): plat.async.IThenable<models.IPost> {
            return this._http(PostsService.post);
        }

        getAll(): plat.async.IThenable<Array<models.IPost>> {
            return this._http([PostsService.post]);
        }

        destroy(postid: string): plat.async.IThenable<void> {
            return this._http();
        }

        update(post: models.IPost): plat.async.IThenable<void> {
            return this._http();
        }

        _http(data?: any) {
            return this.Promise.resolve(data);
        }
    }

    export function postsService() {
        plat.register.injectable('postsService', PostsService, [
            plat.async.IPromise
        ]);
    }
}
