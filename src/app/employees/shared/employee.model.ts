// ng g class employee.model

export class Employee {
    $key: string;

    name: {
        firstname: string;
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
    preferences: {
        travel: boolean,
        nightshift: boolean,
        workAtHome: boolean,
        stockOption: boolean
    };
    office: string;
    salary: number;
}
