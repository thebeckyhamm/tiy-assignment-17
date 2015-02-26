var Org = (function(){

    var template = JST["org"];
    
    function Org(data) {
        this.data = data;
    };

    Org.prototype = {

        render: function() {
            return $(template(this.data));
        }

    };

    return Org;
})();