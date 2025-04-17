declare module "*.png" {
  const value: any;
  export = value;
}

declare module "*.css" {
  const content: string;
  export default content;
}
