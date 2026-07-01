// // A CLI tool to display system information
import os from "os";

// console.log("Platform: ", os.platform());
// console.log("Release:", os.release());
// console.log("Type:", os.type());
// console.log(("Arch:", os.arch()));
// console.log("Hostname:", os.hostname());
// console.log("uptime:", os.uptime() / 3600);
// console.log("Uptime:", `${Math.floor(os.uptime() / 3600)} hours`);

// // CPU
// console.log("Cores:", os.cpus().length);
// console.log("Model:", os.cpus()[0].model);
// console.log("Model:", os.cpus()[0].speed, "MHz");

// // Memory
// console.log(
//   `Total memory: ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`,
// );
// console.log(
//   `Free memory: ${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)} GB`,
// );

// Network


for (const [name, interfaces] of Object.entries( os.networkInterfaces())) {
  const ipv4 = interfaces.find((iface) => iface.family === "IPv4");
  if (ipv4) {
    console.log(`${name}: ${ipv4.address}`);
  }
}


