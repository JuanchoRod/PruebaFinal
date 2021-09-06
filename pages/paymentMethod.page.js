import BasePage from './base.page';

class PaymanetMethodPage extends BasePage {

    //Elementos Web
        
    get pagoCheque() {return $('.cheque'); }
    get pagoTarjeta() {return $('[title="Pay by check."]'); }
    get confirmarOrden() {return $('p>button[type="submit"]'); }


   //-------------------------------------------------------------------------------------------------------//
 
   

}

export default new PaymanetMethodPage();