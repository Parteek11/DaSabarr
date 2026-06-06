import { StitchToolClient } from "@google/stitch-sdk";
import { stitch } from "@google/stitch-sdk";
import fs from "fs";
import path from "path";

const API_KEY = process.env.STITCH_API_KEY;
const TARGET_PROJECT_ID = process.env.STITCH_PROJECT_ID || "6354927256019833259";

const client = new StitchToolClient({ apiKey: API_KEY });
await client.connect();

const detail = await client.callTool("get_project", {
  name: `projects/${TARGET_PROJECT_ID}`,
});
console.log("Project:", detail?.title || detail?.displayName);

const project = stitch.project(TARGET_PROJECT_ID);
const screens = await project.screens();
console.log("Screens count:", screens.length);

const outDir = path.join(process.cwd(), ".stitch", "designs");
fs.mkdirSync(outDir, { recursive: true });

// Save design system from project
if (detail?.designTheme?.designMd) {
  fs.writeFileSync(
    path.join(process.cwd(), ".stitch", "DESIGN.md"),
    detail.designTheme.designMd
  );
}

const exported = [];

for (const screen of screens) {
  const screenId = screen.id || screen.screenId;
  let screenTitle = screen.title || screen.name;

  // Get full screen details
  try {
    const screenDetail = await client.callTool("get_screen", {
      name: `projects/${TARGET_PROJECT_ID}/screens/${screenId}`,
    });
    screenTitle = screenDetail?.title || screenDetail?.name || screenTitle;
    console.log("Fetching:", screenTitle || screenId);
  } catch {
    console.log("Fetching:", screenId);
  }

  try {
    const htmlUrl = await screen.getHtml();
    const imageUrl = await screen.getImage();
    const slug = String(screenTitle || screenId)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    const meta = { id: screenId, title: screenTitle, htmlUrl, imageUrl, slug };
    fs.writeFileSync(path.join(outDir, `${slug}.json`), JSON.stringify(meta, null, 2));

    if (htmlUrl) {
      const res = await fetch(htmlUrl);
      const html = await res.text();
      fs.writeFileSync(path.join(outDir, `${slug}.html`), html);
      console.log(`  Saved ${slug}.html (${html.length} bytes)`);
    }
    exported.push(meta);
  } catch (e) {
    console.error("  Error:", e.message);
  }
}

fs.writeFileSync(
  path.join(process.cwd(), ".stitch", "metadata.json"),
  JSON.stringify(
    {
      projectId: TARGET_PROJECT_ID,
      title: detail?.title,
      screens: exported,
    },
    null,
    2
  )
);

await client.close();
console.log("Done! Exported", exported.length, "screens");
