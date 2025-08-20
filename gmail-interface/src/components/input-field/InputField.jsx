import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InputField = ({
    type,
    name,
    id,
    placeholder,
    icon,
    classes
}) => {
    return (
        <div className={classes}>
            <FontAwesomeIcon icon={icon} />
            <input 
                type={type} 
                name={name}
                id={id}
                placeholder={placeholder}
            />
        </div>
    )
}

export default InputField;