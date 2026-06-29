"""Extract the Bacino's logo and per-dish photos from the source PDF.

Each photo page in the PDF is two stacked photos inside a red/green border
frame, with a burned-in label at the bottom of each photo. We crop the top and
bottom halves, trim the colored border, drop the bottom label strip, downscale,
and save as JPEG into public/img/dishes.
"""
import os
import fitz  # PyMuPDF
from PIL import Image
import io

PDF = r"C:/Users/pablo/Downloads/Grill Menu 2026 By MZ.pdf"
ROOT = r"C:/Users/pablo/OneDrive/Desktop/baccinos-menu"
OUT_DISH = os.path.join(ROOT, "public", "img", "dishes")
OUT_CAT = os.path.join(ROOT, "public", "img", "cat")
OUT_IMG = os.path.join(ROOT, "public", "img")
os.makedirs(OUT_DISH, exist_ok=True)
os.makedirs(OUT_CAT, exist_ok=True)
os.makedirs(OUT_IMG, exist_ok=True)

# Drink category thumbnails: slug -> (1-based page, "top"|"bottom").
# Cropped square + centered for the circular nav cards.
CAT_PAGES = {
    "cocktails": (21, "top"),  # house-made cocktail cups
    "can-beer": (19, "top"),   # beer cans on grass
    "wine": (24, "top"),       # wine bottles
}

# page (1-based) -> (top_slug, bottom_slug)
PHOTO_PAGES = {
    3:  ("homemade-chips", "french-fries"),
    4:  ("housemade-meatballs", "chicken-wings"),
    5:  ("classic-bruschetta", "chicken-tenders"),
    6:  ("guacamole-pico", "caesar-salad"),
    7:  ("caprese-salad", "chopped-salad"),
    8:  ("housemade-chicken-salad", "house-garden-salad"),
    9:  ("grilled-chicken-panini", "meatball-sub"),
    10: ("bacinos-cheese-burger", "italian-beef"),
    11: ("wisconsin-brat", "chicago-dog"),
    12: ("italian-sub", "stuffed-portabella-burger"),
    13: ("spicy-chicken-panini", "manzo-panini"),
    15: ("chicken-salad-sandwich", "margherita-pizza"),
    16: ("prosciutto-arugula-pizza", "sausage-mushroom-pizza"),
    17: ("seasonal-pickle-pizza", "calabrese-pizza"),
}

DPI = 200
LEFT_FRAC = 0.11     # trim left frame + vertical "Bacino's" watermark
RIGHT_FRAC = 0.04    # trim right colored frame
# Explicit vertical bands (fraction of page height). Captions are burned in near
# the bottom edge of each photo, so each band stops short of the next caption.
TOP_BAND = (0.025, 0.405)
BOT_BAND = (0.505, 0.852)
MAX_W = 900


def render_page(doc, pidx):
    page = doc[pidx]
    pix = page.get_pixmap(dpi=DPI)
    img = Image.frombytes("RGB", (pix.width, pix.height), pix.samples)
    return img


def crop_save(img, box, slug):
    crop = img.crop(box)
    # downscale to MAX_W
    if crop.width > MAX_W:
        h = int(crop.height * MAX_W / crop.width)
        crop = crop.resize((MAX_W, h), Image.LANCZOS)
    path = os.path.join(OUT_DISH, slug + ".jpg")
    crop.save(path, "JPEG", quality=80, optimize=True)
    print("saved", slug, crop.size)


def crop_cat(img, half, slug):
    """Center-crop a square category thumbnail from the given photo half."""
    w, h = img.size
    x0 = int(w * LEFT_FRAC)
    x1 = int(w * (1 - RIGHT_FRAC))
    band = TOP_BAND if half == "top" else BOT_BAND
    crop = img.crop((x0, int(h * band[0]), x1, int(h * band[1])))
    # center square crop
    cw, ch = crop.size
    side = min(cw, ch)
    left = (cw - side) // 2
    top = (ch - side) // 2
    crop = crop.crop((left, top, left + side, top + side))
    crop = crop.resize((400, 400), Image.LANCZOS)
    path = os.path.join(OUT_CAT, slug + ".jpg")
    crop.save(path, "JPEG", quality=80, optimize=True)
    print("saved cat", slug, crop.size)


def main():
    doc = fitz.open(PDF)

    # --- logo from top of page 14 (index 13), white background ---
    p14 = render_page(doc, 13)
    w, h = p14.size
    # logo sits in the top band, roughly centered; include "Italian Grill"
    # subtitle and trim the wide side rule-bars.
    logo = p14.crop((int(w * 0.275), int(h * 0.018), int(w * 0.725), int(h * 0.145)))
    logo.save(os.path.join(OUT_IMG, "logo.png"))
    print("saved logo", logo.size)

    # --- dish photos ---
    for page1, (top_slug, bot_slug) in PHOTO_PAGES.items():
        img = render_page(doc, page1 - 1)
        w, h = img.size
        x0 = int(w * LEFT_FRAC)
        x1 = int(w * (1 - RIGHT_FRAC))
        crop_save(img, (x0, int(h * TOP_BAND[0]), x1, int(h * TOP_BAND[1])), top_slug)
        crop_save(img, (x0, int(h * BOT_BAND[0]), x1, int(h * BOT_BAND[1])), bot_slug)

    # --- drink category thumbnails ---
    for slug, (page1, half) in CAT_PAGES.items():
        crop_cat(render_page(doc, page1 - 1), half, slug)

    doc.close()


if __name__ == "__main__":
    main()
