<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Visualizador AR</title>
  <script src="https://cdn.jsdelivr.net/npm/needle-engine@latest/dist/needle.js"></script>
  <style>
    body {
      margin: 0;
      overflow: hidden;
    }
    #ar-container {
      width: 100vw;
      height: 100vh;
      position: relative;
    }
  </style>
</head>
<body>
  <div id="ar-container"></div>
  <script>
    const params = new URLSearchParams(window.location.search);
    const modeloId = params.get('modelo') || 'Capibara';
    const escenarioId = params.get('escenario') || 'miCasa';

    const modelo = ModelStore.getModelo(modeloId);
    const escenario = ModelStore.getEscenario(escenarioId);

    const arContainer = document.getElementById('ar-container');

    const needle = new Needle.AR(arContainer);
    needle.init();

    needle.loadModel(modelo.url, {
      scale: modelo.scale.split(' ').map(Number),
      position: modelo.position.split(' ').map(Number)
    });

    needle.setBackground(escenario.url);
  </script>
</body>
</html>