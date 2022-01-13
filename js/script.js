function agregar(){
    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var edad = document.getElementById('edad');
    var formulario = document.getElementById('form');
    var empleados = [];

    var obj={
        nom: '',
        ape: '',
        eda: ''
    };

    obj.nom = nombre.value;
    obj.ape = apellido.value;
    obj.eda = edad.value;

    empleados.push(obj);

    document.getElementById("tabla").innerHTML += '<tbody><td>'+obj.nom+'</td><td>'+obj.ape+'</td><td>'+obj.eda+'</td></tbody>';
};





