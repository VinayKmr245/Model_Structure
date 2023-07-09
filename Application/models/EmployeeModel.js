import BaseModel from "../../Core/models/BaseModel.js"

export default class EmployeeModel extends BaseModel{
    constructor(model={}){
        super();
        this.id=model.id;
        this.name=model.name;
        this.location=model.location;
    }
    get modelType(){
        console.log(model,typeof this, typeof model, "check types of models");
        return 0;
    }
}