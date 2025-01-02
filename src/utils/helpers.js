export function truncateText(text, limit = 100) {
  return text?.length > limit ? text.slice(0, limit) + "..." : text;
}

export function getResourceDetails(resources, location) {
  const resource = resources.find((res) => location.pathname === `/${res.url}`);
  return resource;
}
