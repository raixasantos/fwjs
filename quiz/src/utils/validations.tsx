export function required(value: string) {
    if (value === undefined || value.trim().length === 0) {
      return 'Este campo é obrigatório'
    }
    return null
}

export function minLen(min: number) {
    return (value: string) => {
      const v = value.trim()
      if (v.length < min) {
        return `Este campo requer pelo menos ${min} caracteres`
      }
      return null
    }
}

export function inRange(min: number, max: number) {
    return (value: string) => {
      const num = parseInt(value, 10)
      const [vmin, vmax] = min > max ? [max, min] : [min, max]
      if (value && (isNaN(num) || num < vmin || num > vmax)) {
        return `Este campo requer um número inteiro entre ${vmin} e ${vmax}`
      }
      return null
    }
}