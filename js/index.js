import { User_URL } from './common';
$(document).ready(function () {
    $.ajax({
        url: User_URL,
        method: 'GET',
    }).done(function (responseData) {
        let user = responseData;
        $('[data-role=real-name]').text(user.name);
        $.ajax({
            url: user.repos_url,
            method: 'GET',
        }).done(function (responseData) {
            let userRepos = responseData;
            let htmlReposObj = new Array();
            userRepos.forEach(element => {
                let obj = $('[data-role=repo-template]').clone();
                obj.attr('data-role', 'repo');
                obj.attr('data-id', element.id);
                obj.removeAttr('hidden');
                obj.find('[data-role=repo-title]').text(element.name);
                obj.find('[data-role=repo-language]').text(element.language);
                obj.find('[data-role=repo-description]').text(element.description);
                obj.find('[data-role=repo-homepage]').text(element.homepage).attr('href', element.homepage);
                obj.find('[data-role=repo-stars]').text(`${element.stargazers_count.toString()} ${element.stargazers_count != 1 ? 'stars' : 'star'}`);
                obj.find('[data-role=repo-forks]').text(`${element.forks_count.toString()} ${element.forks_count != 1 ? 'forks' : 'fork'}`);
                obj.find('[data-role=repo-button]').attr('href', element.html_url);
                if (element.description == null || element.description == "")
                    obj.find('[data-role=repo-description]').hide();
                if (element.homepage == null || element.homepage == "")
                    obj.find('[data-role=repo-homepage]').parent().hide();
                htmlReposObj.push(obj);
            });
            $('[data-role=repo-container]').append(htmlReposObj);
        });
    });
});
//# sourceMappingURL=index.js.map