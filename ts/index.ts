import { User, Repository, User_URL } from './common';

$(document).ready(function () {
    $.ajax({
        url: User_URL,
        method: 'GET',
    }).done(function (responseData) {
        let user: User = responseData;
        $('[data-role=real-name]').text(user.name as string);
        $.ajax({
            url: user.repos_url as string,
            method: 'GET',
        }).done(function (responseData) {
            let userRepos: Array<Repository> = responseData;            // Json Object array
            let htmlReposObj: Array<JQuery<HTMLElement>> = new Array(); // JQuery DOM Object array
            userRepos.forEach(element => {
                // Clone the template and unhide it
                let obj = $('[data-role=repo-template]').clone();
                obj.attr('data-role', 'repo');
                obj.attr('data-id', element.id);
                obj.removeAttr('hidden');

                // Populate the cloned template
                obj.find('[data-role=repo-title]').text(element.name as string);
                obj.find('[data-role=repo-language]').text(element.language as string);
                obj.find('[data-role=repo-description]').text(element.description as string);
                obj.find('[data-role=repo-homepage]').text(element.homepage as string).attr('href', element.homepage as string);
                obj.find('[data-role=repo-stars]').text(`${element.stargazers_count.toString()} ${element.stargazers_count != 1 ? 'stars' : 'star'}`);
                obj.find('[data-role=repo-forks]').text(`${element.forks_count.toString()} ${element.forks_count != 1 ? 'forks' : 'fork'}`);
                obj.find('[data-role=repo-button]').attr('href', element.html_url);

                // Check if any nullable field is actually null
                if(element.description == null || element.description == "")  obj.find('[data-role=repo-description]').hide();
                if(element.homepage == null || element.homepage == "")  obj.find('[data-role=repo-homepage]').parent().hide();

                htmlReposObj.push(obj);
            });

            // Load into the DOM
            $('[data-role=repo-container]').append(htmlReposObj);
        });
    });
});