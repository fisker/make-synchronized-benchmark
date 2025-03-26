export default async (code) => {
  const { format } = await import("prettier");
  return format(code, { parser: "meriyah" });
};
