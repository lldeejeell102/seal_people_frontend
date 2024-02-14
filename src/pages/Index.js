import { useLoaderData, Link, Form } from "react-router-dom"


const Landing = () => {
    const people = useLoaderData()
    console.log(people)
    
    if(people.isloading){
        return(
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }


    return(
        <div className="people-hp">
            <h3>Create a person</h3>
            <Form action='/create' method='post'>
                <input type='input' name='name' placeholder="person's name"/>
                <input type='input' name='image' placeholder="person's image"/>
                <input type='input' name='title' placeholder="person's title"/>
                <input type='submit' value={`create person`}/>

            </Form>            
            <h3>People</h3>
            {people.map(person => {
                return(
                    <div key={person._id} className="person">
                        <Link to={`/${person._id}`}>
                            <h1 className="hotpink">{person.name}</h1>
                        </Link>
                        <img src={person.image} alt={person.name}/>
                        <h3>{person.title}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default Landing