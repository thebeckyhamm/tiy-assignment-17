$(function() {
   var githubAPI = new GitHubAPI("thebeckyhamm");
   githubAPI.loadAll(function(data){
        window.page = new Page(data);
   });

});