import sys
import re

with open('page_content.html', 'r', encoding='utf-8') as f:
    content = f.read()

def safe_search(pattern, text):
    match = re.search(pattern, text, re.IGNORECASE | re.DOTALL)
    return match.group(1).strip() if match else 'Not found'

title = safe_search(r'<title>(.*?)</title>', content)
h1 = safe_search(r'<h1[^>]*>(.*?)</h1>', content)
meta_desc = safe_search(r'<meta name="description" content="(.*?)"', content)
canonical = safe_search(r'<link rel="canonical" href="(.*?)"', content)

hreflangs = re.findall(r'<link rel="alternate" hreflang="([^"]*)" href="([^"]*)"', content, re.IGNORECASE)

img_count = content.count('<img')
data_nimg_count = content.count('data-nimg')

# Simple count for sponsored links
sponsored_count = content.count('rel="noopener sponsored"') + content.count('rel="sponsored noopener"')

json_lds = re.findall(r'<script type="application/ld\+json">(.*?)</script>', content, re.DOTALL)

print(f"Title: {title}")
print(f"H1: {h1}")
print(f"Meta Description: {meta_desc}")
print(f"Canonical: {canonical}")
print("Hreflangs:")
for lang, href in hreflangs:
    print(f"  {lang}: {href}")
print(f"Image Tag Count: {img_count}")
print(f"Data-nimg Count: {data_nimg_count}")
print(f"Affiliate Sponsored Links (approx): {sponsored_count}")
print(f"JSON-LD Count: {len(json_lds)}")

for i, jld in enumerate(json_lds):
    print(f"\n--- JSON-LD {i} ---")
    print(jld[:1000] + "..." if len(jld) > 1000 else jld)
