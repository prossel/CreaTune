// server.js
// Serveur WebSocket simple pour CreaTune

const WebSocket = require('ws');
const http = require('http');

// Création du serveur HTTP
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Serveur WebSocket CreaTune');
});

// Création du serveur WebSocket
const wss = new WebSocket.Server({ server });

// Gestion des connexions
wss.on('connection', (ws) => {
  console.log('Nouvelle connexion établie');
  
  // Message de bienvenue
  ws.send('Bienvenue sur le serveur WebSocket de CreaTune!');
  
  // Envoyer un message toutes les 5 secondes
  const interval = setInterval(() => {
    // Générer une combinaison aléatoire de fruit et saison
    const fruits = ['pomme', 'banane', 'orange', 'fraise', 'poire', 'raisin', 'pastèque', 'cerise', 'myrtille'];
    const seasons = ['printemps', 'été', 'automne', 'hiver'];
    
    const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
    const randomSeason = seasons[Math.floor(Math.random() * seasons.length)];
    
    const message = `Suggestion: ${randomFruit} en ${randomSeason}`;
    
    // ws.send(message);
  }, 5000);
  
  // Gestion des messages reçus
  ws.on('message', (message) => {
    console.log(`Message reçu: ${message}`);
    // Renvoyer un écho du message
    ws.send(`Écho: ${message}`);
    // Renvoie le message à tous les clients connectés
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN && client !== ws) {
        client.send(`Message de ${ws._socket.remoteAddress}: ${message}`);
      }
    });
  });
  
  // Gestion de la fermeture de connexion
  ws.on('close', () => {
    console.log('Connexion fermée');
    clearInterval(interval);
  });
  
  // Gestion des erreurs
  ws.on('error', (error) => {
    console.error('Erreur WebSocket:', error);
  });
});

// Démarrage du serveur
const PORT = process.env.PORT || 8080;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Serveur WebSocket démarré sur le port ${PORT}`);
});

/*
Pour démarrer le serveur:
1. Installez Node.js si ce n'est pas déjà fait
2. Installez les dépendances:
   npm init -y
   npm install ws
3. Démarrez le serveur:
   node server.js

Le serveur WebSocket sera accessible à l'adresse ws://localhost:8080
*/