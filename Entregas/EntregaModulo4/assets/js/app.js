class AdminUsuarios {

    constructor() {
        this.usuarios = [];
        this.cargarData();
    }

    // ── Carga la data desde la API usando XMLHttpRequest ──
    cargarData() {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

        xhr.onload = () => {
            if (xhr.status === 200) {
                this.usuarios = JSON.parse(xhr.responseText);
                console.log("Data cargada correctamente:", this.usuarios.length, "usuarios.");
            } else {
                console.error(" Error al cargar la data:", xhr.status);
            }
        };

        xhr.onerror = () => {
            console.error(" Error de red al hacer la petición.");
        };

        xhr.send();
    }

    //  Metodo 1: 
    listarNombres() {
        console.log("=== NOMBRES DE USUARIOS ===");
        this.usuarios.forEach(function(usuario) {
            console.log("- " + usuario.name);
        });
    }

    //  Metodo 2:
    buscarInfoBasica() {
        let nombre = prompt("Ingrese el nombre del usuario:");
        let usuario = this.usuarios.find(function(u) {
            return u.name.toLowerCase() === nombre.toLowerCase();
        });

        if (usuario) {
            console.log("=== INFO BÁSICA ===");
            console.log("Username: " + usuario.username);
            console.log("Email:    " + usuario.email);
        } else {
            console.log("❌ Usuario no encontrado.");
        }
    }

    // Metodo 3: Buscar usuario y mostrar su direcciin 
    buscarDireccion() {
        let nombre = prompt("Ingrese el nombre del usuario:");
        let usuario = this.usuarios.find(function(u) {
            return u.name.toLowerCase() === nombre.toLowerCase();
        });

        if (usuario) {
            let dir = usuario.address;
            console.log("=== DIRECCIÓN ===");
            console.log("Calle:    " + dir.street);
            console.log("Suite:    " + dir.suite);
            console.log("Ciudad:   " + dir.city);
            console.log("Zip:      " + dir.zipcode);
            console.log("Lat/Lng:  " + dir.geo.lat + ", " + dir.geo.lng);
        } else {
            console.log("❌ Usuario no encontrado.");
        }
    }

    // Metodo 4: Buscar usuario y mostrar info avanzada
    buscarInfoAvanzada() {
        let nombre = prompt("Ingrese el nombre del usuario:");
        let usuario = this.usuarios.find(function(u) {
            return u.name.toLowerCase() === nombre.toLowerCase();
        });

        if (usuario) {
            let comp = usuario.company;
            console.log("=== INFO AVANZADA ===");
            console.log("Teléfono:    " + usuario.phone);
            console.log("Sitio web:   " + usuario.website);
            console.log("--- Compañía ---");
            console.log("Nombre:      " + comp.name);
            console.log("Frase clave: " + comp.catchPhrase);
            console.log("BS:          " + comp.bs);
        } else {
            console.log("❌ Usuario no encontrado.");
        }
    }

    //  Metodo 5: Listar todas las compañías 
    listarCompanias() {
        console.log("=== COMPAÑÍAS ===");
        this.usuarios.forEach(function(usuario) {
            console.log("🏢 " + usuario.company.name);
            console.log("   \"" + usuario.company.catchPhrase + "\"");
        });
    }

    //  Metodo 6: Listar nombres ordenados alfabeticamente 
    listarNombresOrdenados() {
        let ordenados = [...this.usuarios].sort(function(a, b) {
            return a.name.localeCompare(b.name);
        });

        console.log("=== NOMBRES ORDENADOS A-Z ===");
        ordenados.forEach(function(usuario) {
            console.log("- " + usuario.name);
        });
    }
}


const admin = new AdminUsuarios();