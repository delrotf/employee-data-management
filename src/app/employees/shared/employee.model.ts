// ng g class employee.model

export class Employee {
    $key: string;

    name: {
        firstname: string;
        middlename: string;
        lastname: string;
    };

    birthday: Date;
    gender: string;
    civilStatus: string;
    address: {
        address: string;
        city: string;
        country: string;
        postal: string;
    };

    email: string;
    tel: string;

    position: string;
    skills: string[];
    hireDate: Date;
    requirementsSubmitted: string[];
    office: string;
    salary: number;
}
