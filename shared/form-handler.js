function initFormHandler(formId, successMsg, buttonLabel) {
    var form = document.getElementById(formId);
    if (!form) return;
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        var btn = this.querySelector('.submit-btn');
        var status = this.querySelector('.form-status');
        btn.disabled = true;
        btn.textContent = 'Sending...';
        status.className = 'form-status';
        status.style.display = 'none';
        try {
            var res = await fetch('https://formspree.io/f/xykbbrzn', {
                method: 'POST',
                headers: { 'Accept': 'application/json' },
                body: new FormData(this)
            });
            if (res.ok) {
                status.textContent = successMsg;
                status.className = 'form-status success';
                this.reset();
            } else {
                throw new Error();
            }
        } catch {
            status.textContent = 'Something went wrong. Please try again.';
            status.className = 'form-status error';
        }
        status.style.display = '';
        btn.disabled = false;
        btn.textContent = buttonLabel;
        setTimeout(function() {
            status.style.transition = 'opacity 1s ease';
            status.style.opacity = '0';
            setTimeout(function() {
                status.style.display = 'none';
                status.style.opacity = '1';
                status.style.transition = '';
            }, 1000);
        }, 4000);
    });
}
