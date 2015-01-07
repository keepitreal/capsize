/// <reference path="../references.d.ts" />
'use strict';

import plat = require('platypus');
import postModel = require('../models/post.model');
import baseService = require('./base.service');

export class PostsService extends baseService.BaseService implements IPostsService {
    create(post: postModel.IPost): plat.async.IThenable<postModel.IPost> {
        return this._http({
            url: '/posts',
            method: 'POST',
            data: post
        });
    }

    getOne(id: string): plat.async.IThenable<postModel.IPost> {
        return this._http({
            url: '/posts/' + id,
            method: 'GET'
        });
    }

    getAll(): plat.async.IThenable<Array<postModel.IPost>> {
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

    update(post: postModel.IPost): plat.async.IThenable<void> {
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
    create(post: postModel.IPost): plat.async.IThenable<postModel.IPost>;

    /*
     * findOne
     * Finds a single blog post
     * @param {string} id: the id for the requested post
     * @return {object} postPromise: returns a promise for the requested post
     */
    getOne(id: string): plat.async.IThenable<postModel.IPost>;

    /*
     * findAll
     * Finds all blog posts
     * @return {object} postsPromise: returns a promise for all posts
     */
    getAll(): plat.async.IThenable<Array<postModel.IPost>>;

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
    update(post: postModel.IPost): plat.async.IThenable<void>;
}

plat.register.injectable('postsService', PostsService);

