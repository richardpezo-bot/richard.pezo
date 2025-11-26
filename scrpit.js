// Funcionalidades básicas para el sitio web

document.addEventListener('DOMContentLoaded', function() {
    console.log('Sitio web cargado correctamente');
    


    // Función para actualizar cursos (ejemplo)
    function actualizarCursos() {
        const cursosContainer = document.querySelector('.courses-grid');
        cursosContainer.innerHTML = '';
        
        cursos.forEach(curso => {
            const cursoElement = document.createElement('div');
            cursoElement.className = 'course-card';
            cursoElement.innerHTML = `
                <h3>${curso.nombre}</h3>
                <p>${curso.descripcion}</p>
            `;
            cursosContainer.appendChild(cursoElement);
        });
    }

    // Función para manejar clics en enlaces
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            console.log('Navegando a:', this.href);
        });
    });

    // Efecto hover para las tarjetas
    document.querySelectorAll('.course-card, .teacher-card, .companero-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Ejemplo de cómo agregar más funcionalidades
    console.log('JavaScript cargado correctamente');
});
