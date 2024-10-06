import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';
import {Candidate} from '../interfaces/Candidate.interface';

const styles = {
    CardStyle: {

        margin: '0',
        paddingLeft: '1cm',
        paddingBottom: '10px',
        borderBottomRightRadius: '10%',
        borderBottomLeftRadius: '10%',
        backgroundColor: '#000',
        color: 'white',
        whiteSpace: 'normal',
        width: '9cm',
        placeItems: 'center',
    },


    ImageStyle: {


        margin: '0',
        borderTopRightRadius: '10%',
        borderTopLeftRadius: '10%',
        width: '10cm',
        height: '9cm',


    }


};


const CandidateSearch = () => {
    const [githubUsers, setGithubUser] = useState<Candidate[]>([]);
    const [currentUserIndex, setCurrentUserIndex] = useState(0);


    useEffect(() => {
        const fetchGithubUsers = async () => {
            const users = await searchGithub();
            setGithubUser(users);
        };


        fetchGithubUsers();
    }, []);


    const handleAccept = () => {
        const currentUser = githubUsers[currentUserIndex];


        // Guardar en localStorage
        let savedCandidates: Candidate[] = JSON.parse(localStorage.getItem('SavedCandidates') || '[]');
    savedCandidates.push(currentUser);
    localStorage.setItem('SavedCandidates', JSON.stringify(savedCandidates));





        // Mostrar el siguiente candidato
        setCurrentUserIndex((prevIndex) => prevIndex + 1);
    };


    const handleReject = () => {
        // Solo avanzar al siguiente candidato
        setCurrentUserIndex((prevIndex) => prevIndex + 1);
    };


    return (
        <main>
            <h1>Candidate Search</h1>
            {githubUsers.length > 0 && currentUserIndex < githubUsers.length ? (
                <div>
                    <div key={githubUsers[currentUserIndex].id} >
                        <img style={styles.ImageStyle}
                            src={githubUsers[currentUserIndex].avatar_url}
                            alt={githubUsers[currentUserIndex].login}

                        />
                    </div>


                    <div style={styles.CardStyle} >

                        <h2>{githubUsers[currentUserIndex].login} <span>({githubUsers[currentUserIndex].name || githubUsers[currentUserIndex].login})</span></h2>
                        <p><strong>Location:</strong> {githubUsers[currentUserIndex].location || 'Not provided'}</p>
                        <p><strong>Email:</strong> {githubUsers[currentUserIndex].email || 'Not provided'}</p>
                        <p><strong>Company:</strong> {githubUsers[currentUserIndex].company || 'Not provided'}</p>
                        <p><strong>Bio:</strong> {githubUsers[currentUserIndex].bio || 'Not provided'}</p>

                    </div>


                    <div>
                        <button className="btn reject-btn" onClick={handleReject}>-</button>
                        <button className="btn accept-btn" onClick={handleAccept}>+</button>
                    </div>
                </div>
            ) : (
                <p>No more candidates available...</p>
            )}
        </main>
    );
};


export default CandidateSearch;