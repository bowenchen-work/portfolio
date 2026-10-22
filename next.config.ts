import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // CLAUDE.md is this repo's only instruction file. Without this,
  // `next dev` writes an AGENTS.md whenever it detects a coding agent.
  agentRules: false,
};

export default nextConfig;
