import BaseService from "../../Service/BaseService"
import getPersonDetails from "../../../server/Server"
import EmployeeModel from "../models/EmployeeModel"

 class DataConsume extends BaseService{
    getPersonDetailsWithId(id){
        const res= getPersonDetails(id);
        return this.convertToModel(res,EmployeeModel); 
    }
} 

const dataConsume = new DataConsume(EmployeeModel);
export default dataConsume;
