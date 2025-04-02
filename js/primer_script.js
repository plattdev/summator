//hacer_suma: obtiene los valores introducidos por el usuario en las cajas de texto HTML <input type='text' id='numero1'> y <input type='text' id='numero2'> y los deposita en la correspondientes variables numero_1 y numero_2. Estos valores se envían a la función suma: la encargada de realizar la suma. 

function hacer_suma(){
    //obtener el valor del campo numero1 
    var numero_1 = document.getElementById('numero1').value;
    //obtener el valor del campo numero2
    var numero_2 = document.getElementById('numero2').value;
    //llamar a la función suma  
    var resultado_suma = suma(numero_1,numero_2);
    //mostrar el mensaje con el resultado de la suma  en la ventana emergente
    alert(resultado_suma);
  }
  
  function suma(a, b){
    //definimos la variable resultado
    var resultado;
  
    //calculamos la suma, únicamente sumaremos valores enteros. Por eso utilizamos la función parseInt que convierte un valor en un número entero. Si no, la función tomaría los valores como texto (“2”+”3” en lugar de 2+3) y el resultado sería la concatenación de ambos valores: suma(2,3) nos daría como resultado 23 en lugar de 5
    resultado = parseInt(a) + parseInt(b);
    
    return resultado;
  }