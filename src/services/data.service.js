export class DataService {
    getExperiences() {
        return this.getLocalJson('experiences');
    }

    getProjects() {
        return this.getLocalJson('projects');
    }

    getLanguages() {
        return this.getLocalJson('languages');
    }

    getStudies() {
        return this.getLocalJson('studies');
    }
    getSkills() {
        return this.getLocalJson('skills');
    }

    getContacts() {
        return this.getLocalJson('contacts');
    }

    getSections() {
        return this.getLocalJson('sections');
    }

    getInfo() {
        return this.getLocalJson('info');
    }

    getLocalJson(filename) {
        return require(`../../public/data/${filename}.json`);
    }
}