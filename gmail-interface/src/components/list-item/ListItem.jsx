
// child component 
const ListItem = ({
    title, // props
    icon
}) => {
    return ( 
        <>
            <p>{title}</p>
            <img src={icon} alt="" />
        </>
    )
}

export default ListItem