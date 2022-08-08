const HeadButton = ({
    label,
    icon,
    hyperlink
}) => {
    return(
        <>
        <a href={hyperlink}>
        <div className="headbutton">
            <div>
                {icon}
            </div>
            <p>{label}</p>
        </div>
        </a>
        </>

    );
};

export default HeadButton;