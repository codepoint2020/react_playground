function Card({name, email, city, num, doEdit, doDelete}) {

    return(
        <>
            <tr>
                <td>{num + 1}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{city}</td>
                <td>
                    <button className="btn btn-sm btn-outline-danger" onClick={doDelete}>Del</button>
                    <button className="btn btn-sm btn-outline-info mx-2" onClick={doEdit}>Edit</button>
                </td>
            </tr>
        </>
    )
}

export default Card;