import { FormatCurrency } from '@/utils/format-currency'

describe('Format currency testes', () => {
  it('Expected money format correct', () => {
    const moneyFormatted = FormatCurrency(100)
    expect(moneyFormatted).toMatch('R$ 100,00')
  })
})
