"""Web search tool — uses OpenAI WebSearchTool when available, falls back to crawl-based search."""

from opencmo.config import is_custom_provider

if not is_custom_provider():
    # OpenAI native — use built-in WebSearchTool (Responses API)
    from agents import WebSearchTool

    web_search = WebSearchTool()
else:
    # Custom provider (NVIDIA, DeepSeek, etc.) — WebSearchTool not available.
    # Provide a lightweight fallback via crawl4ai Google search.
    from agents import function_tool

    @function_tool
    async def web_search(query: str) -> str:
        """Search the web for real-time information.

        Args:
            query: The search query string.
        """
        try:
            from crawl4ai import AsyncWebCrawler
            from opencmo.tools.crawl import _extract_markdown

            url = f"https://www.google.com/search?q={query.replace(' ', '+')}&num=5"
            async with AsyncWebCrawler() as crawler:
                result = await crawler.arun(url=url)
            content = _extract_markdown(result)
            return content[:4000] if content else "No search results found."
        except Exception as e:
            return f"Web search failed: {e}. Try using other available tools instead."
