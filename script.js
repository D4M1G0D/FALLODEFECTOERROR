// Obtener el formulario de inicio de sesión
const form = document.getElementById('loginForm');
// Obtener el campo de mensaje
const message = document.getElementById('message');
// Contador de intentos
let attempts = 3;

// Agregar un controlador de eventos al formulario cuando se envíe
form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Obtener los valores de usuario y contraseña ingresados
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  // Verificar las credenciales
  //ERROR: Validar sin tomar en cuenta la diferencia entre mayusculas y minusculas.
  //FALLO: la verificacion es exitosa sin importar las mayusculas ni minusculas.
  //DEFECTO: no cumpel con los requisitos de una buena validacion.
  if (username.toLowerCase() === 'usuario' && password.toLowerCase() === 'contraseña') {
    // Credenciales válidas, redirigir a la página de inici
    window.location.href = 'inicio.html';
  } else {
    // Credenciales inválidas, mostrar mensaje de error
    attempts--;
    message.innerHTML = `Credenciales inválidas. Intentos restantes: ${attempts}`;
    //ERROR: signo de "mayor o igual que" mal colocado deberia ser ===.
    //FALLO: Permite intentar mas de tres veces!.
    //DEFECTO: no limita el mumero de intentos de acuerdo a la especificacion indicada.
    if (attempts >= 3) {
      // Deshabilitar el formulario después de tres intentos fallidos
      document.getElementById('username').disabled = true;
      document.getElementById('password').disabled = true;
      document.querySelector('button').disabled = true;
      message.innerHTML = 'Has alcanzado el límite de intentos. Inténtalo más tarde.';
    }
  }
});
