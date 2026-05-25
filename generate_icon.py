"""
Gera os ícones do PWA Copa 2026 / Estiva GO
Saída: icon-192.png, icon-512.png, icon-180.png (Apple), favicon.png (32x32)
"""
import math
from PIL import Image, ImageDraw, ImageFont

IMPACT = '/System/Library/Fonts/Supplemental/Impact.ttf'
ARIAL_BOLD = '/System/Library/Fonts/Supplemental/Arial Bold.ttf'
HELVETICA = '/System/Library/Fonts/Helvetica.ttc'

# ── palette ──────────────────────────────────────────────────────────────────
C_BG_TOP    = (17,  24,  39)   # #111827 — topo
C_BG_BOT    = (30,  10,  60)   # fundo roxo escuro
C_PURPLE1   = (102, 126, 234)  # #667eea
C_PURPLE2   = (118,  75, 162)  # #764ba2
C_GOLD      = (220, 170,   0)  # dourado
C_WHITE     = (255, 255, 255)

def lerp_color(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))

def make_icon(size):
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # ── fundo gradiente (top → bottom) ───────────────────────────────────────
    for y in range(size):
        t = y / size
        color = lerp_color(C_BG_TOP, C_BG_BOT, t)
        draw.line([(0, y), (size - 1, y)], fill=color + (255,))

    # ── borda arredondada (máscara alpha) ────────────────────────────────────
    radius = size // 5
    mask = Image.new('L', (size, size), 0)
    mdraw = ImageDraw.Draw(mask)
    mdraw.rounded_rectangle([0, 0, size - 1, size - 1], radius=radius, fill=255)
    img.putalpha(mask)

    # ── faixa diagonal decorativa (gradiente roxo) ───────────────────────────
    overlay = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    od = ImageDraw.Draw(overlay)
    band_w = int(size * 0.55)
    for i in range(band_w):
        t = i / band_w
        c = lerp_color(C_PURPLE1, C_PURPLE2, t) + (60,)
        od.line([(0, size - band_w + i), (band_w - i, size - 1)], fill=c, width=2)
    img = Image.alpha_composite(img, overlay)
    img.putalpha(mask)

    draw = ImageDraw.Draw(img)

    # ── linha fina dourada central ────────────────────────────────────────────
    lw = max(1, size // 128)
    sep_y = int(size * 0.60)
    margin = size // 8
    draw.line([(margin, sep_y), (size - margin, sep_y)], fill=C_GOLD + (200,), width=lw)

    # ── "WE ARE" ──────────────────────────────────────────────────────────────
    we_size = max(10, int(size * 0.095))
    try:
        font_we = ImageFont.truetype(IMPACT, we_size)
    except:
        font_we = ImageFont.load_default()

    text_we = "WE ARE"
    bb = font_we.getbbox(text_we)
    tw = bb[2] - bb[0]
    ty = int(size * 0.14)
    draw.text(((size - tw) / 2, ty), text_we, font=font_we, fill=C_WHITE + (210,))

    # ── "26" ──────────────────────────────────────────────────────────────────
    n26_size = max(30, int(size * 0.46))
    try:
        font_26 = ImageFont.truetype(IMPACT, n26_size)
    except:
        font_26 = ImageFont.load_default()

    text_26 = "26"
    bb = font_26.getbbox(text_26)
    tw26 = bb[2] - bb[0]
    th26 = bb[3] - bb[1]
    ty26 = int(size * 0.19)

    # sombra leve
    shadow_off = max(2, size // 100)
    draw.text(((size - tw26) / 2 + shadow_off, ty26 + shadow_off), text_26,
              font=font_26, fill=(0, 0, 0, 120))
    # texto dourado
    draw.text(((size - tw26) / 2, ty26), text_26, font=font_26, fill=C_GOLD + (255,))

    # ── "ESTIVA GO" ───────────────────────────────────────────────────────────
    sub_size = max(8, int(size * 0.075))
    try:
        font_sub = ImageFont.truetype(ARIAL_BOLD, sub_size)
    except:
        font_sub = ImageFont.load_default()

    text_sub = "ESTIVA GO"
    bb = font_sub.getbbox(text_sub)
    tw_sub = bb[2] - bb[0]
    ty_sub = int(size * 0.67)
    draw.text(((size - tw_sub) / 2, ty_sub), text_sub,
              font=font_sub, fill=C_WHITE + (230,))

    # ── troféu emoji ─────────────────────────────────────────────────────────
    # usar círculos como estrelas decorativas
    star_y = int(size * 0.84)
    star_r = max(2, size // 50)
    spacing = int(size * 0.12)
    cx = size // 2
    for dx in [-spacing, 0, spacing]:
        sx = cx + dx
        draw.ellipse([sx - star_r, star_y - star_r, sx + star_r, star_y + star_r],
                     fill=C_GOLD + (200,))

    return img


def save_all():
    out = '/Volumes/macwindows/Copa2026_App'

    for size, name in [(512, 'icon-512.png'), (192, 'icon-192.png'),
                       (180, 'icon-180.png'), (32, 'favicon.png')]:
        icon = make_icon(size)
        path = f'{out}/{name}'
        icon.save(path, 'PNG', optimize=True)
        print(f'  ✓ {name} ({size}×{size})')

    print('Ícones gerados!')


if __name__ == '__main__':
    save_all()
