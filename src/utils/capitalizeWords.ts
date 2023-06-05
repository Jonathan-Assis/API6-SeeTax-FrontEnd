export default function capitalizeWords(str: string): string {
  const words = str.toLowerCase().split('_')
  const capitalize = words.map((word) => {
    return word.length > 1 ? word.charAt(0).toUpperCase() + word.slice(1) : word
  })
  const result = capitalize.join(' ')

  return result
}
