document.addEventListener('DOMContentLoaded', function() {
    const recuperarForm = document.getElementById('recuperar-form');

    if (recuperarForm) {
        recuperarForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const username = document.getElementById('reset-username').value.trim();
            const newPassword = document.getElementById('reset-password').value;

            // Se for o usuário padrão admin ou se existir no localStorage, permite alterar
            if (username === "admin" || localStorage.getItem(`user_db_${username}`) !== null) {
                
                if (username === "admin") {
                    // Como o admin padrão está fixo no código do seu login-script, salvamos a alteração dele separadamente
                    localStorage.setItem('user_db_admin', newPassword);
                } else {
                    localStorage.setItem(`user_db_${username}`, newPassword);
                }

                alert('✅ Senha alterada com sucesso!');
                window.location.href = "login.html";
            } else {
                alert('❌ Usuário não encontrado no sistema!');
            }
        });
    }
});