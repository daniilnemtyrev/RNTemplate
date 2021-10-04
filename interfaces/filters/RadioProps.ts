export interface RadioProps {
  checkedName: string
  checkedStatus: string
  checkedGender: string
  checkedSpecies: string
  setCheckedGender: React.Dispatch<React.SetStateAction<string>>
  setCheckedStatus: React.Dispatch<React.SetStateAction<string>>
  setCheckedName: React.Dispatch<React.SetStateAction<string>>
  setCheckedSpecies: React.Dispatch<React.SetStateAction<string>>
}
