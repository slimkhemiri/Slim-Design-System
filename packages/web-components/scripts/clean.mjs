import fs from "node:fs";

for (const dir of ["dist", "www", "loader"]) {
  fs.rmSync(dir, { recursive: true, force: true });
}
console.log("Cleaned web-components outputs.");

