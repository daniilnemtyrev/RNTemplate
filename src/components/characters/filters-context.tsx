import React, {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react'

type StateSetter<T> = Dispatch<SetStateAction<T>>

interface IContext {
  checkedName: string
  checkedStatus: string
  checkedGender: string
  checkedSpecies: string
  setCheckedGender: StateSetter<string>
  setCheckedStatus: StateSetter<string>
  setCheckedName: StateSetter<string>
  setCheckedSpecies: StateSetter<string>
}

const initialState: IContext = {
  checkedName: '',
  checkedStatus: '',
  checkedGender: '',
  checkedSpecies: '',
  setCheckedGender: (checkedGender) => checkedGender,
  setCheckedStatus: (checkedStatus) => checkedStatus,
  setCheckedName: (checkedName) => checkedName,
  setCheckedSpecies: (checkedSpecies) => checkedSpecies,
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
  const value = useMemo(
    () => ({
      checkedName,
      checkedStatus,
      checkedGender,
      checkedSpecies,
      setCheckedGender,
      setCheckedStatus,
      setCheckedName,
      setCheckedSpecies,
    }),
    [checkedName, checkedStatus, checkedGender, checkedSpecies],
  )

  return (
    <CharactersFiltersContext.Provider value={value}>
      {children}
    </CharactersFiltersContext.Provider>
  )
}

export const useCharacterFiltersContext = (): IContext =>
  useContext(CharactersFiltersContext)
