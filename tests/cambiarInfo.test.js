import datos from '../datos/datos';
import emailEditado from '../datos/emailEditado';
import AuthenticationPage from '../pages/authentication.page';
import MyAccountPage from '../pages/myAccount.page';
import YourAdressesPage from '../pages/yourAdresses.page';






describe('Cambiar direccion de entrega: ',  () => {

    it('Chequear que no haya una sesion abierta', async () => {

        await AuthenticationPage.abrir('/');
        await AuthenticationPage.cierraSesion();        
        await browser.pause(3000);
    });

    it('Abrir usuario creado para este test', async () => {  // Ingresa a cuenta creada para este test

        await AuthenticationPage.nuevoRegistro();
        await AuthenticationPage.ingresarCuentaExistente(); 
        await browser.pause(3000);
        await MyAccountPage.clickearElemento(await MyAccountPage.myAdresses);
    });

    emailEditado.forEach(({direccionEditada}) => {
        it('Editar la direccion de entrega', async () => {    //Edita la dirección con datos tomados desde .datos
            
            await YourAdressesPage.clickearElemento(await YourAdressesPage.botonUpdate);
            ///await YourAdressesPage.editarDireccionEntrega();
            await YourAdressesPage.clickearElemento(await YourAdressesPage.address); 
            await YourAdressesPage.vaciarCampoYEnviarTexto(await YourAdressesPage.address, direccionEditada);
            await YourAdressesPage.clickearElemento(await YourAdressesPage.botonSave);
            await browser.pause(3000);

            expect(await YourAdressesPage.addressFija.getText()).to.equal(direccionEditada,'Error: no se editó la dirección correctamente');
            
            await browser.pause(3000);
        });
    });

    it('Restaruar la dirección de entrega', async () => {  // Restaura la direccion al valor original para poder correr la prueba de nuevo luego

        await YourAdressesPage.clickearElemento(await YourAdressesPage.botonUpdate);
        await YourAdressesPage.restaruarDireccionEntrega();
        await browser.pause(3000);

        expect(await YourAdressesPage.addressFija.getText()).to.equal(datos.direccion,'Error: no se restauró la dirección correctamente');
       
        await browser.pause(3000);
    });


    
});