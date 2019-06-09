
var userJson: any;
var userReposJson: any;

module GithubLoader {
    export function fetchUser(): void {
        $.ajax({
            url: 'https://api.github.com/users/Alian7911',
            method: 'GET'
        }).done(function (data) {
            userJson = data;
            loadUserInfo();
            fetchUserRepos();
        });
    }

    export function loadUserInfo(): void {
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

    //Fetch the current loaded user's repos
    export function fetchUserRepos(): void {
        $.ajax({
            url: userJson.repos_url,
            method: 'GET'
        }).done(function (data) {
            userReposJson = data;
            loadUserRepos();
        });
    }

    //Load the current loaded user's repos
    export function loadUserRepos(): void {
        $.each(userReposJson, function (key, elem) {
            console.log(elem);
            // $("<div/>")
            //     .addClass("col-sm d-flex")
            //     .append(
            //         $("<div/>")
            //             .addClass("sh-shadow d-flex flex-fill m-2 p-2 flex-column border border-tertiary")
            //             .append($("<h2/>").html(`<a href="${elem.html_url}">${elem.name}</a>`))
            //             .append($("<h5/>").text(elem.description).attr("hidden", "hidden"))
            //             .append($("<h4/>").text(elem.language))
            //     )
            //     .find("h5")
            //     .removeAttr((elem.description != null) ? "hidden" : "")
            //     .end()
            //     .appendTo($("#repo-container"));

            let col = $("<div/>").addClass("col-sm d-flex");
            let shadowCont = $("<div/>").addClass("repo sh-shadow d-flex flex-fill m-2 p-2 flex-column");
            let headerCont = $("<div/>").addClass("d-flex flex-row border-bottom border-glow");
            let repoLink = $("<a/>").addClass("repo-link").attr("href", elem.html_url).text(elem.name.includes(".") ? elem.name.split(".").join("-") : elem.name);
            let repoLang = $("<div/>").addClass("repo-language ml-auto").text(elem.language);
            let repoDesc = $("<div/>").addClass("repo-desc").text(elem.description != null ? elem.description : "No description is provided.");
            col.append(shadowCont.append(headerCont.append(repoLink).append(repoLang)).append(repoDesc));
            col.appendTo($("#repo-container"));
        });
    }
}

$(document).ready(function () {
    GithubLoader.fetchUser();
});