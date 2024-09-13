let edad = 30;
let membresia = "VIP";


if (edad < 18) {
    console.log("Eres menor de edad, puedes acceder a la membresía juvenil.");
} else if (edad >= 18 && edad <= 60) {
    console.log("Eres un adulto, puedes acceder a todas las membresias.");
} else {
    console.log("Eres mayor de 60 años, tienes descuentos en las membresias.");
}

switch (membresia) {
case "Básica":
    console.log("Membresía Basica: Acceso a las áreas de entrenamiento estándar.");
    break;
case "Estándar":
    console.log("Membresia Estandar: Acceso a todas las areas de entrenamiento y clases grupales.");
    break;
case "VIP":
    console.log("Membresía VIP: Acceso completo, con beneficios adicionales como spa y entrenadores personalizados.");
    break;
default:
    console.log("Tipo de membresía no válido.");
}
