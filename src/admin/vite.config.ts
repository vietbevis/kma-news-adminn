import { mergeConfig, type UserConfig } from "vite";

export default (config: UserConfig) => {
  return mergeConfig(config, {
    server: {
      allowedHosts: ["localhost", "127.0.0.1", "kma-admin.vittapcode.id.vn"],
    },
  });
};
