import { gql } from '@apollo/client'

const GET_ALL_CHARACTERS = gql`
  query Characters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
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
