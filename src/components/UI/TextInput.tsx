import { useContext } from 'react'
import { AvatarContext } from '../../context'
import '../../styles/UI/textinput.css'

interface Props {
  name: string;
  label: string;
  placeholder?: string; 
  className?: string;
  value: string;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const TextInput = (props: Props) => {
  const { 
    name,
    label,
    placeholder,
    className,
    handleOnChange } = props

  const {avatarOptions, setAvatarOptions} = useContext(AvatarContext)

  return (
    <>
      <label>
        {label}
        <input 
          name={name}
          value={avatarOptions.name}
          className={className ? className: ""}
          type="Text"
          placeholder={placeholder ? placeholder : ""}
          onChange={handleOnChange}
          maxLength={25}
        />
      </label>
    </>
  )
}

export default TextInput