import "../../styles/UI/textinput.css";

interface Props {
  name: string;
  label: string;
  avatarName: string;
  placeholder?: string;
  className?: string;
  value: string;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = (props: Props) => {
  const { name, label, placeholder, value, className, handleOnChange } = props;

  return (
    <>
      <label>
        {label}
        <input
          name={name}
          value={value}
          className={className ? className : ""}
          type='Text'
          placeholder={placeholder ? placeholder : ""}
          onChange={handleOnChange}
          maxLength={25}
        />
      </label>
    </>
  );
};

export default TextInput;
