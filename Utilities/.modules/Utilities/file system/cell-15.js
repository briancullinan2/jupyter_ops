var importer = require('../Core');
var path = require('path');
var listInProject = importer.import('list project files');

// But we also want to automatically load projects?
var listProjects = (root, match = '{,*,*/,*/*/*,*/*/*/*,*/*/*/*/*}+(package.json|NuGet.config|*.sln|*.csproj)') => {
    var result = {};
    var matches = listInProject(root, match);
    matches.forEach(m => {
        var projectPath = path.resolve(path.dirname(m));
        result[path.basename(projectPath)] = projectPath;
    });
    return result;
};
module.exports = listProjects;
listProjects;

