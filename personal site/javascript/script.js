// small enhancements
document.getElementById('year').textContent = new Date().getFullYear();

// simple AJAX contact feedback (Formspree will redirect by default; this intercepts)
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const respDiv = document.getElementById('formMessage');
    try {
      const resp = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (resp.ok) {
        respDiv.style.display = 'block';
        respDiv.className = 'alert alert-success';
        respDiv.textContent = 'Thanks — your message was sent!';
        form.reset();
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (err) {
      respDiv.style.display = 'block';
      respDiv.className = 'alert alert-danger';
      respDiv.textContent = 'There was an error sending the message. Try emailing directly.';
    }
  });
}