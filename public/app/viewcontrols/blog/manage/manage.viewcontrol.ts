/// <reference path="../../../references.d.ts" />
'use strict';

import plat = require('platypus');
import postModel = require('../../../models/post.model');
import postsRepository = require('../../../repositories/posts.repository');
import baseViewcontrol = require('../../base.viewcontrol');

export class ManagePostViewControl extends baseViewcontrol.BaseViewControl {
	title = 'Blog - Manage';
	templateUrl = 'app/viewcontrols/blog/manage/manage.viewcontrol.html';
	editMode = false;

	constructor(private postsRepository: postsRepository.PostsRepository) {
	    super();
	}

	context = {
		post: <postModel.IPost>{
			title: '',
			content: ''
		}
	};

	navigatedTo(route: plat.web.IRoute<{ id: string; }>) {
		if (this.$utils.isString(route.parameters.id)) {
			this.postsRepository
				.getPost(route.parameters.id)
				.then((post) => {
					this.context.post = post;
					this.editMode = true;
				});
		}
	}

	submit() {
		if (this.editMode) {
			this.postsRepository
				.update(this.context.post)
				.then((result) => {
					console.log(result);
				});
		} else {
			this.postsRepository
				.create(this.context.post)
				.then((result) => {
					console.log(result);
				});
		}
	}
}

plat.register.viewControl('managePostViewControl', ManagePostViewControl, [
	postsRepository.PostsRepository
], ['admin/posts/new', 'admin/posts/:id/edit']);
