export interface Module {
  title: string;
  description: string;
  github: string;
  tags: string[];
}

export const showcaseModules: Module[] = [
  {
    title: "jmv",
    description: "The core jamovi library. A comprehensive suite of standard statistical analyses, including t-tests, ANOVA, linear regression, and more. This is the foundation of the jamovi analytical experience.",
    github: "https://github.com/jamovi/jmv",
    tags: ["Core", "Statistics", "Standard"]
  },
  {
    title: "jmvplots",
    description: "The official plotting library for jamovi. Providing high-performance, beautiful, and interactive visualizations built on top of ggplot2, tailored specifically for the jamovi interface.",
    github: "https://github.com/jamovi/jmvplots",
    tags: ["Visualization", "Plots", "Core"]
  }
];
