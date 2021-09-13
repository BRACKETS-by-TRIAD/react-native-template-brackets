import { createClient } from 'urql'

export const client = createClient({
  url: 'http://localhost:3000/graphql',
  fetchOptions: () => {
    return {
      headers: { authorization: `Bearer token...` },
    }
  },
})
