import { describe, expect, it } from 'vitest'
import { sum } from '../src/sum'

describe('sum', () => {
  it('deve somar dois números', () => {
    expect(sum(2, 3)).toBe(5)
  })

  it('deve funcionar com números negativos', () => {
    expect(sum(-2, 3)).toBe(1)
  })
})