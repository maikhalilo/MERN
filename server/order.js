//for sql server

class Order{
    constructor(Id,Title,Quantity,Message,City){
        this.Id = Id; 
        this.Title = Title; 
        this.Quantity = Quantity;
        this.Message = Message;
        this.City = City; 
    }
}

module.exports = Order;
export default Product;