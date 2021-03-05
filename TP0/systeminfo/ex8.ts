import * as os from 'os';
import * as chalk from 'chalk';


let kb_mem: number = os.freemem() / 1024;
let mb_mem: number = kb_mem / 1024;
let cpu_endiannes: string = os.endianness();
let home_dir: string = os.homedir();

console.log(chalk.redBright(kb_mem));
console.log(chalk.yellow(mb_mem));
console.log(chalk.green(cpu_endiannes));
console.log(chalk.magenta(home_dir));