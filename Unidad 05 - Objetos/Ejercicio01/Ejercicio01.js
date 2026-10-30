
// Función constructora
function Rectangulo(width, height) {
    if (width <= 0) {
        width = 1;
    }

    if (height <= 0) {
        height = 1;
    }

    this.width = width;
    this.height = height;

    // Cambiar dimensiones
    this.cambiarDimensiones = function(width, height) {
        if (width <= 0) {
            width = 1;
        }

        if (height <= 0) {
            height = 1;
        }

        this.width = width;
        this.height = height;
    };

    // Calcular área
    this.calcularArea = function() {
        return this.width * this.height;
    };

    // Crear una copia
    this.copia = function() {
        return new Rectangulo(this.width, this.height);
    };

    // Comparar rectángulos
    this.comparar = function(otro) {
        if (this.calcularArea() > otro.calcularArea()) {
            return "mayor";
        } else if (this.calcularArea() < otro.calcularArea()) {
            return "menor";
        } else {
            return "igual";
        }
    };
};


// Crear rectángulos
let rectangulo1 = new Rectangulo(10, 5);
let rectangulo2 = new Rectangulo(4, 6);

// Comprobar dimensiones
let resultado = "<h2>Rectángulo 1</h2>";

resultado += "<p>Ancho: " + rectangulo1.width + "</p>";
resultado += "<p>Alto: " + rectangulo1.height + "</p>";
resultado += "<p>Área: " + rectangulo1.calcularArea() + "</p>";

// Comprobar cambio de dimensiones
rectangulo1.cambiarDimensiones(8, 3);

resultado += "<h2>Después de cambiar dimensiones</h2>";
resultado += "<p>Ancho: " + rectangulo1.width + "</p>";
resultado += "<p>Alto: " + rectangulo1.height + "</p>";
resultado += "<p>Área: " + rectangulo1.calcularArea() + "</p>";

// Comprobar copia
let rectangulo3 = rectangulo1.copia();

resultado += "<h2>Copia del rectángulo 1</h2>";
resultado += "<p>Ancho: " + rectangulo3.width + "</p>";
resultado += "<p>Alto: " + rectangulo3.height + "</p>";

// Comprobar comparación
resultado += "<h2>Comparación</h2>";
resultado += "<p>El rectángulo 1 es " + rectangulo1.comparar(rectangulo2) + " que el rectángulo 2</p>";

// Comprobar validación
let rectangulo4 = new Rectangulo(-5, 0);

resultado += "<h2>Validación</h2>";
resultado += "<p>Ancho: " + rectangulo4.width + "</p>";
resultado += "<p>Alto: " + rectangulo4.height + "</p>";

// Mostrar resultados en el DOM
document.getElementById("resultado").innerHTML = resultado;
