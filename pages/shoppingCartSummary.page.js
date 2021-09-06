import BasePage from './base.page';

class ShoppingCartSummaryPage extends BasePage {

    //Elementos Web
        
    get procederCheckout() {return $('p>a[title="Proceed to checkout"]');}
    get carrito() {return $('[title="View my shopping cart"]');}
    get eliminarProducto() {return $('[title="Delete"]');}
    get alertaCarroVacio() {return $('.alert');}
    
    

   //-------------------------------------------------------------------------------------------------------//
 
   

}

export default new ShoppingCartSummaryPage();