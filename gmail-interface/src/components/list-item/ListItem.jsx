
// child component 
const ListItem = ({
    title, // props
    icon,
    url
}) => {
    return ( 
        <>
            <p>{title}</p>
            <a href={url}>{title}</a>
            <img src={icon} alt="" />
        </>
    )
}

export default ListItem