import * as os from 'os';

console.log("Repertoire de base: " + os.homedir());
console.log("Hote systeme d'exploitation: " + os.hostname());
console.log("Memoire disponible en kB: " + (os.freemem()/1024) + "kB");