import path from "node:path";
import { fileURLToPath } from "node:url";

export function resolveRepositoryRoot(): string {
  const configuredRoot = process.env.AIP_LIBRARY_REPO_ROOT;
  if (configuredRoot) {
    return path.resolve(configuredRoot);
  }

  const currentWorkingDirectory = process.cwd();
  const moduleDirectory = path.dirname(fileURLToPath(import.meta.url));
  const moduleRootCandidate = path.resolve(moduleDirectory, "..", "..", "..");

  if (currentWorkingDirectory.includes("apps/web")) {
    return path.resolve(currentWorkingDirectory, "..", "..");
  }

  if (moduleRootCandidate.includes("AIP_LIBRARY")) {
    return moduleRootCandidate;
  }

  return currentWorkingDirectory;
}
