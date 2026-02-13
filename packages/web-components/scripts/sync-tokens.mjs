import fs from "node:fs";
import path from "node:path";

const src = path.resolve("../tokens/dist/tokens.css");
const out = path.resolve("src/global/generated/tokens.css");

if (!fs.existsSync(src)) {
  console.error(
    `Tokens file not found at ${src}. Did you run "pnpm --filter @slimkhemiri/tokens build"?`
  );
  process.exit(1);
}

fs.mkdirSync(path.dirname(out), { recursive: true });
fs.copyFileSync(src, out);
console.log(`Synced tokens to ${out}`);

