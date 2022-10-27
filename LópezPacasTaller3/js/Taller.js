function addProducto(){

var producto=document.getElementById('producto').value;


var numero=document.getElementById('numero').value;

var fecha=document.getElementById('fecha').value;

var cantidad=document.getElementById('cantidad').value;

var fecha2=document.getElementById('fecha2').value;

var valor;

valor = document.formulario.dato[document.formulario.dato.SelectedIndex].value;

sessionStorage.setItem(producto,valor,numero,fecha,cantidad,fecha2); //ó sessionStorage[producto]=precio




}

 

function mostrarDatos(){

var datosDisponibles=document.getElementById('datosDisponibles');

datosDisponibles.innerHTML='';

for(var i=0;i<sessionStorage.length;i++){



                var producto=sessionStorage.getItem(producto);

                var fecha2?sessionStorage.getItem(fecha2);

                var numero=sessionStorage.getItem(numero);

                var valor=sessionStorage.getItem(valor);

                var cantidad=sessionStorage.getItem(cantidad);

                var fecha=sessionStorage.getItem(fecha);


                datosDisponibles.innerHTML += '<div>'+producto+  ' - '+numero+' - ' +valor+ ' - ' +cantidad+ ' - ' +fecha+ '-' +fecha2+' </div>';

                }

}

 

function limpiarVista() {

var datosDisponibles=document.getElementById('datosDisponibles');

datosDisponibles.innerHTML='Limpiada vista. Los datos permanecen.';

}

 

function borrarTodo() {sessionStorage.clear(); mostrarDatos(); }

function mostrarData(){
    mostrarDatos();
}