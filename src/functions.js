
export function resolveAuthError(code) {
    switch(code){
        case 'auth/wrong-password':
            return 'Ungültiges Passwort'
        case 'auth/user-not-found':
            return 'Benutzer nicht gefunden'

        default:
            break
    }
            
}
