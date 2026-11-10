export default function Table({head, body}){

    return(
        <table className="table theme-success table-striped table-hover">
            <thead>
                <tr>
                   {
                   head.map(item => (
                        <th>{item}</th>)
                    )
                   } 
                </tr>
            </thead>

            <tbody>
                {
                    body.map((item, index) => (
                            <tr key={index}>
                                {item.map((data, index) => (
                                    <td key={index}>{data}</td>
                                ))}
                            </tr>
                        )
                        
                    )  
                }
            </tbody>

        </table>
    )
}