import * as os from 'os';
import * as fs from 'fs';

let kb_mem: number = os.freemem() / 1024;
let mb_mem: number = kb_mem / 1024;
let cpu_endiannes: string = os.endianness();
let home_dir: string = os.homedir();

let final_string: string = "Memoire kB=" + kb_mem + "; Memoire MB=" + mb_mem + "; Endianite=" + cpu_endiannes + "; Repertoire de base=" + home_dir;

console.log(final_string);

try {
    fs.writeFileSync('./outputEx6.txt', final_string);
} catch (err) {
    console.log(err);
}
