import { State } from '../employee/address-fields/country-state-city-fields/state-field/state.model';

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
        country: string;
        state: State;
        city: string;
        postalCode: string;
    };

    email: string;
    tel: string;

    position: string;
    skills: Skill[];
    hireDate: Date;
    office: string;
    salary: number;

    preferences: {
        travel: boolean,
        nightshift: boolean,
        workAtHome: boolean,
        stockOption: boolean
    };
}

export class Skill {
    name: string;
}

export const PreferenceText = {
    travel: 'Willing to travel: ',
    nightshift: 'Willing to work nightshift: ',
    wokrAtHome: 'Can work at home: ',
    stockOption: 'Stock Option: '
};
