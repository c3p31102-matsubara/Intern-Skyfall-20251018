import type { CSSProperties } from 'react';
import { colors, radii, shadows } from '../../styles/tokens';

export const card: CSSProperties = {
  borderRadius: radii.xl,
  background: colors.glassBg,
  border: `1px solid ${colors.glassStroke}`,
  boxShadow: shadows.s1,
  padding: 18,
  backdropFilter: 'blur(8px) saturate(120%)',
};

export const title: CSSProperties = {
  margin: '0 0 6px',
  fontSize: 22,
  fontWeight: 900,
  letterSpacing: '.02em',
  color: colors.fgStrong,
  overflowWrap: 'anywhere',
};

export const detail: CSSProperties = {
  margin: '0 0 12px',
  color: colors.fg,
  whiteSpace: 'pre-wrap',
  lineHeight: 1.7,
  overflowWrap: 'anywhere',
};

export const viewActions: CSSProperties = { display: 'flex', gap: 10 };

export const pillBtn: CSSProperties = {
  background: 'rgba(255,255,255,.85)',
  border: '1px solid rgba(0,0,0,.06)',
  color: colors.fgStrong,
  borderRadius: 999,
  padding: '8px 14px',
  cursor: 'pointer',
  boxShadow: '0 1px 0 rgba(255,255,255,.9) inset',
};

export const dangerBtn: CSSProperties = {
  ...pillBtn,
  border: '1px solid #fecaca',
  color: '#b91c1c',
  background: '#fff1f2',
};

/* 編集モード用 */
const fieldBase: CSSProperties = {
  width: '100%',
  border: '1px solid rgba(0,0,0,.06)',
  background: colors.surface,
  borderRadius: radii.md,
  padding: '10px 12px',
  fontSize: 16,
  color: colors.fgStrong,
  outline: 'none',
  boxShadow: '0 1px 0 rgba(255,255,255,.8) inset',
};

export const editInput: CSSProperties = { ...fieldBase };
export const editTextarea: CSSProperties = { ...fieldBase, minHeight: 90, resize: 'vertical' };
export const editActions: CSSProperties = { display: 'flex', justifyContent: 'flex-end', gap: 10 };

export const primaryBtn = (disabled = false): CSSProperties => ({
  appearance: 'none',
  border: 'none',
  borderRadius: radii.md,
  padding: '10px 16px',
  fontWeight: 700,
  color: '#fff',
  cursor: disabled ? 'not-allowed' : 'pointer',
  background: `linear-gradient(135deg, ${colors.btn1}, ${colors.btn2})`,
  opacity: disabled ? 0.6 : 1,
  boxShadow: '0 10px 24px rgba(99,102,241,.35)',
});
