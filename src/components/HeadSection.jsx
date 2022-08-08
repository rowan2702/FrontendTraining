const HeadSection = ({
    label,
    button
})=> {
    return(
        <>
        <div className="headsection">
            <h1>{label}</h1>
            {button}
        </div>
        </>
    )
}

export default HeadSection;