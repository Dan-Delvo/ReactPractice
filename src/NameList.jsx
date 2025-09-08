export default function User(){
    const users = [
        {id: 1, name: "Dan", role: "FullStack Developer/Project Manager"},
        {id: 2, name: "Martin", role: "Document Analyst/UI/UX"},
        {id: 3, name: "Rick", role: "QA/Business Analyst"},
        {id: 4, name: "Johnas", role: "Developer/Database Manager"},
    ]

    return (
        <>
        
            <h1>TEAM POPBERRY</h1>
            <p>Online Document Request and Management System</p>

            <ul>
                {
                    users.map(function(user,index){
                        return(
                            <li key={index}>
                                {user.name} as the {user.role}
                            </li>
                        )
                    })
                }
            </ul>

        </>
    )
}