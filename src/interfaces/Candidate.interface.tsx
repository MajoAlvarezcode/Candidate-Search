
interface Candidate {
    id: number; // ID único del candidato
    login: string; // Nombre de usuario en GitHub
    name?: string; // Nombre real del candidato (opcional)
    avatar_url: string; // URL del avatar del candidato
    location?: string; // Ubicación del candidato (opcional)
    email?: string; // Correo electrónico del candidato (opcional)
    company?: string; // Compañía donde trabaja (opcional)
    bio?: string; // Biografía del candidato (opcional)
}
