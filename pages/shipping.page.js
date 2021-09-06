import BasePage from './base.page';

class ShippingPage extends BasePage {

    //Elementos Web
        
    get procederCheckout() {return $('button[name="processCarrier"]'); }
    get terminosServicioCheck() {return $('#uniform-cgv'); }


   //-------------------------------------------------------------------------------------------------------//
 
   

}

export default new ShippingPage();