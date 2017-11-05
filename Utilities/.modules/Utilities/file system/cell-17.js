var importer = require('../Core');
var listInProject = importer.import('list project files');
var listProjects = importer.import('list all projects names');

var PROFILE_PATH = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;

describe('file system service', () => {
    beforeEach(() => {
    })
    
    it('should list files quickly', () => {
        var files = listInProject(PROFILE_PATH);
        console.log(files.length);
        assert(files.length > 0);
    })
    
    it('should ignore hidden directories for better performance', () => {
        var files = listProjects(PROFILE_PATH);
        console.log(files.portal);
        assert(files.portal.indexOf('portal') > -1);
    })
})