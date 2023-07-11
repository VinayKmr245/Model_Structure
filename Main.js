import dataConsume from "./Application/Service/DataConsume.js"
import EmployeeModel from "./Application/models/EmployeeModel.js";

console.log(dataConsume.getPersonDetailsWithId(2),"log in main");
console.log( dataConsume.getPersonDetailsWithId(2) instanceof EmployeeModel,"log in main for model");
console.log(
    dataConsume.getPersonDetailsWithId(2).modelType,"get model type"
)