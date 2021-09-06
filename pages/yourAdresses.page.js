import datos from '../datos/datos';
import emailEditado from '../datos/emailEditado';
import BasePage from './base.page';



class YourAdresses extends BasePage {

    //Elementos Web

    
    get botonUpdate(){ return $('[title="Update"]'); }
    get address(){ return $('#address1'); }
    get botonSave (){ return $('span=Save')}
    get addressFija(){ return $('.address_address1'); }
    get procederCheckout() {return $('button[name="processAddress"]'); }

   //-------------------------------------------------------------------------------------------------------//
 
   /**
    * Editar direccion de entrega
    */
    async editarDireccionEntrega() {
        addStep('Editar direccion de entrega');
        await super.clickearElemento(this.address); 
        await super.vaciarCampoYEnviarTexto(await this.address, emailEditado.direccionEditada);
        await super.clickearElemento(this.botonSave);
    }

    /**
    * Vuelve a editar a la direccion original
    */
     async restaruarDireccionEntrega() {
        addStep('Vuelve a editar a la direccion original');
        await super.clickearElemento(this.address); 
        await super.vaciarCampoYEnviarTexto(await this.address, datos.direccion);
        await super.clickearElemento(this.botonSave);
    }




}
export default new YourAdresses();