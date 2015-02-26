var ProfileInfo = (function(){

    var template = JST["profile_info"];
    
    function ProfileInfo(data) {
        this.data = data;
    };

    ProfileInfo.prototype = {

        render: function() {
            return $(template(this.data));
        }

    };

    return ProfileInfo;
})();