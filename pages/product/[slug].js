import { useQuery } from 'urql'
import { GET_PRODUCT_QUERY } from '../../lib/query'
import { useRouter } from 'next/router'

export default function ProductDetail() {

    const { query } = useRouter();

    //fetch grapghql data
    const [results] = useQuery({
        query: GET_PRODUCT_QUERY,
        variables: {slug: query.slug }
    })

    const {data, fetching, error} = results;

      //check for the data coming in
    if (fetching) return <p>Loading...</p>
    if (error) return <p>Error {error.message}</p>

    console.log(data)

    return (
        <div>
            <img src="" alt="" />
            <div>
                <h3>title</h3>
                <p>description</p>
            </div>
            <div>
                <span>Quantity</span>
                <button>plus</button>
                <p>0</p>
                <button>Minus</button>
            </div>
        </div>
    )
}