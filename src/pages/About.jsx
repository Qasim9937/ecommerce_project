import Table from "../components/Table"

export default function About(){


    return(
        <>
            <h1>About Us</h1>
            <Table head={['State', 'Capital']} body={[['Abia', 'Umuahia'], ['Adamawa', 'Yola']]} />
        </>
        
    )
}