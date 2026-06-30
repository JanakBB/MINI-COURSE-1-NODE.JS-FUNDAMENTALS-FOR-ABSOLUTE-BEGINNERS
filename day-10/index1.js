import fs from "fs/promises";

// I know buffer to buffer: data to data work but I want to experiment that way: buffer --> string --> buffer
const data = await fs.readFile("photo.png");
const data1 = data.toString("base64");
const data3 = Buffer.from(data1, "base64");

fs.writeFile("copy.jpg", data3);

// Why doesn't work it?
