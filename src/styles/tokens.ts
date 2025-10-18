// 共通の色・角丸・影など（必要に応じて調整OK）
export const colors = {
  fgStrong: '#0f172a',
  fg: '#334155',
  ring: 'rgba(99,102,241,.22)',
  glassBg: 'rgba(255,255,255,.55)',
  glassStroke: 'rgba(255,255,255,.65)',
  surface: 'rgba(255,255,255,.9)',
  grad1: '#9ad7e9',
  grad2: '#a7e3c8',
  grad3: '#c8d4ff',
  grad4: '#eac7ef',
  btn1: '#37b6f5',
  btn2: '#9b6cf8',
} as const;

export const radii = { xl: 24, lg: 16, md: 12 } as const;

export const shadows = {
  s1: '0 12px 28px rgba(0,0,0,.10)',
  s2: '0 18px 40px rgba(0,0,0,.12)',
} as const;
