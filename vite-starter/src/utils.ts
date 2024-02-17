export function kebabToCamelCase(colorName: string): string {
  return colorName
    .replaceAll("-", " ")
    .replace(/\b([a-z])/g, (match) => match.toUpperCase());
}
