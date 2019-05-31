import { Report } from './report';

export class Vehicle {
    constructor(
        public id: number,
        public plateNo: string,
        public model: string,
        public createdOn: number,
        public updateOn: number,
        public reports?: Report[]
    ) { }


}