import BasePage from './base.page';




class AuthenticationPage extends BasePage {

   //Elementos Web
   get botonCrearCuenta(){ return $('#SubmitCreate'); } 
   get emailNuevo () { return $('#email_create'); }
   get email () { return $('#email'); }
   get password () { return $('#passwd'); }
   get botonSignIn () {return $('.icon-lock'); }

    

   //-------------------------------------------------------------------------------------------------------//
 
   
   /**
    * Ingresa usuario existente e ingresa a la pagina
    */
    async ingresarCuentaExistente() {

        addStep ('Ingresa usuario existente')
        await super.clickearElemento(this.email); 
        await super.vaciarCampoYEnviarTexto(await this.email, datos.emailPruebas);
        await super.clickearElemento(this.password); 
        await super.vaciarCampoYEnviarTexto(await this.password, datos.passwdPruebas);
        await super.clickearElemento(this.botonSignIn);
    }

   

}

export default new AuthenticationPage();