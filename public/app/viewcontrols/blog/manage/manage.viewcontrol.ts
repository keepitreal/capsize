/// <reference path="../../../references.d.ts" />

module capsize.viewcontrols {
	'use strict';

	export class ManagePostViewControl extends BaseViewControl {
		title = 'Blog - Manage';
		templateUrl = 'app/viewcontrols/blog/manage/manage.viewcontrol.html';
		editMode = false;

		constructor(private postsRepository: repositories.PostsRepository) {
		    super();
		}

		context = {
			post: <models.IPost>{
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
		repositories.PostsRepository
	], ['admin/posts/new', 'admin/posts/:id/edit']);
}