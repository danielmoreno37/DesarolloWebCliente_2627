function divide(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a / b;
}

try {
    const resultadoCorrecto = divide(10, 2);
    console.log("Resultado válido:", resultadoCorrecto);

    const resultadoError = divide(10, 0);
    console.log("Este mensaje no se mostrará:", resultadoError);
} catch (error) {
    console.error("Error capturado:", error.message);
}