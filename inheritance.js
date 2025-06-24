
class University {
    static var = "hello";

    constructor(name, location) {
        this.name = name;
        this.location = location;
    }

    getDetails() {
        console.log(this.name, this.location);
    }

    getVar() {
        console.log(University.var);
    }
}

class College extends University {
    constructor(name, location, department) {
        super(name, location);
        this.department = department;
    }

    getDetails() {
        super.getDetails();
        console.log(this.department);
    }
}

class School extends University {
    constructor(name, location, department, room) {
        super(name, location, department);
        this.room = room;
    }

    getDetails() {
        super.getDetails();
        console.log(this.room);
    }
}

const s = new School("School", "School-Location", "School-Department", "SchoolRoom");
const c = new College("College", "Colleg-Location", "College-Department");
const u = new University("University", "University-Location");

s.getDetails();
c.getDetails();
u.getDetails();

s.getVar()