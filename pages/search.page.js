import BasePage from './base.page';

class SearchPage extends BasePage {

    //Elementos Web
         
    get resultadoBusqueda(){ return $('.left-block'); }
    get botonAgregarCarrito() {return $('[name="Submit"]'); }
    //get procederCheckout() {return $('.icon-chevron-right'); }
    get procederCheckout() {return $('span=Proceed to checkout'); }
    get iconoCheck() {return $('.icon-ok'); }
    get iconoCruz() {return $('.cross'); }



   //-------------------------------------------------------------------------------------------------------//
 
   async agregarCarrito(){
       addStep('Agrega producto a carrito');     
       await this.clickearElemento(await this.resultadoBusqueda);
       await this.clickearElemento(await this.botonAgregarCarrito);       

    }

}

export default new SearchPage();