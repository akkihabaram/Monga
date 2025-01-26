'use client'

import { composeRenderProps } from 'react-aria-components'
import { twMerge } from 'tailwind-merge'
export function composeTailwindRenderProps<T>(
  className: string | ((v: T) => string) | undefined,
  tailwind: string,
): string | ((v: T) => string) {
  return composeRenderProps(className, (className) => twMerge(tailwind, className))
}
