files = [
    "hashgraphvc.com/index.html",
    "hashgraphvc.com/privacy-policy.html",
    "hashgraphvc.com/companies/debyt.html",
    "hashgraphvc.com/companies/rava.html",
    "hashgraphvc.com/companies/100s.html",
    "hashgraphvc.com/companies/bloxtel.html",
]

OLD = """.nav-overlay__item:last-child { border-bottom: 1px solid rgba(155,184,225,0.1); }"""

NEW = """.nav-overlay__nav { border-bottom: 1px solid rgba(155,184,225,0.1); }"""

updated = 0
for f in files:
    with open(f, "r", encoding="utf-8") as fh:
        content = fh.read()

    if OLD in content:
        content = content.replace(OLD, NEW)
        with open(f, "w", encoding="utf-8") as fh:
            fh.write(content)
        print(f"✅ Updated: {f}")
        updated += 1
    else:
        print(f"⚠️  Not found: {f}")

print(f"\nDone. {updated}/{len(files)} files updated.")
