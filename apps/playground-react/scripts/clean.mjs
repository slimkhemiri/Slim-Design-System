import fs from "node:fs";

for (const dir of ["dist", ".vite"]) {
  fs.rmSync(dir, { recursive: true, force: true });
}
console.log("Cleaned playground outputs.");

