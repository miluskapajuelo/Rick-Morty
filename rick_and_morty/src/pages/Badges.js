import React, { useState, useEffect } from 'react'
import confLogo from '../images/badge-header.svg';
import CharacterCard from './../components/CharacterCard'
import Loader from './../components/Loader'

function Badges() {

    const [getdata, setGetData] = useState({
        nextPage: 1,
        results: [],
        loading: false,
        error: null
    })


    const fetchData = async () => {
        setGetData({
            loading: true,
            error: null
        })
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${getdata.nextPage}`)
            const data = await response.json()
            setGetData({
                nextPage: getdata.nextPage + 1,
                results: getdata.results.concat(data.results),
                loading: false,
                error: null
            })
        }
        catch (error) {

            setGetData({
                loading: false,
                error: error
            })
        }
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (

        <div>
            {getdata.error && <p>error</p>}
            <ul className="row">
                {getdata.results!==undefined ? getdata.results.map((character, index) => (
                    <li className="col-6 col-md-3" key={index}>
                        <CharacterCard character={character}></CharacterCard>
                    </li>)):null}
            </ul>
            {getdata.loading && (<Loader />)}
            <div className="btn-container">
            {!getdata.loading && (<button onClick={fetchData} className="btn btn-primary" >Cargar mas</button>)}
            </div>
        </div>
    )
}

export default Badges
