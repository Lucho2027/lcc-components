export const loadingType = ['spinner', 'dots', 'ring', 'ball', 'bars', 'infinity'] as const
export type LoadingType = (typeof loadingType)[number]