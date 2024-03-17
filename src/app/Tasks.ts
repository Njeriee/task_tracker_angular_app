// a models interface for mock tasks i.e this is what you are expecting from the backend
// essentially a service is like an object that indicates what will be fetched from the backend
export interface Task{
    // adding a question mark infron of a variable in typescript alloes you to make it nullable
    id?:number;
    text : string;
    day : string;
    reminder : boolean;
}