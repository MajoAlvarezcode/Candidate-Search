import { useState, useEffect } from 'react';


const SavedCandidates = () => {
    const [savedCandidates, setSavedCandidates] = useState<any[]>([]);


    // Cargar candidatos desde el localStorage
    useEffect(() => {
        const storedCandidates = JSON.parse(localStorage.getItem('SavedCandidates') || '[]');
        setSavedCandidates(storedCandidates);
    }, []);


    // Función para eliminar un candidato
    const handleReject = (candidateId: number) => {
        const updatedCandidates = savedCandidates.filter(candidate => candidate.id !== candidateId);
        setSavedCandidates(updatedCandidates);
        localStorage.setItem('SavedCandidates', JSON.stringify(updatedCandidates));
    };


    return (
        <main>
            <h1>Potential Candidates</h1>
            {savedCandidates.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Email</th>
                            <th>Company</th>
                            <th>Bio</th>
                            <th>Reject</th>
                        </tr>
                    </thead>
                    <tbody>
                        {savedCandidates.map((candidate) => (
                            <tr key={candidate.id}>
                                <td>
                                    <img src={candidate.avatar_url} alt={candidate.login} />
                                </td>
                                <td>{candidate.login} <span>({candidate.name || candidate.login})</span></td>
                                <td>{candidate.location || 'Not provided'}</td>
                                <td>{candidate.email || 'Not provided'}</td>
                                <td>{candidate.company || 'Not provided'}</td>
                                <td>{candidate.bio || 'Not provided'}</td>
                                <td>
                                    <button className="btn reject-btn" onClick={() => handleReject(candidate.id)}>
                                        <span style={{ fontSize: '20px', color: 'red' }}>−</span>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No saved candidates...</p>
            )}
        </main>
    );
};


export default SavedCandidates;
