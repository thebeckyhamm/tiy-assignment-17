var Repo = (function(){

    var template = JST["repo"];
    
    function Repo(data) {
        this.data = data;
        this.newData = _.clone(this.data);


    };

    Repo.prototype = {


        render: function() {
            this.convertUpdatedTime();
            return $(template(this.newData));
        },

        convertUpdatedTime: function() {
                var updateTime = this.data.pushed_at;
                updateTime = new Date(updateTime);
                var now = new Date();

                if ( now.getMonth() === updateTime.getMonth()) {
                    updateTime = moment(updateTime).fromNow();    
                }

                else if ( now.getFullYear() === updateTime.getFullYear()) {
                    updateTime = moment(updateTime).format("MMM DD");
                    updateTime = "on " + updateTime;

                }

                else {
                    updateTime = moment(updateTime).format("MMM DD, YYYY");
                    updateTime = "on " + updateTime;
                }

                this.newData.update_time = updateTime;
        
        }

    };

    return Repo;
})();