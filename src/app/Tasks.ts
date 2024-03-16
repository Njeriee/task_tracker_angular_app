// a models interface for mock tasks
export interface Task{
    // adding a question mark infron of a variable in typescript alloes you to make it nullable
    id?:number;
    text : string;
    day : string;
    reminder : boolean;
}