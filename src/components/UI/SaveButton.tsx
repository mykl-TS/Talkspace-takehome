import { PropsWithChildren } from 'react'
import '../../styles/UI/SaveButton.css'
import { useContext } from 'react'
import { AvatarContext } from '../../context'

interface Props {
  disabled: boolean
}

const SaveButton = (props:PropsWithChildren<Props>) => {
  const {children, disabled} = props
  const {saveAvatar} = useContext(AvatarContext);
  
  return (
    <>
      <button
        className="save_button"
        disabled={disabled}
        onClick={saveAvatar}
      >
        <span>
          {children}
        </span>
      </button>
    </>
  )
}

export default SaveButton