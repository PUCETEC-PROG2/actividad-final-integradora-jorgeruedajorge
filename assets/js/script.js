document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Evitar el envío automático
    event.preventDefault();

    // Limpiar mensajes de error previos
    const errorElements = document.querySelectorAll('.error-msg');
    errorElements.forEach(el => el.textContent = '');
    document.getElementById('successMsg').style.display = 'none';

    // Obtener valores
    const nombre = document.getElementById('nombre').value.trim();
    const ciudad = document.getElementById('ciudad').value.trim();
    const email = document.getElementById('email').value.trim();
    const asunto = document.getElementById('asunto').value.trim();
    const descripcion = document.getElementById('descripcion').value.trim();

    let hayErrores = false;

    // 1. Validación de Nombre (No vacío y mín 3 caracteres)
    if (nombre.length < 3) {
        document.getElementById('errorNombre').textContent = 'El nombre debe tener al menos 3 caracteres.';
        hayErrores = true;
    }

    // 2. Validación de Ciudad (No vacía)
    if (ciudad === "") {
        document.getElementById('errorCiudad').textContent = 'La ciudad es obligatoria.';
        hayErrores = true;
    }

    // 3. Validación de Email (Formato válido)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('errorEmail').textContent = 'Ingresa un correo electrónico válido.';
        hayErrores = true;
    }

    // 4. Validación de Asunto (No vacío)
    if (asunto === "") {
        document.getElementById('errorAsunto').textContent = 'El asunto es obligatorio.';
        hayErrores = true;
    }

    // 5. Validación de Descripción (Mín 10 caracteres)
    if (descripcion.length < 10) {
        document.getElementById('errorDescripcion').textContent = 'La descripción debe tener al menos 10 caracteres.';
        hayErrores = true;
    }

    // Si no hay errores, procesar el envío
    if (!hayErrores) {
        document.getElementById('successMsg').style.display = 'block';
        // Aquí podrías limpiar el formulario si quisieras:
        // this.reset();
    }
});