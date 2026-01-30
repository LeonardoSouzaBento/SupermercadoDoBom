export function formatPhoneNumber(num, selectedPhoneType) {
  if (!num) return '';

  // Remove tudo que não é número
  let digits = num.replace(/\D/g, '');
  // Remove prefixo do Brasil (+55 ou 55)
  if (digits.startsWith('55')) {
    digits = digits.slice(2);
  }
  // Se for WhatsApp (zap) e o número tiver 10 dígitos, adiciona o 9
  if (selectedPhoneType === 'zap' && digits.length === 10) {
    digits = digits.replace(/^(\d{2})(\d{4})(\d{4})$/, '$19$2$3');
  }

  // Se for fixo (landline) e tiver 11 dígitos (com 9 extra), remove o 9
  if (selectedPhoneType === 'landline' && digits.length === 11) {
    digits = digits.replace(/^(\d{2})9(\d{4})(\d{4})$/, '$1$2$3');
  }

  // Só formata se tiver pelo menos 10 dígitos
  if (digits.length < 10) return num;
  if (digits.length === 11) {
    return digits.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
  }
  if (digits.length === 10) {
    return digits.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
  }
  // Caso venha com mais de 11 dígitos, corta e formata como celular
  return digits.slice(0, 11).replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
}