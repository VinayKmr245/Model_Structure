import BaseModel from "../models/BaseModel.js";
export default class BaseService{

    constructor(model ={},data){
        console.log(model,data,this,"hello")
        if(!model){
            console.log("Error Please Provide Model")
        }
        this.model=model;
        this.convertToModel(data,model);
    }

    /**
     * 
     * @param {Object} data 
     * @param {BaseModel} model 
     * @returns 
     */
    convertToModel(data,model){
        return model.mapModel(data);

    }
};