const { Link } = require("wouter");

export function Category ({name, options = []}) {
    return (
        <>
            <h2>{name}</h2>
            <ul className="list-group">
                {options.map((singleOptions => (
                    <li key={singleOptions} >
                        <Link to={`/search/${singleOptions}`}>{singleOptions}</Link>
                    </li>
                )))}
            </ul>
        </>
    )
}