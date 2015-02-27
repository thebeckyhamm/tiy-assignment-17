var Page = (function(){

    
    function Page(data) {
        this.data = data;
        this.showProfile();
        this.convertJoinedDate();
        this.showOrgs();
        this.showRepos();
        this.addStarred();
    }


    Page.prototype = {

        showProfile: function() {
            var profileInfo = new ProfileInfo(this.data.user);
            $(".profile").html(profileInfo.render());
        },

        convertJoinedDate: function() {
            var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            var since = new Date(this.data.user.created_at);

            var month = months[since.getMonth()];
            var year = since.getFullYear();
            var date = since.getDate();
            var newDate = month + " " + date + ", " + year;

            $(".joined-on").text(newDate);

        },

        showOrgs: function() {

            var orgList = new OrgList(this.data.orgs);
            $(".profile").append(orgList.render());
        },

        showRepos: function() {
            var $container = $(".repos").empty();
            var repos = _.sortBy(this.data.repos, "pushed_at").reverse();

            _.each(repos, function(repo) {
                var newRepo = new Repo(repo);
                $container.append(newRepo.render());
            });           
        },

        addStarred: function() {
            var $container = $(".starred");
            var countStarred = this.data.starred.length;
            $container.text(countStarred);
        }



    };


    return Page;

})();