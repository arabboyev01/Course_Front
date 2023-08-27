export interface DropdownProps {
  isOpen: boolean
  options: string[] | undefined
  selectedOption: string | null
  handleOptionClick: (e: string) => void
  setIsOpen: any
}

export interface Options {
  options: string[] | undefined
  firstOption: string
  filters?: string[] | undefined
}