var states = {
    Argentina: ['Buenos Aires', 'Córdoba', 'Santa Fe', 'Mendoza'],
    Brasil: ['São Paulo', 'Río de Janeiro', 'Bahía', 'Paraná'],
    Chile: ['Santiago', 'Valparaíso', 'Biobío', 'Araucanía'],
    Colombia: ['Bogotá', 'Antioquia', 'Valle del Cauca', 'Atlántico'],
    México: ['Ciudad de México', 'Jalisco', 'Nuevo León', 'Veracruz']
};

// Obtener los elementos select del DOM
var countrySelect = document.getElementById('country');
var stateSelect = document.getElementById('state');

// Agregar un evento de cambio al select de países
countrySelect.addEventListener('change', function() {
    // Obtener el valor seleccionado en el select de países
    var country = this.value;

    // Vaciar el select de departamentos/provincias
    stateSelect.innerHTML = '';

    // Si no se ha seleccionado ningún país, desactivar el select de departamentos/provincias
    if (country === '') {
        stateSelect.disabled = true;
    } else {
        // Activar el select de departamentos/provincias
        stateSelect.disabled = false;

        // Obtener la lista de departamentos/provincias del país seleccionado
        var countryStates = states[country];

        // Agregar cada departamento/provincia a la lista del select
        countryStates.forEach(function(state) {
            var option = document.createElement('option');
            option.value = state;
            option.text = state;
            stateSelect.add(option);
        });
    }
});