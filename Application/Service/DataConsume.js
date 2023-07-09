import BaseService  from '../../Core/Service/BaseService.js';
import getPersonDetails from '../../server/Server.js'

 class DataConsume extends BaseService{
    getPersonDetailsWithId(id){
        console.log('id',id,"sevice call")
        const res= getPersonDetails(id);
        console.log(res,typeof res,"res Output");
        return res;
    }
} 

export default dataConsume=new DataConsume();
