// ===== AGUARDA O FORMULÁRIO CARREGAR =====
document.addEventListener('DOMContentLoaded', function() {
    
    const loginForm = document.getElementById('login-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const remember = document.getElementById('remember').checked;
            
            // ===== VALIDAÇÃO ATUALIZADA (Verifica credenciais padrão e novos cadastros) =====
let senhaValida = false;

// 1. Verifica se é o admin padrão ou se o admin teve a senha redefinida
const adminSenhaAlterada = localStorage.getItem('user_db_admin');
if (username === "admin") {
    if (adminSenhaAlterada && password === adminSenhaAlterada) {
        senhaValida = true;
    } else if (!adminSenhaAlterada && password === "bosch2024") {
        senhaValida = true;
    }
} 
// 2. Se não for admin, procura se o usuário foi criado no Primeiro Acesso
else {
    const senhaCadastrada = localStorage.getItem(`user_db_${username}`);
    if (senhaCadastrada && password === senhaCadastrada) {
        senhaValida = true;
    }
}

if (senhaValida) {
    // Salva no localStorage ou sessionStorage
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
    alert('❌ Usuário ou senha incorretos!\n\nSe você acabou de criar ou resetar a conta, use a nova senha.');
    
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