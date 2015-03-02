$(function() {
   var githubAPI = new GitHubAPI("thebeckyhamm");
   githubAPI.loadAll(function(data){
        var page = new Page(data);
   });

});