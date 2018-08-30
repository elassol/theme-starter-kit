var fs         = require('fs');
var HandleBars = require('handlebars');
var mkdirp     = require('mkdirp');


module.exports.create = function(name, author) {

    // create folder
    mkdirp("./" + name + "_theme");
    mkdirp("./" + name + "_theme/template-parts");

    // create style.css
    var contents = fs.readFileSync('./handlebars-templates/style.css.hbs', 'utf-8');
    var output = HandleBars.compile(contents)({name: name, author: author});
    fs.writeFile("./" + name + "_theme/style.css", output);

    var safeName = convertNameToJavascriptSafeString(name);

    // create functions.php
    var contents = fs.readFileSync('./handlebars-templates/functions.php.hbs', 'utf-8');
    var output = HandleBars.compile(contents)({name: name, safeName: safeName});
    fs.writeFile("./" + name + "_theme/functions.php", output);

    // create 404.php
    var contents = fs.readFileSync('./handlebars-templates/404.php.hbs', 'utf-8');
    var output = HandleBars.compile(contents)({name: name, safeName: safeName});
    fs.writeFile("./" + name + "_theme/404.php", output);

    // create archive-portfolio.php
    var contents = fs.readFileSync('./handlebars-templates/archive-portfolio.php.hbs', 'utf-8');
    var output = HandleBars.compile(contents)({name: name, safeName: safeName});
    fs.writeFile("./" + name + "_theme/archive-portfolio.php", output);

    // create archive.php
    var contents = fs.readFileSync('./handlebars-templates/archive.php.hbs', 'utf-8');
    var output = HandleBars.compile(contents)({name: name, safeName: safeName});
    fs.writeFile("./" + name + "_theme/archive.php", output);

    // create comments.php
    var contents = fs.readFileSync('./handlebars-templates/comments.php.hbs', 'utf-8');
    var output = HandleBars.compile(contents)({name: name, safeName: safeName});
    fs.writeFile("./" + name + "_theme/comments.php", output);

    // create footer.php
    var contents = fs.readFileSync('./handlebars-templates/footer.php.hbs', 'utf-8');
    var output = HandleBars.compile(contents)({name: name, safeName: safeName});
    fs.writeFile("./" + name + "_theme/footer.php", output);

    // create header_alt.php
    var contents = fs.readFileSync('./handlebars-templates/header_alt.php.hbs', 'utf-8');
    var output = HandleBars.compile(contents)({name: name, safeName: safeName});
    fs.writeFile("./" + name + "_theme/header_alt.php", output);

    // create header.php
    var contents = fs.readFileSync('./handlebars-templates/header.php.hbs', 'utf-8');
    var output = HandleBars.compile(contents)({name: name, safeName: safeName});
    fs.writeFile("./" + name + "_theme/header.php", output);

    // create index.php
    var contents = fs.readFileSync('./handlebars-templates/index.php.hbs', 'utf-8');
    var output = HandleBars.compile(contents)({name: name, safeName: safeName});
    fs.writeFile("./" + name + "_theme/index.php", output);

    // create page.php
    var contents = fs.readFileSync('./handlebars-templates/page.php.hbs', 'utf-8');
    var output = HandleBars.compile(contents)({name: name, safeName: safeName});
    fs.writeFile("./" + name + "_theme/page.php", output);

    // create search.php
    var contents = fs.readFileSync('./handlebars-templates/search.php.hbs', 'utf-8');
    var output = HandleBars.compile(contents)({name: name, safeName: safeName});
    fs.writeFile("./" + name + "_theme/search.php", output);

    // create sidebar.php
    var contents = fs.readFileSync('./handlebars-templates/sidebar.php.hbs', 'utf-8');
    var output = HandleBars.compile(contents)({name: name, safeName: safeName});
    fs.writeFile("./" + name + "_theme/sidebar.php", output);

    // create single.php
    var contents = fs.readFileSync('./handlebars-templates/single.php.hbs', 'utf-8');
    var output = HandleBars.compile(contents)({name: name, safeName: safeName});
    fs.writeFile("./" + name + "_theme/single.php", output);

    // create content-none.php
    var contents = fs.readFileSync('./handlebars-templates/template-parts/content-none.php.hbs', 'utf-8');
    var output = HandleBars.compile(contents)({name: name, safeName: safeName});
    fs.writeFile("./" + name + "_theme/template-parts/content-none.php", output);

    // create content-page.php
    var contents = fs.readFileSync('./handlebars-templates/template-parts/content-page.php.hbs', 'utf-8');
    var output = HandleBars.compile(contents)({name: name, safeName: safeName});
    fs.writeFile("./" + name + "_theme/template-parts/content-page.php", output);

    // create content-search.php
    var contents = fs.readFileSync('./handlebars-templates/template-parts/content-search.php.hbs', 'utf-8');
    var output = HandleBars.compile(contents)({name: name, safeName: safeName});
    fs.writeFile("./" + name + "_theme/template-parts/content-search.php", output);

    // create content.php
    var contents = fs.readFileSync('./handlebars-templates/template-parts/content.php.hbs', 'utf-8');
    var output = HandleBars.compile(contents)({name: name, safeName: safeName});
    fs.writeFile("./" + name + "_theme/template-parts/content.php", output);



}



var convertNameToJavascriptSafeString = function(name) {
  return camelCase(name);
}

var camelCase = function(string) {
    // REMOVE WHITE SPACE
    // return string.toLowerCase().replace(/\s+/g, '', function(match, group1) 
    return string.toLowerCase().replace(/-(.)/g, function(match, group1) {
        return group1.toUpperCase();
    });
}


