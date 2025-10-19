/*
public
private
protected
*/

class Person{
    public name:string
    protected age:number
    private city:string

    constructor(name:string,age:number,city:string){
        this.name =name
        this.age = age
        this.city = city
    }
    public displayInformation(){
        console.log("Name:",this.name)
        console.log("Age:",this.age)
        console.log("City:",this.city)
    }
}

class Employee extends Person{
    private eid :number

    constructor(name:string,age:number,city:string,eid:number){
        super(name,age,city)
        this.eid = eid
    }
    public displayEmployeeInformation(){
        console.log("Eid:",this.eid)
        console.log("Name:",this.name)
        console.log("Age:",this.age)
        // console.log("City:",this.city)

    }
}
let emp = new Employee("Supraja",35,"Hyd",101)

emp.displayEmployeeInformation()