/**
 * Utility helper functions
 */

export function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    const yOffset = -80; // Offset for sticky header
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

export function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

export function validatePhone(phone) {
  // Allow digits, spaces, hyphens, plus signs (min 7 digits)
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 7 && digits.length <= 15;
}
