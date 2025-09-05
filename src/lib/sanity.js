import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '3hir6j0e',
  dataset: 'production',
  useCdn: false, // Set to false for development
  apiVersion: '2024-01-01',
})

// Helper function for image URLs
export const urlForImage = (source) => {
  if (!source?.asset?._ref) return null
  
  const ref = source.asset._ref
  const [, id, dimensions, format] = ref.split('-')
  const [width, height] = dimensions.split('x')
  
  return `https://cdn.sanity.io/images/${client.config().projectId}/${client.config().dataset}/${id}-${dimensions}.${format}`
}
