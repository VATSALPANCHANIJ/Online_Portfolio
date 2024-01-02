const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();

  btn.value = 'Sending...';

  const serviceID = 'default_service';
  const templateID = 'template_m0po6fd';

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = 'Send Email';
      toastr.success('Email sent successfully!', 'Success'); // Use Toastr for success message
    },
    (err) => {
      btn.value = 'Send Email';
      toastr.error('Error sending email: ' + JSON.stringify(err), 'Error'); // Use Toastr for error message
    }
  );
});
