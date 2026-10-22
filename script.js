/**
 * RAPIDÃO GUINCHOS - SCRIPT PRINCIPAL
 * Especialista Frontend / UI/UX / Conversão
 */

document.addEventListener('DOMContentLoaded', () => {
    
    /* =========================================
       1. MENU HAMBÚRGUER RESPONSIVO
    ========================================= */
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !isExpanded);
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link interno
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });

    /* =========================================
       2. VALIDAÇÃO DE FORMULÁRIO E REDIRECIONAMENTO WHATSAPP
    ========================================= */
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nome = document.getElementById('nome').value.trim();
            const telefone = document.getElementById('telefone').value.trim();
            const servico = document.getElementById('servico').value;
            const mensagem = document.getElementById('mensagem').value.trim();
            
            let isValid = true;

            // Validação Simples de Campos Obrigatórios
            if (nome === '') {
                document.getElementById('errorNome').textContent = 'Por favor, informe seu nome.';
                isValid = false;
            } else {
                document.getElementById('errorNome').textContent = '';
            }

            if (telefone === '' || telefone.length < 8) {
                document.getElementById('errorTelefone').textContent = 'Por favor, informe um telefone/WhatsApp válido.';
                isValid = false;
            } else {
                document.getElementById('errorTelefone').textContent = '';
            }

            if (servico === '') {
                document.getElementById('errorServico').textContent = 'Por favor, selecione o tipo de serviço.';
                isValid = false;
            } else {
                document.getElementById('errorServico').textContent = '';
            }

            if (isValid) {
                const successMsg = document.getElementById('formSuccess');
                successMsg.classList.remove('hidden');

                // Formatar mensagem para WhatsApp corporativo
                const whatsappNumber = '5511965759772';
                const text = `Olá! Meu nome é *${nome}* (Tel: ${telefone}). Estou solicitando orçamento para: *${servico}*.\n\nDetalhes/Localização: ${mensagem || 'Nenhum detalhe adicional informado.'}`;
                const encodedText = encodeURIComponent(text);

                // Redirecionar após breve feedback visual
                setTimeout(() => {
                    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank');
                    successMsg.classList.add('hidden');
                    contactForm.reset();
                }, 1500);
            }
        });
    }

    /* =========================================
       3. EFEITO DE SCORING NO HEADER
    ========================================= */
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.12)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        }
    });

});