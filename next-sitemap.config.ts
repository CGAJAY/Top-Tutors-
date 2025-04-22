// next-sitemap.config.ts
import type { IConfig } from "next-sitemap";

const config: IConfig = {
    siteUrl: "https://www.toptutorshub.com/#welcome",
    generateRobotsTxt: true,
    autoLastmod: true,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],
    },
};

export default config;
