import crypto from 'crypto';

export function hash(data, alg = 'md5', asJson = true) {
  return crypto
    .createHash(alg)
    .update(asJson ? JSON.stringify(data) : data)
    .digest('hex');
}
