import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Row from './Project/Row'
import requests from './Project/Request'
import Banner from './Project/Banner'
import './App.css'
import Movie from './Project/Movie'
import Cast from './Project/Cast'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <>
                <Banner/>
                <Row isLargeRow title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
                <Row title="Trending Movies" fetchUrl={requests.fetchTrending}/>
                <Row title="TopRated Movies" fetchUrl={requests.fetchTopRated}/>
                <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
                <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
                <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
                <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
                <Row title="Documentries" fetchUrl={requests.fetchDocumentaries}/>
                <Row title="Tamil Movies" fetchUrl={requests.TamilMovies}/>
                <Row title="Upcomings Movies" fetchUrl={requests.fetchUpComing}/>
                
                
                
            </>
          } ></Route>
          <Route path='/movie' element={<Movie/>} />
          <Route path='/cast' element={<Cast/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App