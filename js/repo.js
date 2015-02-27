var Repo = (function(){

    var template = JST["repo"];
    
    function Repo(data) {
        this.data = data;
    };

    Repo.prototype = {

        render: function() {
            return $(template(this.data));
        }

    };

    return Repo;
})();