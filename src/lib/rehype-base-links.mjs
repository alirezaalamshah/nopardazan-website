/**
 * Rehype plugin: prefixes root-relative <a href="/..."> links found inside
 * rendered Markdown content with the configured Astro `base`, since Astro
 * does not rewrite link hrefs written inside content-collection Markdown.
 */
export default function rehypeBaseLinks(base) {
  const prefix = base.replace(/\/$/, '');
  return (tree) => {
    if (!prefix) return;
    walk(tree);
  };

  function walk(node) {
    if (node.type === 'element' && node.tagName === 'a' && node.properties) {
      const href = node.properties.href;
      if (typeof href === 'string' && href.startsWith('/') && !href.startsWith(prefix + '/')) {
        node.properties.href = prefix + href;
      }
    }
    if (Array.isArray(node.children)) {
      for (const child of node.children) walk(child);
    }
  }
}
