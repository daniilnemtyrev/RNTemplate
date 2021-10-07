import React, {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react'

import { FilterCharacter } from 'src/generated/graphql'

export type StateSetter<T> = Dispatch<SetStateAction<T>>

interface IContext {
  filters: FilterCharacter
  currentFilters: FilterCharacter
  setFilters: StateSetter<FilterCharacter>
  setCurrentFilters: StateSetter<FilterCharacter>
}

const initialState: IContext = {
  filters: {
    gender: '',
    name: '',
    species: '',
    status: '',
  },
  currentFilters: {
    gender: '',
    name: '',
    species: '',
    status: '',
  },
  setFilters: (filters) => filters,
  setCurrentFilters: (currentFilters) => currentFilters,
}

export const CharactersFiltersContext = createContext(initialState)

type Props = { children: React.ReactNode }

export const CharacterFiltersContextProvider = ({
  children,
}: Props): ReactElement => {
  const [filters, setFilters] = useState<FilterCharacter>({
    gender: '',
    name: '',
    species: '',
    status: '',
  })
  const [currentFilters, setCurrentFilters] = useState<FilterCharacter>({
    gender: '',
    name: '',
    species: '',
    status: '',
  })

  const value = useMemo(
    () => ({
      filters,
      currentFilters,
      setFilters,
      setCurrentFilters,
    }),
    [filters, currentFilters],
  )

  return (
    <CharactersFiltersContext.Provider value={value}>
      {children}
    </CharactersFiltersContext.Provider>
  )
}

export const useCharacterFiltersContext = (): IContext =>
  useContext(CharactersFiltersContext)
