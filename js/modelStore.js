const ModelStore = {
    modelos: {
        'Capibara': {
            nombre: 'Capibara',
            url: './assets/models/capibara.glb',
            scale: '2 2 2',
            position: '0 0 0'
        },
        'Cerdo': {
            nombre: 'Cerdo',
            url: './assets/models/cerdo.glb',
            scale: '0.6 0.6 0.6',
            position: '0 0.68 0'
        },

        /*         Toca estandatizar los modelos para que tengan la misma escala y posición -
                     eso se hace con un editor como Blender*/

                    
        'Conejo': {
            nombre: 'Conejo',
            url: './assets/models/conejo.glb',
            scale: '1 1 1',
            position: '0 -0.65 -5.45'
        },
        'Filtro': {
            nombre: 'Filtro',
            url: './assets/models/filtro.glb',
            scale: '0.5 0.5 0.5',
            position: '-2.8 0.5 3'
        },
        'Gallina': {
            nombre: 'Gallina',
            url: './assets/models/gallina.glb',
            scale: '0.5 0.5 0.5',
            position: '0 1 0'
        },
        'Tanque': {
            nombre: 'Tanque',
            url: './assets/models/tanque.glb',
            scale: '0.065 0.065 0.065',
            position: '0 0 0'
        }
    },

    escenarios: {
        'zonaNieve': {
            nombre: 'zonaNieve',
            url: './assets/panoramas/zonaNieve.webp'
        },
        'casa': {
            nombre: 'casa',
            url: './assets/panoramas/casa.png'
        },
        'jardin': {
            nombre: 'Jardín',
            url: './assets/panoramas/jardin.jpg'
        },
        'Cancha de Pasto': {
            nombre: 'Cancha de Pasto',
            url: './assets/panoramas/zona01.jpg'
        },
        'Entrada': {
            nombre: 'Entrada',
            url: './assets/panoramas/zona02.jpg'
        },
        'zonaCienciasBasicas': {
            nombre: 'zonaCienciasBasicas',
            url: './assets/panoramas/zona03.jpg'
        },

    },

    getModelo(id) {
        return this.modelos[id] || null;
    },

    getEscenario(id) {
        return this.escenarios[id] || null;
    },

    listModelos() {
        return Object.keys(this.modelos);
    },

    listEscenarios() {
        return Object.keys(this.escenarios);
    }
};

// Make it available globally
window.ModelStore = ModelStore;