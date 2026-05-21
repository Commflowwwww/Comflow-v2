// ===== AGUARDA O FORMULÁRIO CARREGAR =====
document.addEventListener('DOMContentLoaded', function() {
    
    const loginForm = document.getElementById('login-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const remember = document.getElementById('remember').checked;
            
            // ===== VALIDAÇÃO (MUDE AS CREDENCIAIS AQUI) =====
            if (username === "admin" && password === "bosch2024") {
                
                // Salva no localStorage
                if (remember) {
                    localStorage.setItem('bosch_logged', 'true');
                    localStorage.setItem('bosch_user', username);
                } else {
                    sessionStorage.setItem('bosch_logged', 'true');
                    sessionStorage.setItem('bosch_user', username);
                }
                
                // ===== REDIRECIONA PARA O FORMULÁRIO =====
                window.location.href = "index.html";
                
            } else {
                // Erro de login
                alert('❌ Usuário ou senha incorretos!\n\n✅ Credenciais de teste:\nUsuário: admin\nSenha: bosch2024');
                
                // Animação de erro
                loginForm.style.animation = 'shake 0.5s';
                setTimeout(() => {
                    loginForm.style.animation = '';
                }, 500);
            }
        });
    }
});

// ===== ANIMAÇÃO DE ERRO =====
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-8px); }
        20%, 40%, 60%, 80% { transform: translateX(8px); }
    }
`;
document.head.appendChild(style);