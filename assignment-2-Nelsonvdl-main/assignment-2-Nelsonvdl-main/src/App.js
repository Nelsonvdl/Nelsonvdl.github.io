import React, { useEffect } from 'react';
import { Routes, Route, Link, NavLink, Navigate, useParams, Outlet, } from 'react-router-dom';

import './App.css';
import landingPhoto from './images/MainLanding.jpg';
import filmsPhoto from './images/Films1.jpg';
import peoplePhoto from './images/People1.jpg';
import planetsPhoto from './images/Planets.png';
import notFoundPhoto from './images/People2.png';

import personData from './data/people.json';
import planetData from './data/planets.json';
import filmData from './data/films.json';

function Home() {

  return (
    //Nav Bar
  <div className='navBarDiv'>
    <ul className='navBar'>
        <li className='navItem mainLink'>
          <NavLink to="" className='LogoLink navLink'>Star Wars</NavLink>
        </li>
      <li className='navItem people'>
        <NavLink to="/people" className='navLink'>People</NavLink>
      </li>
      <li className='navItem planet'>
        <NavLink to="/planets" className='navLink'>Planets</NavLink>
      </li>
      <li className='navItem film'>
        <NavLink to="/films" className='navLink'>Films</NavLink>
      </li>
    </ul>
    <Outlet />
  </div>
  );
}

//landing page for main site
function LandingPage() {
  return (
    <div className='homePageLandingBackground'>
      <div className='jsonCard Menu'>
        <h1>
          Welcome to <br/>Star Wars<br/> Data Dump
        </h1>
        <p>(Scroll down on Large Cards)</p>
        </div>
      <img src={landingPhoto} alt="Landing Page" className='pageBackground'></img> 
    </div>
    );
}

//page for people content
function People() {
  return (
    <div className='pageContent'>
      <div className='sideBar'>
        <ul className='sideBarList'>
          {Object.entries(personData).map(([key, value]) => (
            <li className='sideBarItem' key={key}><NavLink to={key} className='sideBarNavItem'>{value.name}</NavLink></li>
          ))}
        </ul>
      </div>
      <Outlet />
      <img src={peoplePhoto} alt="People" className='pageBackground'></img>
    </div>
    );
}

//per person page formatting
function Person() {

  //for history force to 404
  //const navigate = useNavigate();
  //setting data from json
  const params = useParams();
  const person = personData[params.Person];

  if(!person){
    return (<Navigate replace to="/error" />)
  }

  //generating film data
  const films = person.films
  const filmLinks = films.map((films) =>
    <li key={films}><Link to={films} className='itemLink'>{films}</Link></li>
  );
  
  return (
    <div className='jsonCard'>
      <h1 className='title'>{person.name}</h1>
      <ul>
        <li>
        <b>Height:</b> {person.height}
        </li>
        <li>
        <b>Mass:</b> {person.mass}
        </li>
        <li>
        <b>Hair Color:</b> {person.hair_color}
        </li>
        <li>
        <b>Skin Color:</b> {person.skin_color}
        </li>
        <li>
        <b>Eye Color:</b> {person.eye_color}
        </li>
        <li>
        <b>Birth Year:</b> {person.birth_year}
        </li>
        <li>
        <b>Gender:</b> {person.gender}
        </li>
        <li>
        <b>Home World:</b> <Link to={person.homeworld} className='itemLink'>{person.homeworld}</Link>
        </li>
        <li>
        <b>Films:</b>
          <ul>
            {filmLinks}
          </ul>
        </li>
      </ul>
    </div>
  );
}

//page for planets page
function Planets() {
  return (
    <div className='pageContent'>
      <div className='sideBar'>
        <ul className='sideBarList'>
          {Object.entries(planetData).map(([key, value]) => (
            <li className='sideBarItem' key={key}><NavLink to={key} className='sideBarNavItem'>{value.name}</NavLink></li>
          ))}
        </ul>
      </div>
      <Outlet />
      <img src={planetsPhoto} alt="Planets" className='pageBackground'></img>
    </div>
    );
}

//for each planet
function Planet() {
  //for history force to 404
  //const navigate = useNavigate();
  //setting data from json
  const params = useParams();
  const planet = planetData[params.Planet];

  if(!planet){
    return (<Navigate replace to="/error" />)
  }

  //generating film data
  const films = planet.films
  const filmLinks = films.map((films) =>
    <li key={films}><Link to={films} className='itemLink'>{films}</Link></li>
  );

  //generating resident data
  const residents = planet.residents
  const residentLinks = residents.map((residents) =>
    <li key={residents}><Link to={residents} className='itemLink'>{residents}</Link></li>
  );
  
  return (
    <div className='jsonCard'>
      <h1 className='title'>{planet.name}</h1>
      <ul>
        <li>
          <b>Rotational Period:</b> {planet.rotation_period}
        </li>
        <li>
          <b>Orbital Period:</b> {planet.orbital_period}
        </li>
        <li>
          <b>Diamter:</b> {planet.diameter}
        </li>
        <li>
          <b>Climate:</b> {planet.climate}
        </li>
        <li>
        <b>Gravity:</b> {planet.gravity}
        </li>
        <li>
        <b>Terrain:</b> {planet.terrain}
        </li>
        <li>
        <b>Surface Water:</b> {planet.surface_water}
        </li>
        <li>
        <b>Population:</b> {planet.population}
        </li>
        <li>
        <b>Residents:</b> 
          <ul>
            {residentLinks}
          </ul>
        </li>
        <li>
        <b>Films:</b>
          <ul>
            {filmLinks}
          </ul>
        </li>
      </ul>
    </div>
  );
}

//page for films page
function Films() {
  return (
    <div className='pageContent'>
      <div className='sideBar'>
        <ul className='sideBarList'>
          {Object.entries(filmData).map(([key, value]) => (
            <li className='sideBarItem' key={key}><NavLink to={key} className='sideBarNavItem'>{value.title}</NavLink></li>
          ))}
        </ul>
      </div>
      <Outlet />
      <img src={filmsPhoto} alt="Films" className='pageBackground'></img>
    </div>
    );
}

function Film() {
//for history force to 404
  //const navigate = useNavigate();
  //setting data from json
  const params = useParams();
  const film = filmData[params.Film];

  if(!film){
    return (<Navigate replace to="/error" />)
  }

  //generating character data
  const characters = film.characters
  const characatersLinks = characters.map((characters) =>
    <li key={characters}><Link to={characters} className='itemLink'>{characters}</Link></li>
  );

  //generating planet data
  const planets = film.planets
  const planetsLinks = planets.map((planets) =>
    <li key={planets}><Link to={planets} className='itemLink'>{planets}</Link></li>
  );
  
  return (
    <div className='jsonCard'>
      <h1 className='title'>{film.title}</h1>
      <ul>
        <li>
          <b>Episode id:</b> {film.episode_id}
        </li>
        <li>
          <b>Opening Crawl:</b> {film.opening_crawl}
        </li>
        <li>
        <b>Director:</b> {film.director}
        </li>
        <li>
        <b>Producer:</b> {film.producer}
        </li>
        <li>
        <b>Release Date:</b> {film.release_date}
        </li>
        <li>
        <b>Characters:</b> 
          <ul>
            {characatersLinks}
          </ul>
        </li>
        <li>
        <b>Planets:</b>
          <ul>
            {planetsLinks}
          </ul>
        </li>
      </ul>
    </div>
  );
}

function NotFound() {
  return (
    <div className='e404'>
      <h1 className='e404'>404 Page Not Found</h1>
      <NavLink to="" className="errorMessage e404">Retun to Home Page</NavLink>
      <img src={notFoundPhoto} alt="Not Found" className='pageBackground e404'></img>

    </div>
    );
}

function App() {
  return (
    <Routes>
      <Route path="" element={<Home />} >
        <Route index element={<LandingPage />} />
        <Route path="/people" element={<People />} >
          <Route index element={<LandingPage />} />
          <Route path=":Person" element={<Person />} />
        </Route>
        <Route path="/planets" element={<Planets />} >
          <Route index element={<LandingPage />} />
          <Route path=":Planet" element={<Planet />} />
        </Route>
        <Route path="/films" element={<Films />} >
          <Route index element={<LandingPage />} />
          <Route path=":Film" element={<Film />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
      
    </Routes>
  );
}

export default App;
