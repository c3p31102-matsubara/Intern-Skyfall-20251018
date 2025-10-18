import type { CSSProperties } from 'react';
import { colors, radii, shadows } from '../../styles/tokens';

export const formCard: CSSProperties = {
  borderRadius: radii.xl,
  background: colors.glassBg,
  border: `1px solid ${colors.glassStroke}`,
  boxShadow: shadows.s1,
  padding: 24,
  display: 'grid',
  gap: 12,
  backdropFilter: 'blur(10px) saturate(120%)',
};

const fieldBase: CSSProperties = {
  width: '100%',
  border: '1px solid rgba(0,0,0,.06)',
  background: colors.surface,
  borderRadius: radii.md,
  padding: '12px 14px',
  fontSize: 16,
  color: colors.fgStrong,
  outline: 'none',
  boxShadow: '0 1px 0 rgba(255,255,255,.8) inset',
};

export const input: CSSProperties = { ...fieldBase };
export const textarea: CSSProperties = { ...fieldBase, minHeight: 96, resize: 'vertical' };

export const actions: CSSProperties = {
  display: 'flex',
  justifyContent: 'flex-end',
  gap: 10,
};

export const primaryBtn = (disabled = false): CSSProperties => ({
  appearance: 'none',
  border: 'none',
  borderRadius: radii.md,
  padding: '10px 16px',
  fontWeight: 700,
  color: '#fff',
  cursor: disabled ? 'not-allowed' : 'pointer',
  opacity: disabled ? 0.6 : 1,
  background: `linear-gradient(135deg, ${colors.btn1} 0%, ${colors.btn2} 100%)`,
  boxShadow: '0 10px 24px rgba(99,102,241,.35)',
  transition: 'transform .12s ease, box-shadow .12s ease, opacity .12s ease',
});
