var Page = (function(){

    
    function Page(data) {
        this.data = data;
        this.showProfile();
        this.convertTime();
        this.showOrgs();
    }


    Page.prototype = {

        showProfile: function() {
            var profileInfo = new ProfileInfo(this.data.user);
            $(".profile").html(profileInfo.render());
        },

        convertTime: function() {
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
        }

    };


    return Page;

})();