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
  checkedName: string
  checkedStatus: string
  checkedGender: string
  checkedSpecies: string
  isCheked: boolean
  currentFilters: FilterCharacter
  setCheckedGender: StateSetter<string>
  setCheckedStatus: StateSetter<string>
  setCheckedName: StateSetter<string>
  setCheckedSpecies: StateSetter<string>
  setIsCheked: StateSetter<boolean>
  setCurrentFilters: StateSetter<FilterCharacter>
}

const initialState: IContext = {
  checkedName: '',
  checkedStatus: '',
  checkedGender: '',
  checkedSpecies: '',
  isCheked: false,
  currentFilters: {
    gender: '',
    name: '',
    species: '',
    status: '',
  },
  setCheckedGender: (checkedGender) => checkedGender,
  setCheckedStatus: (checkedStatus) => checkedStatus,
  setCheckedName: (checkedName) => checkedName,
  setCheckedSpecies: (checkedSpecies) => checkedSpecies,
  setIsCheked: (isCheked) => isCheked,
  setCurrentFilters: (currentFilters) => currentFilters,
}

export const CharactersFiltersContext = createContext(initialState)

type Props = { children: React.ReactNode }

export const CharacterFiltersContextProvider = ({
  children,
}: Props): ReactElement => {
  const [checkedName, setCheckedName] = useState('')
  const [checkedSpecies, setCheckedSpecies] = useState('')
  const [checkedStatus, setCheckedStatus] = useState('')
  const [checkedGender, setCheckedGender] = useState('')
  const [currentFilters, setCurrentFilters] = useState<FilterCharacter>({
    gender: '',
    name: '',
    species: '',
    status: '',
  })

  const [isCheked, setIsCheked] = useState(false)
  const value = useMemo(
    () => ({
      checkedName,
      checkedStatus,
      checkedGender,
      checkedSpecies,
      isCheked,
      currentFilters,
      setCheckedGender,
      setCheckedStatus,
      setCheckedName,
      setCheckedSpecies,
      setIsCheked,
      setCurrentFilters,
    }),
    [
      checkedName,
      checkedStatus,
      checkedGender,
      checkedSpecies,
      isCheked,
      currentFilters,
    ],
  )

  return (
    <CharactersFiltersContext.Provider value={value}>
      {children}
    </CharactersFiltersContext.Provider>
  )
}

export const useCharacterFiltersContext = (): IContext =>
  useContext(CharactersFiltersContext)
