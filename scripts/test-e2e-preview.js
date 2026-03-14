const url = process.argv[2];

if (!url) {
  console.error("Usage: npm run test:e2e:preview -- <url>");
  process.exit(1);
}

process.env.BASE_URL = url;

const { spawnSync } = await import("child_process");
const result = spawnSync("npx", ["playwright", "test", "--reporter=list"], {
  stdio: "inherit",
  env: process.env,
});

process.exit(result.status);
