// pages/index.js
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();

  return (
    <div style={styles.container}>
      {!session ? (
        <>
          <h2 style={styles.heading}>Inicia sesión</h2>
          <button style={styles.button} onClick={() => signIn('google')}>
            Iniciar sesión con Google
          </button>
          <button style={styles.button} onClick={() => signIn('github')}>
            Iniciar sesión con GitHub
          </button>
        </>
      ) : (
        <>
          <h2 style={styles.heading}>Hola, {session.user.name}</h2>
          <button style={styles.button} onClick={() => signOut()}>
            Cerrar sesión
          </button>
        </>
      )}
    </div>
  );
}

// Estilos en línea
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#ffb6c1', // Fondo rosado claro
    textAlign: 'center',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    margin: '10px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#ff69b4', // Rosa más fuerte para los botones
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
