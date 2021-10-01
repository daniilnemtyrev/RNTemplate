import { gql } from '@apollo/client'

const GET_ALL_CHARACTERS = gql`
  query Characters($page: Int) {
    characters(page: $page) {
      results {
        id
        name
        status
        image
      }
    }
  }
`
export { GET_ALL_CHARACTERS }
