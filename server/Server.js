import {data} from "./Data.js";

function getPersonDetails(id){
    const arr=data.employees;
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i].id==id)
        return arr[i];
    }
    return {};
}
export default getPersonDetails;