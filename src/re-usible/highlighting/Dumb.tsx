import React from 'react'
import { ChildrenProps } from '@/globalTypes'
import { Span } from '@/re-usible/highlighting/style'

export const SpanDumb: React.FC<ChildrenProps> = ({ children }) => (
  <Span className="highlight">{children}</Span>
);