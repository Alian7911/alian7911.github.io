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
        $("#user-followers").text(userJson.followers + " Follower" + (userJson.followers == 1 ? "s" : ""));
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
            $("<div/>")
                .addClass("col-sm d-flex")
                .append($("<div/>")
                .addClass("sh-shadow d-flex flex-fill m-2 p-2 flex-column border border-tertiary")
                .append($("<h2/>").html("<a href=\"" + elem.html_url + "\">" + elem.name + "</a>"))
                .append($("<h5/>").text(elem.description).attr("hidden", "hidden"))
                .append($("<h4/>").text(elem.language)))
                .find("h5")
                .removeAttr(elem.description == null ? "hidden" : "")
                .end()
                .appendTo($("#repo-container"));
        });
    }
    GithubLoader.loadUserRepos = loadUserRepos;
})(GithubLoader || (GithubLoader = {}));
$(document).ready(function () {
    GithubLoader.fetchUser();
});
//# sourceMappingURL=index.js.map