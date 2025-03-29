export const formatGridSizeOptions = (gridSizes: string[]) => {
    return gridSizes.map((size) => `${size}x${size}`)
}

export const formatSelectedGridSize = (gridSize: string) => {
    return `${gridSize}x${gridSize}`
}

export const extractGridSizeValue = (value: string) => {
    return value.split('x')[0]
}
  