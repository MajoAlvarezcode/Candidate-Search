import { Link } from 'react-router-dom';
import { useState } from 'react';


const Nav = () => {
    const [currentPage, setCurrentPage] = useState<string>('/');


    const handlePageChange = (page: string) => {
        setCurrentPage(page);
    };


    return (
        <nav className='nav'>
            <div className='nav-item'>
                <Link
                    to="/"
                    onClick={() => handlePageChange('/')}
                    className={`nav-link ${currentPage === '/' ? 'active' : ''}`}
                >
                    Home
                </Link>
            </div>


            <div className='nav-item'>
                <Link
                    to="/SavedCandidates"
                    onClick={() => handlePageChange('/SavedCandidates')}
                    className={`nav-link ${currentPage === '/SavedCandidates' ? 'active' : ''}`}
                >
                    Saved Candidates
                </Link>
            </div>
        </nav>
    );
};
export default Nav;
