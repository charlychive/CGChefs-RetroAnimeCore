#!/usr/bin/env python3
"""
convert_to_webp.py — batch-convert CGChefs nodegroup screenshots to WebP.

Run this locally (not part of the site's runtime) whenever you add a batch
of new PNG/JPG node-preview screenshots. It only touches images inside
per-category subfolders of images/ (e.g. images/compositor/, images/shader/),
so the root-level brand asset (images/cgchefs-logo.png) is left alone.

Usage:
    python scripts/convert_to_webp.py
    python scripts/convert_to_webp.py --quality 85
    python scripts/convert_to_webp.py --dir images --delete-originals
    python scripts/convert_to_webp.py --dry-run

Requires Pillow:
    pip install Pillow

What it does NOT do:
  - It does not edit your js/data/*.js files. After converting, update the
    `images.preview` path for any changed nodegroup from ".png"/".jpg" to
    ".webp" — the script prints an OLD -> NEW list at the end to make that
    a quick find/replace.
  - It does not touch anything directly inside the images/ root folder
    (only subfolders), so images/cgchefs-logo.png stays a PNG.
"""

import argparse
import sys
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    sys.exit(
        "Pillow is required but not installed.\n"
        "Install it with:  pip install Pillow"
    )

SOURCE_EXTS = {".png", ".jpg", ".jpeg"}


def find_source_images(root: Path):
    """Yield image files inside subfolders of `root` only (skip root itself)."""
    for path in sorted(root.rglob("*")):
        if not path.is_file():
            continue
        if path.suffix.lower() not in SOURCE_EXTS:
            continue
        if path.parent == root:
            # Skip files directly in images/ (e.g. the site logo) —
            # only per-category subfolders are node-screenshot territory.
            continue
        yield path


def convert(path: Path, quality: int, dry_run: bool) -> Path:
    dest = path.with_suffix(".webp")
    if dry_run:
        return dest
    with Image.open(path) as im:
        # Flatten transparency onto nothing needed — WebP supports alpha
        # natively, so just save straight through.
        im.save(dest, "WEBP", quality=quality, method=6)
    return dest


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--dir", default="images", help="Root images folder (default: images)")
    ap.add_argument("--quality", type=int, default=80, help="WebP quality 0-100 (default: 80)")
    ap.add_argument("--delete-originals", action="store_true", help="Delete the source PNG/JPG after a successful conversion")
    ap.add_argument("--dry-run", action="store_true", help="Show what would happen without writing any files")
    args = ap.parse_args()

    root = Path(args.dir)
    if not root.is_dir():
        sys.exit(f"'{root}' is not a directory. Run this from your site's project root, or pass --dir.")

    sources = list(find_source_images(root))
    if not sources:
        print(f"No PNG/JPG files found under subfolders of '{root}'. Nothing to do.")
        return

    print(f"Found {len(sources)} image(s) to convert (quality={args.quality}, dry_run={args.dry_run}):\n")

    renames = []
    before_total = 0
    after_total = 0

    for src in sources:
        before_size = src.stat().st_size
        before_total += before_size
        dest = convert(src, args.quality, args.dry_run)

        if args.dry_run:
            print(f"  {src}  ->  {dest}  ({before_size/1024:.1f} KB -> ?)")
        else:
            after_size = dest.stat().st_size
            after_total += after_size
            saved_pct = 100 * (1 - after_size / before_size) if before_size else 0
            print(f"  {src}  ->  {dest}  ({before_size/1024:.1f} KB -> {after_size/1024:.1f} KB, -{saved_pct:.0f}%)")
            if args.delete_originals:
                src.unlink()

        renames.append((src, dest))

    if not args.dry_run and before_total:
        saved_pct = 100 * (1 - after_total / before_total)
        print(f"\nTotal: {before_total/1024:.1f} KB -> {after_total/1024:.1f} KB (-{saved_pct:.0f}%)")

    print("\nUpdate these paths in your js/data/*.js files (images.preview):")
    for src, dest in renames:
        print(f"  {src.as_posix()}  ->  {dest.as_posix()}")

    if not args.delete_originals and not args.dry_run:
        print(
            "\nOriginals were kept alongside the new .webp files. Once you've "
            "updated the data-file references and confirmed the site looks "
            "right, delete the old PNG/JPG files (or re-run with "
            "--delete-originals next time)."
        )


if __name__ == "__main__":
    main()
