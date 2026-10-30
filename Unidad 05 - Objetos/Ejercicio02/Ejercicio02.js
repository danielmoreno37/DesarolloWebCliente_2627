
// Función constructora de Ordenador
function Ordenador(marca, modelo, ram = 4, disco = 512, pulgadas = 17) {
    this.marca = marca;
    this.modelo = modelo;
    this.ram = ram;
    this.disco = disco;
    this.pulgadas = pulgadas;
}

// Método toString
Ordenador.prototype.toString = function() {
    return "Marca: " + this.marca +
        ", Modelo: " + this.modelo +
        ", RAM: " + this.ram + " GB" +
        ", Disco duro: " + this.disco + " GB" +
        ", Pantalla: " + this.pulgadas + " pulgadas";
};


// Función constructora de Portátil
function Portatil(marca, modelo, autonomia = 4) {
    Ordenador.call(this, marca, modelo, 4, 256, 12);

    this.autonomia = autonomia;
}

// Heredar propiedades y métodos de Ordenador
Portatil.prototype = Object.create(Ordenador.prototype);
Portatil.prototype.constructor = Portatil;

// Sobrescribir el método toString
Portatil.prototype.toString = function() {
    return Ordenador.prototype.toString.call(this) +
        ", Autonomía: " + this.autonomia + " horas";
};


// Crear ordenadores
let ordenador1 = new Ordenador("HP", "Pavilion");
let ordenador2 = new Ordenador("ASUS", "VivoBook", 16, 1000, 15);

// Crear portátiles
let portatil1 = new Portatil("Lenovo", "IdeaPad");
let portatil2 = new Portatil("ASUS", "ZenBook", 8);


// Mostrar resultados
let resultado = "<h2>Ordenadores</h2>";

resultado += "<p>" + ordenador1.toString() + "</p>";
resultado += "<p>" + ordenador2.toString() + "</p>";

resultado += "<h2>Portátiles</h2>";

resultado += "<p>" + portatil1.toString() + "</p>";
resultado += "<p>" + portatil2.toString() + "</p>";

// Mostrar en el DOM
document.getElementById("resultado").innerHTML = resultado;
