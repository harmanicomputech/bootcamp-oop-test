class Phone{
    constructor(){
        //js private properties (_)
        this._buttons = 3;
        this._screen = 	1;
        this._charger = 2;
        this._battery = 2;
    }
    //getter methods to access private properties: depicts encapsulation
    //class methods
    getButttons(){
        return this._buttons;
    }

    getScreen(){
        return this._screen;
    }
    getCharger(){
        return this._charger;
    }
    getBattery(){
        return this._battery;
    }

    brokenScreen(){
        return `I have a broken ${this._screen} `;
    }

    flat(time){
        this.brokenScreen();
        if(time){
            return `My phone has been dead ${time} hours`;
        }
        return `My phone is dead`;
    }

    chat(facebook){
        if(facebook){
            return `I am chatting on ${facebook}`;
        }else{
            return 'Nothing megabyte';
        }
    }

    dial(callme){
        if(callme){
            return callme;
        }
        return 'I told you not to beep my phone';
    }
}

class Samsung extends Phone{
    constructor(product_model){
        super(); //inherits the constructor of its parent Phone
        this._product_model = product_model || "Samsung s5";
        this._price = 0;
    }

    productPrice(model){
        if(model == 'classic' && this._product_model === 'Samsung s5'){
            return this._price + 80000;
        }else if(model === 'simple' && this._product_model === 'Samsung s5'){
            return this._price + 50000;
        }else if(model === 'premium' && this._product_model === 'Samsung s5'){
            return this._price + 500000;
        }else{
            return `The price of your phone is ${this._price} Visit our nearby store to make an order or online for more details`;
        }
    }
}

module.exports = {
    Phone: Phone,
    Samsung: Samsung
}