var OrgList = (function(){
    
    function OrgList(data) {
        this.data = data;
        this.$el = $("<div />");
    };

    OrgList.prototype = {

        render: function() {
            var $el = this.$el;

            _.each(this.data, function(datum) {
                var org = new Org(datum);
                $el.append(org.render());
            });
            
            return $el;
        }

    };

    return OrgList;
})();