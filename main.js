function suma (a,b){
    return a * b
}

function compra(){
    alert("bienvenidos a nuestra tienda");
    let pregunta = prompt("quieres comprar un producto en nuestra tienda?");
        while(pregunta === "si"){
                let pregunta2 = prompt("elije tu tipo de producto: salado/dulce");
                if (pregunta2 == "salado"){
                    let pregunta3 = prompt("que vas a elejir? pizza/hamburgueza/tacos");
                        if (pregunta3 == "tacos"){
                            alert("los tacos tienen un valor de $250 cada uno");
                            let precio = 250;
                            let cantidad = Number(prompt("ingrese la cantidad"));
                            let precioTotal = suma(precio, cantidad);
                            alert(`su precio es de ${precioTotal} `);
                        }
                        else if (pregunta3 == "pizza"){
                            alert("la pizza tienen un valor de $1500");
                            let precio = 1500;
                            let cantidad = Number(prompt("ingrese la cantidad"));
                            let precioTotal = suma(precio, cantidad);
                            alert(`su precio es de ${precioTotal} `);
                        }
                        else if (pregunta3 == "hamburgueza"){
                            alert("la hamburgueza tiene un valor de $2000");
                            let precio = 2000;
                            let cantidad = Number(prompt("ingrese la cantidad"));
                            let precioTotal = suma(precio, cantidad);
                            alert(`su precio es de ${precioTotal} `);
                        }
                        else{
                            alert("no contamos con ese producto")
                        }
                }
                else if (pregunta2 == "dulce"){
                    let pregunta3 = prompt("que vas a elejir? chocotorta/helado/torta");
                    if (pregunta3 == "torta"){
                            alert("la porcion de torta tiene un valor de $1000");
                            let precio = 1000;
                            let cantidad = Number(prompt("ingrese la cantidad"));
                            let precioTotal = suma(precio, cantidad);
                            alert(`su precio es de ${precioTotal} `);
                    }
                    else if (pregunta3== "chocotorta"){
                            alert("la  chocotorta tiene un precio de $950");
                            let precio = 950;
                            let cantidad = Number(prompt("ingrese la cantidad"));
                            let precioTotal = suma(precio, cantidad);
                            alert(`su precio es de ${precioTotal} `);
                    }
                    else if (pregunta3== "helado"){
                        let pregunta4 = prompt("que sabor? chocolate/vainilla/frutilla")
                            alert("el helado tiene un valor de 300 la bocha");
                            let precio = 300;
                            let cantidad = Number(prompt("ingrese la cantidad"));
                            let precioTotal = suma(precio, cantidad);
                            alert(`su precio es de ${precioTotal} `);
                    }
                    else{
                        alert("no contamos con ese producto")
                    }
                }
            pregunta = prompt("quieres comprar un producto en nuestra tienda?");
            }
            

}

compra()