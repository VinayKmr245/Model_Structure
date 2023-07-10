import BaseService  from '../../Core/Service/BaseService.js';
import getPersonDetails from '../../server/Server.js'
import EmployeeModel from '../models/EmployeeModel.js';

 class DataConsume extends BaseService{
    getPersonDetailsWithId(id){
        console.log('id',id,"sevice call")
        const res= getPersonDetails(id);
        console.log(res,typeof res,"res Output");
        return BaseService.convertToModel(res,EmployeeModel); //service call such that data will get modelled over here
    }
} 

const dataConsume = new DataConsume(EmployeeModel);
export default dataConsume;
