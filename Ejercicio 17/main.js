class Cliente {
    constructor(nombre, direccion, telefono, nif) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.nif = nif;
    }
}

class Elemento {
    constructor(descripcion, cantidad, precio) {
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}

class Factura{
    constructor(cliente, elemento) {
        this.cliente = cliente;
        this.elemento = elemento;
        this.informacion = {
            baseImponible: 0,
            iva: 21,
            total: 0,
            formaPago: "contado"
        };

        this.calculoTotal = () => {
          for (var i = 0; i <this.elemento.length; i++){
             this.informacion.baseImponible += this.elemento[i].cantidad * this.elemento[i].precio;
          } 
            this.informacion.total = this.informacion.baseImponible * (1+(this.informacion.iva/100));
        }
        
        this.muestraTotal = function () {
            this.calculoTotal();
            alert("total = " + this.informacion.total + " euros");
        }
    };
}

var elCliente = new Cliente("Cliente 1", "", "", "");
var losElemento = [new Elemento("elemento1", "1", "5"), new Elemento("elemento2", "2", "12")];
var laFactura = new Factura(elCliente, losElemento);
laFactura.muestraTotal();