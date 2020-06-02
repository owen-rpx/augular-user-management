import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const users = [
            { id: 11, name: 'Way Lau' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celerita' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberaMan' },
            { id: 17, name: 'Dynamea' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Maggme' },
            { id: 20, name: 'Tornado' }
        ];
        const mock = [
            { id: 11, name: 'Way Lau' },
            { id: 12, name: 'Narco' }
        ];
        return { users, mock };
    }
}

