/// <reference path="../../../references.d.ts" />

module capsize.viewcontrols {
	'use strict';

	export class ManagePostViewControl extends BaseViewControl {
		title = 'Blog - Manage';
		templateUrl = 'app/viewcontrols/blog/manage/manage.viewcontrol.html';

		constructor(private postsRepository: repositories.PostsRepository) {
		    super();
		}

		context = {
			post: <models.IPost>null
		};

		navigatedTo(id?: string) {

		}
	}

	plat.register.viewControl('managePostViewControl', ManagePostViewControl, [
		repositories.PostsRepository
	], ['posts/new', 'posts/:id/edit']);
}