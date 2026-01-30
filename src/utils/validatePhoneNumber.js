export function validatePhoneNumber(num, selectedPhoneType) {
  if (!num) return false;

  let digits = num.replace(/\D/g, '');

  // Remove prefixo do Brasil
  if (digits.startsWith('55')) {
    digits = digits.slice(2);
  }

  const ddd = digits.slice(0, 2);
  const prefix = digits.slice(2, 3);

  // 🔹 Restrição geral: DDD deve estar entre 11 e 99
  if (Number(ddd) < 11 || Number(ddd) > 99) return false;

  // 🔹 Restrição geral: não pode ser sequência repetida
  if (/^(\d)\1+$/.test(digits)) return false;

  if (selectedPhoneType === 'landline') {
    // Deve ter 10 dígitos
    if (digits.length !== 10) return false;

    // Não pode começar com 0,1,8,9 após o DDD
    if (['0', '1', '8', '9'].includes(prefix)) return false;

    return true;
  }

  if (selectedPhoneType === 'zap') {
    // Deve ter 11 dígitos
    if (digits.length !== 11) return false;

    // Deve começar com 9 após o DDD
    if (prefix !== '9') return false;

    return true;
  }

  // Tipo desconhecido → inválido
  return false;
}