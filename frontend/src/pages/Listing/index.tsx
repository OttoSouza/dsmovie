
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { api } from "services/api";
import { MoviePage } from "types/movies";

export default function Listing() {
    const [pageNumber, setPageNumber] = useState(0);
    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true,
    })

    useEffect(() => {
        api.get(`/movies?size=12&page=${pageNumber}&sort=title`).then(response => {
            const res = response.data as MoviePage;
            setPageNumber(res.number);
            setPage(res);
            console.log(page)
        })
    }, [pageNumber])

    const handlePageChange = (newNumber: number) => {
        setPageNumber(newNumber);
    }

    return (
        <>
            <Pagination page={page} onChange={handlePageChange}/>
            <div className="container">
                <div className="row">
                    {
                        page.content.map(item => (
                            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3" key={item.id}>
                                <MovieCard movie={item} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}