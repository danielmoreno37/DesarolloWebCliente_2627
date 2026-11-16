function simulaProceso(exito) {
    return new Promise(function (resolve, reject) {
        if (exito) {
            resolve("Proceso exitoso");
        } else {
            reject("Hubo un error");
        }
    });
}

// 1. Pruebas con then-catch
console.log("--- Pruebas con then-catch ---");

simulaProceso(true)
    .then(function (mensaje) {
        console.log("then (true):", mensaje);
    })
    .catch(function (error) {
        console.error("catch (true):", error);
    });

simulaProceso(false)
    .then(function (mensaje) {
        console.log("then (false):", mensaje);
    })
    .catch(function (error) {
        console.error("catch (false):", error);
    });

// 2. Pruebas con async-await
async function probarConAsyncAwait() {
    console.log("--- Pruebas con async-await ---");

    try {
        const resExito = await simulaProceso(true);
        console.log("await (true):", resExito);
    } catch (error) {
        console.error("await error (true):", error);
    }

    try {
        const resFallo = await simulaProceso(false);
        console.log("await (false):", resFallo);
    } catch (error) {
        console.error("await error (false):", error);
    }
}

probarConAsyncAwait();