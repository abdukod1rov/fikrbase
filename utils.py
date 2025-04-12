import re


def preserve_html_attributes(text):
    """Preserve HTML attributes like align="center" in p and other tags"""

    # Handle p align="center" and similar attributes
    text = re.sub(r'<(p|div|h[1-6])\s+align="([^"]+)">',
                  r'<\1 style="text-align: \2;">', text)

    # Handle image attributes
    # Fix for image attributes without using atomic groups
    text = re.sub(r'<img\s+src="([^"]+)"\s+alt="([^"]+)"(\s+width="([^"]+)")?(\s+height="([^"]+)")?>',
                  lambda m: f'<img src="{m.group(1)}" alt="{m.group(2)}" ' +
                            (f'width="{m.group(4)}" ' if m.group(4) else '') +
                            (f'height="{m.group(6)}" ' if m.group(6) else '') +
                            '>', text)

    return text


def post_process_html(html):
    """Apply any HTML post-processing needed"""

    # Handle badges and special elements that might need styling
    html = re.sub(r'<img\s+src="([^"]+badge[^"]+)"\s+alt="([^"]+)">',
                  r'<img src="\1" alt="\2" class="badge">', html)

    # Fix apostrophes if they're being problematic
    html = html.replace("&#39;", "'")

    # Add styling for specific elements common in documentation
    html = re.sub(r'<div class="termy">',
                  r'<div class="termy terminal-container">', html)

    return html
