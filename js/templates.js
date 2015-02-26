this["JST"] = this["JST"] || {};
this["JST"]["org"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<a href=\""
    + escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"url","hash":{},"data":data}) : helper)))
    + "\" class=\"org-link\">\n    <img src=\""
    + escapeExpression(((helper = (helper = helpers.avatar_url || (depth0 != null ? depth0.avatar_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"avatar_url","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + escapeExpression(((helper = (helper = helpers.login || (depth0 != null ? depth0.login : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"login","hash":{},"data":data}) : helper)))
    + "\">\n</a>";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["profile_info"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<img src=\""
    + escapeExpression(((helper = (helper = helpers.avatar_url || (depth0 != null ? depth0.avatar_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"avatar_url","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n<h2>"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>\n<h3>"
    + escapeExpression(((helper = (helper = helpers.login || (depth0 != null ? depth0.login : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"login","hash":{},"data":data}) : helper)))
    + "</h3>\n<hr>\n<span class=\"octicon octicon-link text-muted\"></span><a href=\"\">"
    + escapeExpression(((helper = (helper = helpers.blog || (depth0 != null ? depth0.blog : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"blog","hash":{},"data":data}) : helper)))
    + "</a><br>\n<span class=\"octicon octicon-clock text-muted\"></span>Joined on <span class=\"joined-on\"></span>\n<hr>\n<div class=\"flex space-around even-children\">\n    <a class=\"stats\" href=\""
    + escapeExpression(((helper = (helper = helpers.followers_url || (depth0 != null ? depth0.followers_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"followers_url","hash":{},"data":data}) : helper)))
    + "\">\n        <div class=\"number\">"
    + escapeExpression(((helper = (helper = helpers.followers || (depth0 != null ? depth0.followers : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"followers","hash":{},"data":data}) : helper)))
    + "</div>\n        <span class=\"text-muted\">Followers</span>\n    </a>\n    <a class=\"stats\" href=\""
    + escapeExpression(((helper = (helper = helpers.starred_url || (depth0 != null ? depth0.starred_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"starred_url","hash":{},"data":data}) : helper)))
    + "\">\n        <div class=\"number\">99</div>\n        <span class=\"text-muted\">Starred</span>\n    </a>\n    <a class=\"stats\" href=\""
    + escapeExpression(((helper = (helper = helpers.following_url || (depth0 != null ? depth0.following_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"following_url","hash":{},"data":data}) : helper)))
    + "\">\n        <div class=\"number\">"
    + escapeExpression(((helper = (helper = helpers.following || (depth0 != null ? depth0.following : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"following","hash":{},"data":data}) : helper)))
    + "</div>\n        <span class=\"text-muted\">Following</span>\n    </a>\n</div>\n";
},"useData":true});