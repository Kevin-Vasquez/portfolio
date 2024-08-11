const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_tbl4sms';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Enviado!');
        document.getElementById('from_name').value = '';
        document.getElementById('email_id').value = '';
        document.getElementById('message').value = '';
    }, (err) => {
      btn.value = 'Error al enviar';
      alert(JSON.stringify(err));
    });
});