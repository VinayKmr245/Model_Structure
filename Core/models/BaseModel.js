export default class BaseModel{
    constructor(model={}){
        this.assign(model);
        this.mapModel(model);
    }

    static mapModel(data = {}){
        console.log(data,"data");
        return new this(data);
    }

    assign(model){
        Object.assign(this,model)
    }
}