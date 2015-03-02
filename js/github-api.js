var GitHubAPI = (function(){
    
    function GitHubAPI(user) {
        var baseURL = "https://api.github.com/users/";

        this.username = user;

        this.endpoints = {
            repos: baseURL + user + "/repos",
            user: baseURL + user,
            orgs: baseURL + user + "/orgs",
            starred: baseURL + user + "/starred"
        };
    };


    GitHubAPI.prototype = {

        returnData: function(url, cb) {
            $.ajax(url, {

                success: function(data) {
                    cb(data);
                },
                error: function() {
                    console.log("messed up");
                }
            });
        },

        repos: function(cb) {
            this.returnData(this.endpoints.repos, cb);
        },

        orgs: function(cb) {
            this.returnData(this.endpoints.orgs, cb);
        },

        user: function(cb) {
            this.returnData(this.endpoints.user, cb);
        },

        starred: function(cb) {
            this.returnData(this.endpoints.starred, cb);
        },

        loadAll: function(cb) {
            var afterCB = _.after(4, cb);
            var allData = {};

            this.repos(function(data) {

                allData.repos = data;
                afterCB(allData);

            });

            this.orgs(function(data) {

                allData.orgs = data;
                afterCB(allData);

            });

            this.starred(function(data) {

                allData.starred = data;
                afterCB(allData);

            });

            this.user(function(data) {

                allData.user = data;
                afterCB(allData);

            });

        }

    };



    return GitHubAPI;
})();