(function () {
  const redirectInput = document.querySelector('input[data-redirect-back]');
  if (redirectInput) {
    const target = redirectInput.dataset.redirectBack || 'thanks-contact.html';
    const dir = window.location.pathname.replace(/[^/]*$/, '');
    const url = window.location.origin + dir + target;
    redirectInput.value = url;
  }

  const params = new URLSearchParams(window.location.search);
  if (params.get('sent') === '1') {
    const banner = document.getElementById('contactFormSuccess');
    if (banner) {
      banner.hidden = false;
      banner.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    params.delete('sent');
    const cleanQuery = params.toString();
    const cleanUrl = window.location.pathname + (cleanQuery ? '?' + cleanQuery : '') + window.location.hash;
    window.history.replaceState({}, '', cleanUrl);
  }
})();

