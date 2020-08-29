define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.User_URL = 'https://api.github.com/users/Alian7911';
    var User = (function () {
        function User() {
            this.login = "";
            this.id = 0;
            this.node_id = "";
            this.avatar_url = "";
            this.gravatar_url = "";
            this.url = "";
            this.html_url = "";
            this.followers_url = "";
            this.following_url = "";
            this.gists_url = "";
            this.starred_url = "";
            this.subscriptions_url = "";
            this.organizations_url = "";
            this.repos_url = "";
            this.events_url = "";
            this.received_events_url = "";
            this.type = "";
            this.site_admin = false;
            this.name = "";
            this.company = "";
            this.blog = "";
            this.location = "";
            this.email = "";
            this.hireable = "";
            this.bio = "";
            this.twitter_username = "";
            this.public_repos = 0;
            this.public_gists = 0;
            this.followers = 0;
            this.following = 0;
            this.created_at = new Date(Date.now());
            this.updated_at = new Date(Date.now());
        }
        return User;
    }());
    exports.User = User;
    var Repository = (function () {
        function Repository() {
            this.id = 0;
            this.node_id = "";
            this.name = "";
            this.full_name = "";
            this.private = false;
            this.owner = new User;
            this.html_url = "";
            this.description = "";
            this.fork = false;
            this.url = "";
            this.forks_url = "";
            this.keys_url = "";
            this.collaborators_url = "";
            this.teams_url = "";
            this.hooks_url = "";
            this.issue_events_url = "";
            this.events_url = "";
            this.assignees_url = "";
            this.branches_url = "";
            this.tags_url = "";
            this.blobs_url = "";
            this.git_tags_url = "";
            this.git_refs_url = "";
            this.trees_url = "";
            this.statuses_url = "";
            this.languages_url = "";
            this.stargazers_url = "";
            this.contributors_url = "";
            this.subscribers_url = "";
            this.subscription_url = "";
            this.commits_url = "";
            this.git_commits_url = "";
            this.comments_url = "";
            this.issue_comment_url = "";
            this.contents_url = "";
            this.compare_url = "";
            this.merges_url = "";
            this.archive_url = "";
            this.downloads_url = "";
            this.issues_url = "";
            this.pulls_url = "";
            this.milestones_url = "";
            this.notifications_url = "";
            this.labels_url = "";
            this.releases_url = "";
            this.deployments_url = "";
            this.created_at = new Date(Date.now());
            this.updated_at = new Date(Date.now());
            this.pushed_at = new Date(Date.now());
            this.git_url = "";
            this.ssh_url = "";
            this.clone_url = "";
            this.svn_url = "";
            this.homepage = "";
            this.size = 0;
            this.stargazers_count = 0;
            this.watchers_count = 0;
            this.language = "";
            this.has_issues = false;
            this.has_projects = false;
            this.has_downloads = false;
            this.has_wiki = false;
            this.has_pages = false;
            this.forks_count = 0;
            this.mirror_url = "";
            this.archived = false;
            this.disabled = false;
            this.open_issues_count = 0;
            this.license = "";
            this.forks = 0;
            this.open_issues = 0;
            this.watchers = 0;
            this.default_branch = "";
        }
        return Repository;
    }());
    exports.Repository = Repository;
    $(document).ready(function () {
        $.ajax({
            url: exports.User_URL,
            method: 'GET',
        }).done(function (responseData) {
            var user = responseData;
            $('[data-role=real-name]').text(user.name);
        });
    });
});
//# sourceMappingURL=common.js.map