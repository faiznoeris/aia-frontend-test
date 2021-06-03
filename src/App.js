import { useEffect, useState } from 'react'
import './App.css'
import Card from './Card'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Pagination from '@material-ui/lab/Pagination'
import CircularProgress from '@material-ui/core/CircularProgress'

function App() {
    const [feeds, setFeeds] = useState([])
    const [total, setTotal] = useState(0)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    const getFeeds = (pageNumber = 1, limit = 1) =>
        fetch(
            `http://localhost:4000/flickr-feeds?pageNumber=${pageNumber}&limit=${limit}`
        )
            .then(resp => resp.json())
            .then(json => {
                try {
                    setFeeds(json.items)
                    setTotal(json.total)
                } catch (err) {
                    console.log(err)
                } finally {
                    setLoading(false)
                }
            })

    useEffect(() => {
        setLoading(true)
        getFeeds()
    }, [])

    const handleChangePagination = (event, value) => {
        // default limit by only 1 image
        setLoading(true)
        getFeeds(value, 1)
        setPage(value)
    }

    return (
        <div className='App'>
            <CssBaseline />

            <header className='App-header'>
                <p style={{ color: 'black' }}>Flickr Public Photos Feeds</p>

                <TextField
                    id='standard-search'
                    label='Search field'
                    type='search'
                />
                <br />
                {loading ? (
                    <CircularProgress />
                ) : (
                    feeds.map(val => <Card imgData={val} />)
                )}
                <br />
                <Pagination
                    count={total}
                    defaultPage={1}
                    page={page}
                    onChange={handleChangePagination}
                />
            </header>
        </div>
    )
}

export default App
