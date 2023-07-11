import BaseService  from '../../Core/Service/BaseService.js';
import getPersonDetails from '../../server/Server.js'
import EmployeeModel from '../models/EmployeeModel.js';

 class DataConsume extends BaseService{
    getPersonDetailsWithId(id){
        const res= getPersonDetails(id);
        return this.convertToModel(res,EmployeeModel); //service call such that data will get modelled over here
    }
} 

const dataConsume = new DataConsume(EmployeeModel);
export default dataConsume;
