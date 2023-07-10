// import BaseModel from "../../Core/models/BaseModel.js"
import BaseModel from "../../models/BaseModel";

export default class EmployeeModel extends BaseModel{
    constructor(model={}){
        super();
        this.id=model.id;
        this.name=model.name;
        this.location=model.location;
    }
    get modelType(){
        return 1;
    }
}