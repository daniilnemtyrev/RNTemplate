import React, { useState } from 'react'
import { FlatList, Text } from 'react-native'

import { CharactersQuery, useCharactersQuery } from 'src/generated/graphql'

import { CharacterCard } from './character-card'
import { useCharacterFiltersContext } from './filters-context'

export type ExtractFromArray<T> = T extends Array<infer Item> ? Item : never
type Character = ExtractFromArray<CharactersQuery['characters']['results']>

export const CharactersList = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { currentFilters } = useCharacterFiltersContext()

  const { data, loading, fetchMore } = useCharactersQuery({
    variables: {
      page: 1,
      filter: currentFilters,
    },
  })

  const onEndReached = () => {
    fetchMore({
      variables: {
        page: currentPage + 1,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        return {
          characters: {
            results: [
              ...(previousResult?.characters?.results ?? []),
              ...(fetchMoreResult?.characters?.results ?? []),
            ],
          },
        }
      },
    })
    setCurrentPage(currentPage + 1)
  }

  const renderItem = (item: Character) => (
    <CharacterCard name={item.name} status={item.status} image={item.image} />
  )

  if (loading) {
    return <Text>Loading</Text>
  }

  return (
    <FlatList<Character>
      numColumns={2}
      data={data?.characters?.results}
      renderItem={({ item }) => renderItem(item)}
      keyExtractor={(item) => item.name}
      onEndReachedThreshold={0.5}
      onEndReached={onEndReached}
    />
  )
}
