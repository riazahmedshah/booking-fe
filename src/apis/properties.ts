import type { Property } from './types'

const properties: Property[] = [
  {
    id: 'whispering-pines-a-frame',
    title: 'Whispering Pines A-Frame',
    location: 'Lake Tahoe, California',
    dates: 'Oct 12 – 17',
    rating: 4.92,
    price: 340,
    image: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2Xt2p8EMzkiOGVDzvG_dlYyznRO26vx1JeSMn6gBEKyuGuGFiZRNxe5EP5EZGieEx859Pt3Chj08twmVLUQqI3oQqLByIKHQcn6NjJGgwWitM_Sv1L-kGKcj4HQwGIdyUwJulrHHrzmnRUsnggczjGRvD8Ym8orTvxbm2fwBw_EZIanfSL0eHbqPmQ9aZRpzpRpopmzNiVg0eUeDoXVcE4yX3C5anl7ZQtnJ7eAwH_KEsBCpCd1IO3g',
      alt: 'A cinematic, high-resolution photograph of a modern A-frame cabin nestled in a misty evergreen forest. The architectural design features large glass windows reflecting the soft morning light. The color palette is dominated by deep forest greens, warm cedar wood tones, and cool grays, creating a serene and premium atmosphere for stayz. The lighting is ethereal and diffused, emphasizing a peaceful retreat.',
    },
  },
  {
    id: 'azure-horizon-villa',
    title: 'Azure Horizon Villa',
    location: 'Santorini, Greece',
    dates: 'Nov 5 – 10',
    rating: 4.88,
    price: 520,
    image: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSGj8DWFfLrtmngUY3VQ2Bt-Vz6LUAgkJCLa2g7CBaQNu2ntnQBBZcIV_kJeAe1ZU-6-96tPqctb49ZO1mReGJTmLx3bBkKCLI_xfuUojSVDJ03YfCcjoTJKhvHZd9iutY8WmfdQ1HU_dNP8tYpfWcY33GXkX33aQM6MxnAdg6Ev5NHPhH61evEdvOWAmM9aU4wnR_KwcRn-4_xQimTwmCMt8iDAgMX8ZjrmIPpGDylYDxKybs-Nxdog',
      alt: 'A minimalist architectural villa located on a rugged coastline overlooking the turquoise Mediterranean Sea. The building features clean white lines, natural stone accents, and an infinity pool that blends into the horizon. The lighting is vibrant golden hour sunlight, highlighting the luxurious textures and serene mood of this stayz property. High-end property photography style with balanced compositions.',
    },
  },
  {
    id: 'glass-canopy-treehouse',
    title: 'Glass Canopy Treehouse',
    location: 'Ubud, Bali',
    dates: 'Dec 1 – 8',
    rating: 4.95,
    price: 210,
    image: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3FesNa2lhcVivLtQlmynxo8gxzA4DECNhIVPaImp1HzB4zWko0lODcGI9MqeFh8ZTRzMfK0qXnaozuR18WiCX5gP-S-vhASvEgMlz7D0jFfLqDSzQZ4tlVMltIR0Ehn_bPUGsTuPPE76wN9Dxx2WYpKM0l16ia7gQ7rTt1D-cFkUxmuooRaqdGeOYiEuSrdTR6JM58uF8O3PGs_dMiX9YwcZnySbtERE1_MghD38bNG_iVoCdE7KqQw',
      alt: 'A luxurious glass treehouse elevated within a lush tropical rainforest canopy. The structure is built with dark bamboo and floor-to-ceiling glass, offering a panoramic view of the jungle. Interior lights glow warmly against the twilight blue sky. The aesthetic is modern-organic, capturing the essence of a serene stayz getaway with sophisticated lighting and deep tropical green tones.',
    },
  },
  {
    id: 'elderberry-cottage',
    title: 'Elderberry Cottage',
    location: 'Cotswolds, UK',
    dates: 'Sep 28 – Oct 3',
    rating: 4.85,
    price: 185,
    image: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBF8CyUb1KPAt324vnA0kpol8xvrs4j3ZRhJd7gROHT4fCLkSXlP0mlHDjUsVvx_3_ACqfFpvIAI3Qd3FoHoTFn7YTOUgXFCsoTikXvVriu2b7ob2Rj2pkqr87tSorPJpglKhqzGt7HMmE-z3I7TT-7PCN7uoYHMgpkTDscwEJw6R6O3aFsM6ckFSUDVtbgjcAqJgercDVB5HqzP3VcWcbk6mmARqkgP4Rh64HiHr06YE8m2d6qS1rGmA',
      alt: 'A charming stone cottage in the rolling hills of the English countryside. The garden is filled with wildflowers and a rustic wooden fence. Soft, warm sunlight filters through the trees, casting gentle shadows. The mood is cozy, historical, and deeply peaceful, perfectly aligned with the stayz brand identity of providing curated sanctuaries. High-quality editorial travel photography style.',
    },
  },
  {
    id: 'lunar-peak-sanctuary',
    title: 'Lunar Peak Sanctuary',
    location: 'Joshua Tree, USA',
    dates: 'Oct 20 – 25',
    rating: 4.98,
    price: 450,
    image: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjV0MdzTqhM2BNjIhFU8TzjI6xyrP7QLhGiNWhTWbKUSv2RF5O2_-shGb5SHkbrvhyr5fBmnVVUoCKriEq5od6F-_h_ob0WZ2Gmzoq2KjDH5Q-IBUDYXwTsVIdO0F8CvszSOPhSPDcORpzU-MqifTbF5MIMNAEKg-QwLZkYJkERPWNqxDABQ01irt4kLXjrgb0hutlfMnTR9_bgCzgy0AxIegh4dqNV1qtTTj-cyJu03cY2SGmXL-t9g',
      alt: 'A high-end desert retreat with minimalist geometric architecture, situated among dramatic rock formations under a clear starry night sky. The property features a central fire pit and sunken seating area. The lighting is a mix of warm artificial glows and cool moonlight. The aesthetic is futuristic yet grounded, emphasizing the premium sanctuary experience of stayz. Ultra-detailed, clean lines.',
    },
  },
  {
    id: 'mirror-lake-float',
    title: 'Mirror Lake Float',
    location: 'Lake District, Chile',
    dates: 'Nov 12 – 18',
    rating: 4.9,
    price: 295,
    image: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCL5i23IsJj2Gt3FSzwrMVulUs3Xe1b2pibWg82_5FmyVOKRNxymP0oxcDcSHIlhENcV4uaWMsgZ8vOhTMnNVs7HapZ56YeMwkG009ElePkd_IGfncI8zOq7488ja85OFqkPPvmQOZkIJL0VYsO_SJhQXQrFUwFbqhlCacxb1d7IVOmcv8vlFzJnnq6pU12VOjfgHIMbWSB1eIGNKT0vCAf__J6vFzCjMEsuBDv7zP-p6izvzaXJWoI9A',
      alt: 'A modern floating house on a serene, mirror-like lake surrounded by autumn-colored mountains. The house is constructed with sustainable light wood and features large observation decks. The scene is peaceful with ripples in the water. Soft afternoon lighting highlights the vibrant oranges and yellows of the foliage. Premium travel photography for stayz, showcasing a unique and tranquil accommodation.',
    },
  },
  {
    id: 'summit-ridge-lodge',
    title: 'Summit Ridge Lodge',
    location: 'Aspen, Colorado',
    dates: 'Dec 22 – 28',
    rating: 4.97,
    price: 890,
    image: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9NXPw5S2rVXhEVpJ7Bb0CvnCLOQAR64zfUVgS_g5AUQrgT0dt8lXNHZ_CzlSW42xUxPF-BVKd562vVXIkE4JoBLeco4Xl7pfqMWHZ61i5jPXDV27c1R_i4SvjDGeBe1z2qsBOWhjaoivsR-iudqjwcPIkmCQmiPx3u0aMuhvRw2CCrTCwJ-p9rCs_LYyMEtAyr2cCESogQ2CT6uL1mffMlIw7Sn7t32VW2WytYcyEFuwAiXw3VsNq5A',
      alt: 'A high-altitude mountain lodge with a rustic-modern design, featuring heavy timber beams and massive stone fireplaces. Outside, a light snowfall coats the surrounding pine trees. The interior is visible through large windows, radiating warmth and comfort. The composition is wide and inviting, capturing the premium winter sanctuary feel of stayz. Cold blue exterior tones vs warm orange interior glows.',
    },
  },
  {
    id: 'savanna-silk-tents',
    title: 'Savanna Silk Tents',
    location: 'Maasai Mara, Kenya',
    dates: 'Oct 5 – 12',
    rating: 4.99,
    price: 610,
    image: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXObZODYUAcS-0Hnev6rIVSuAcZa4HVLszSOzJGCCEFkny0vySJy-XotNyaxjQgzyQEJeHwquP4gvxG1jCpgGQpwe2SUtqwzRXB5ql3juEBDpKl9c0qPehwhoJulfySGJRGAcCXd4UJ3OeXV6HcBCm95WOtCvyl1FELWcdfT96BSUragjCphdmdGBfab6AnplbNAlHFGocHOFY7OgywiUQEofaPc5K49SFPupYl87X2t5fk4iP86DHCA',
      alt: 'An eco-conscious safari tent on a private reserve in Africa, overlooking a vast savanna at sunset. The tent is elegantly furnished with neutral linens and wooden furniture. The sky is a dramatic gradient of purple and gold. The overall mood is adventurous yet incredibly comfortable and exclusive. High-end lifestyle photography for stayz, emphasizing unique nature-connected experiences.',
    },
  },
]

const propertyDetail: Property = {
  id: 'misty-forest-sanctuary',
  title: 'Misty Forest Sanctuary: A-Frame Retreat',
  location: 'Lake Tahoe, California',
  dates: 'Oct 12 – 17',
  rating: 4.92,
  reviewsCount: 128,
  price: 340,
  image: {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDC75bblKUNEA_O8589mqzJUl9R-WCKLgTPN3YaJoWtBsII99NN8HDpD16ob-PI-nK3NOVs34dJImyEVetuRTWVq3TM-5JCPEZwPz4whkwJ1gFXWgyp8tnXwnc4cglxrXuPV70bJrD3STKd3PSoLEmhrQ2PHfeWggMQqXFUW7La8dUofEUuDPvnGlpi1zr0sSCPeFKajERDvtgAqVKH7NzbUBsYTHP8FkFsgQ5PMWTPGAoIJWGsPSEO6Q',
    alt: 'A wide cinematic shot of a stunning modern black A-frame cabin at dawn, surrounded by towering pine trees shrouded in heavy mountain mist. The cabin glows with warm interior yellow light through massive triangular glass windows, contrasting with the cool, serene blue-gray forest landscape. The architectural lines are sharp and elegant, perfectly integrated into the pristine Lake Tahoe wilderness.',
  },
  images: [
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDC75bblKUNEA_O8589mqzJUl9R-WCKLgTPN3YaJoWtBsII99NN8HDpD16ob-PI-nK3NOVs34dJImyEVetuRTWVq3TM-5JCPEZwPz4whkwJ1gFXWgyp8tnXwnc4cglxrXuPV70bJrD3STKd3PSoLEmhrQ2PHfeWggMQqXFUW7La8dUofEUuDPvnGlpi1zr0sSCPeFKajERDvtgAqVKH7NzbUBsYTHP8FkFsgQ5PMWTPGAoIJWGsPSEO6Q',
      alt: 'A wide cinematic shot of a stunning modern black A-frame cabin at dawn, surrounded by towering pine trees shrouded in heavy mountain mist. The cabin glows with warm interior yellow light through massive triangular glass windows, contrasting with the cool, serene blue-gray forest landscape. The architectural lines are sharp and elegant, perfectly integrated into the pristine Lake Tahoe wilderness.',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTB1qqNMeqpVJ-Wa0w2wS_adADRp2pc5bgMjsvCLvhgzOwBci3yFn8p23vp8ktOIkzfC5cDAb6OPWFAUzBOvOEPd6y0islUkVyV1KoKOF1SasKMMrLTNwNb0nup10bAkeTqxgm-BbbenGopoqMV8et99bDa59Bubv16hquI5NyuyXkAlkL8vrAmoxB8som2ibt1hcJFHuYKfb4ilGr0EiFqU0lpcBAsnAh7pUdzqE-pg7AI6Bf6nfhKA',
      alt: 'The minimalist interior of a modern cabin featuring light wood walls and a soaring ceiling. A plush cream-colored sofa sits before a minimalist black wood-burning stove, with views of the foggy pine forest visible through a floor-to-ceiling window. The lighting is soft and natural, emphasizing a clean, high-end sanctuary aesthetic.',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAouJclzgiLOvHSSP4c8n7yAVZTAMhTBBhJDcX9zBCTpBrOKWYlci5vfoRXcKMWPDTAfgCTGK84n3yffUTzYJNHWznVX1nF1N4peApq4wit3MWqYuuOlB87i1hdJeLMNnJpaBqCYhvkYkKlxjHSHdl_E9Ccf_GYuoOIn0gQEmJ0nPhWAo6zNMkCGLAX0jzJ6KF7ro8Si1PauUVZ36jgKuw0nsJgsKJW4aj7z1f7_FmbfrGX9f2mBEXDow',
      alt: 'An expansive wooden deck attached to a cabin, featuring two modern Adirondack chairs and a steaming private hot tub. In the background, the dense, misty forest of Lake Tahoe creates a quiet, secluded atmosphere. The wood is a warm cedar tone, damp with morning dew, capturing a premium outdoor relaxation experience.',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcB_pxODC9r3uaaZsebOLst53Pfas6dJ2ij-1Q9NJx2kIuZ4FGgA5ZQkm89muIKmjgPZGu4MHERztJbo6tLVjxu7h9sOYPtkCFcoE7uxuKZfT4yNvHvPB1qkMY27yenjDYpXaokCpOuprAtIjykhkqKQhic0oVhqpcr4APjRtcX4yxHm3XYVQFzS3Nel-Z-LBe4U2y60xskLwzDKHNlYLWiRyr-lgg5Kcj8eeRJtIxAuDrLxVpipHaGg',
      alt: 'A cozy loft bedroom with white linens on a low-profile platform bed. A large triangular window frames the tops of evergreen trees against a soft, overcast sky. The style is Scandinavian-minimalist, with neutral tones, organic textures, and a single warm bedside lamp illuminating the space.',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGMqs6UGzfGFUot0PM1hZ6dwYh5-x58rxQsXCRKBz1BOkv7j_TJrPGKRNprxpH7LL0Fl-6B0lS-Kyf-2OV5ZAJrAUxZD1TFN9C3Ur2DDPbMySS-nmVvqCMo7sYccS5mIpkQsHvHlg4a1gHgO9vQpXVjAKcoRkrJt_n5TKFSmS_uvxuWZ24bhzgUQ3o0rCwYmWU-dexlBIhyrdE-F7Fs2FQX36E2yuC7eTZrWFW960AtehMF2N8c96UjA',
      alt: 'A luxurious modern bathroom with a freestanding stone soaking tub. Large windows overlook a private section of the forest. The floors are a textured charcoal tile, and the walls are a pale sage green, creating a spa-like environment that feels deeply connected to nature.',
    },
  ],
  description:
    'Experience ultimate serenity in this architectural gem nestled among towering pines. The Misty Forest Sanctuary is a masterclass in modern A-frame design, offering a seamless blend of luxury and raw wilderness. Whether you\'re watching the fog roll in from the expansive cedar deck or cozying up by the wood-burning stove, every detail has been curated for restorative peace.',
  amenities: [
    'Fast Wifi (250 Mbps)',
    'Full designer kitchen',
    'Dedicated workspace',
    'Free parking on premises',
    'Private hot tub',
    'Indoor fireplace',
  ],
  host: {
    name: 'Sarah',
    description:
      'Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.',
    yearsHosting: '5 years hosting',
    avatar: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMSaIK1eqRvGeI493kKFYM3S5SilAvh-nWSMUSMREYQ14eW7uVszPJ0y54wL2-HlhLzFG8YeuBiXcvH0AXbVpcl_96wszWZxQ9a5rgpdHBpg9QeOiZIRQy22EJcGTB_4aK9cRrAJrwKnIFySnUzHzZ8cuX6nw-oZOuOFnZTadjfpWMXPk2_CVb_ExLdmiAuLKixnjHKTJHvrvFjZ8ZT2W0ofpuIFwOkapkrGoxZABmnc3ws7VIvYQMQw',
      alt: 'A professional headshot of Sarah, a friendly woman in her early 30s with a warm smile, wearing a casual green linen shirt. The background is a softly blurred outdoor garden, suggesting a natural and approachable host persona. The lighting is bright and flattering, consistent with a high-end property platform.',
    },
  },
  guestSummary: '4 guests · 2 bedrooms · 3 beds · 1.5 baths',
  capacity: 'Entire cabin hosted by Sarah',
}

export function fetchPropertyById(id: string): Promise<Property> {
  return Promise.resolve({
    ...propertyDetail,
    id,
  })
}

export function fetchProperties(): Promise<Property[]> {
  return Promise.resolve(properties)
}