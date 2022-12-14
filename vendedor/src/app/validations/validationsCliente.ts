import { MessageBox } from '../utils/MessageBox';

export class ValidatonsCliente {
    static verificarCliente(form: any) {
        let numerico = /^\d+$/;
        let letras = /^[aA-zZ\s]+$/;
        
        if(!form.nombres) {
            MessageBox.messageError('El campo nombres es obligatorio');
            return false;
        }
        if(form.nombres.match(numerico)) {
            MessageBox.messageError('El campo nombres debe ser alfabetico');
            return false;
        }
        if(!form.apellidos) {
          MessageBox.messageError('El campo apellidos es obligatorio');
          return false;
        }

        if(!form.nombres.match(letras)) {
          MessageBox.messageError('El campo nombres debe ser solo letras');
          return false;
        }

        if(!form.apellidos.match(letras)) {
            MessageBox.messageError('El campo apellidos debe ser solo letras');
            return false;
        }

        if(!form.email) {
          MessageBox.messageError('El campo correo electronico es obligatorio');
          return false;
        }
        if(!form.telefono) {
          MessageBox.messageError('El campo telefono es obligatorio');
          return false;
        }
        if(!form.f_nacimiento) {
          MessageBox.messageError('El campo fecha de nacimiento es obligatorio');
          return false;
        }
        if(!form.tipoDocumento) {
          MessageBox.messageError('El campo tipo de documento es obligatorio');
          return false;
        }
        if(!form.numeroDocumento) {
          MessageBox.messageError('El campo numero de documento es obligatorio');
          return false;
        }
        if(!form.genero) {
          MessageBox.messageError('El campo genero es obligatorio');
          return false;
        }
        if(form.telefono && !form.telefono.match(numerico)) {
            MessageBox.messageError('El campo telefono debe ser numerico');
            return false;
        }
        if(form.telefono.length != 9) {
          MessageBox.messageError('El campo telefono debe ser de 9 digitos');
          return false;
        }
        if(!form.numeroDocumento.match(numerico)) {
            MessageBox.messageError('El campo N??mero de Documento debe ser num??rico');
            return false;
        }
        if(form.tipoDocumento == "dni" && form.numeroDocumento.length != 8){
            MessageBox.messageError('N??mero de DNI Inv??lido');
            return false;
        }
        if(form.tipoDocumento == "carnetExtranjeria" && form.numeroDocumento.length != 12){
            MessageBox.messageError('N??mero de carnet de Extranjer??a Inv??lido');
            return false;
        }
        if(form.tipoDocumento == "pasaporte" && form.numeroDocumento.length != 12){
            MessageBox.messageError('N??mero de pasaporte Inv??lido');
            return false;
        }
        let myAge = ~~((Date.now() - Date.parse(form.f_nacimiento)) / (31557600000));
        if(myAge<18){
          MessageBox.messageError('Debe tener m??s de 18 a??os para poder ser cliente');
            return false;}

        return true;
    }
    static verificarClienteTemporal(form: any) {
      let numerico = /^\d+$/;
      
      if(!form.nombres) {
          MessageBox.messageError('El campo nombres es obligatorio');
          return false;
      }
      else if(form.nombres.match(numerico)) {
          MessageBox.messageError('El campo nombres debe ser alfabetico');
          return false;
      }
      else if(!form.apellidos) {
        MessageBox.messageError('El campo apellidos es obligatorio');
        return false;
      }
      else if(!form.email) {
        MessageBox.messageError('El campo correo electronico es obligatorio');
        return false;
      }
      else if(!form.tipoDocumento) {
        MessageBox.messageError('El campo tipo de documento es obligatorio');
        return false;
      }
      else if(!form.numeroDocumento) {
        MessageBox.messageError('El campo numero de documento es obligatorio');
        return false;
      }
      else if(!form.numeroDocumento.match(numerico)) {
          MessageBox.messageError('El campo N??mero de Documento debe ser num??rico');
          return false;
      }
      else if(form.tipoDocumento == "dni" && form.numeroDocumento.length != 8){
          MessageBox.messageError('N??mero de DNI Inv??lido');
          return false;
      }
      else if(form.tipoDocumento == "carnetExtranjeria" && form.numeroDocumento.length != 12){
          MessageBox.messageError('N??mero de carnet de Extranjer??a Inv??lido');
          return false;
      }
      else if(form.tipoDocumento == "pasaporte" && form.numeroDocumento.length != 12){
          MessageBox.messageError('N??mero de pasaporte Inv??lido');
          return false;
      }
    
      return true;
  }
}
