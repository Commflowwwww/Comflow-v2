document.addEventListener('DOMContentLoaded', function() {
    const cadastroForm = document.getElementById('cadastro-form');

    if (cadastroForm) {
        cadastroForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const username = document.getElementById('new-username').value.trim();
            const password = document.getElementById('new-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            if (password !== confirmPassword) {
                alert('❌ As senhas não coincidem!');
                return;
            }

            // Salva no "banco de dados" local (localStorage)
            localStorage.setItem(`user_db_${username}`, password);
            
            alert('✅ Conta criada com sucesso! Agora você pode fazer o login.');
            window.location.href = "login.html";
        });
    }
});
