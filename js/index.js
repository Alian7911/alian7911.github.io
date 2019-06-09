"use strict";
var userJson;
var userReposJson;
var GithubLoader;
(function (GithubLoader) {
    function fetchUser() {
        $.ajax({
            url: 'https://api.github.com/users/Alian7911',
            method: 'GET'
        }).done(function (data) {
            userJson = data;
            loadUserInfo();
            fetchUserRepos();
        });
    }
    GithubLoader.fetchUser = fetchUser;
    function loadUserInfo() {
        $("#user-info").removeAttr("hidden");
        $("#user-avatar").attr("src", userJson.avatar_url);
        $("#user-login").text(userJson.login);
        $("#user-name").text(userJson.name);
        $("#user-followers").text(userJson.followers + " Follower" + (userJson.followers == 1 ? "" : "s"));
        $("#user-following").text(userJson.following + " Following");
        if (userJson.bio != null)
            $("#user-bio").text(userJson.bio).removeAttr("hidden");
        if (userJson.company != null)
            $("#user-company").text(userJson.company).removeAttr("hidden");
        if (userJson.location != null)
            $("#user-location").text(userJson.location).removeAttr("hidden");
        if (userJson.email != null)
            $("#user-email").text(userJson.email).removeAttr("hidden");
    }
    GithubLoader.loadUserInfo = loadUserInfo;
    function fetchUserRepos() {
        $.ajax({
            url: userJson.repos_url,
            method: 'GET'
        }).done(function (data) {
            userReposJson = data;
            loadUserRepos();
        });
    }
    GithubLoader.fetchUserRepos = fetchUserRepos;
    function loadUserRepos() {
        $.each(userReposJson, function (key, elem) {
            console.log(elem);
            var col = $("<div/>").addClass("col-sm d-flex");
            var shadowCont = $("<div/>").addClass("repo sh-shadow d-flex flex-fill m-2 p-2 flex-column");
            var headerCont = $("<div/>").addClass("d-flex flex-row border-bottom border-glow");
            var repoLink = $("<a/>").addClass("repo-link").attr("href", elem.html_url).text(elem.name.includes(".") ? elem.name.split(".").join("-") : elem.name);
            var repoLang = $("<div/>").addClass("repo-language ml-auto").text(elem.language);
            var repoDesc = $("<div/>").addClass("repo-desc").text(elem.description != null ? elem.description : "No description is provided.");
            col.append(shadowCont.append(headerCont.append(repoLink).append(repoLang)).append(repoDesc));
            col.appendTo($("#repo-container"));
        });
    }
    GithubLoader.loadUserRepos = loadUserRepos;
})(GithubLoader || (GithubLoader = {}));
$(document).ready(function () {
    GithubLoader.fetchUser();
});
//# sourceMappingURL=index.js.map