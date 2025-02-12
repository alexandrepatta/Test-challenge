import http from 'k6/http';
import { check, sleep } from 'k6';
import { Trend, Rate } from 'k6/metrics';

// Configuração correta
export const options = {
  vus: 100,  // 100 usuários simultâneos
  duration: '30s', // Duração total do teste
};

// Métricas personalizadas
let responseTimeTrend = new Trend('tempo_de_resposta');
let errorRate = new Rate('taxa_de_erro');

export default function () {
  let res = http.get('https://jsonplaceholder.typicode.com/posts');

  responseTimeTrend.add(res.timings.duration);

  let success = check(res, {
    'status é 200': (r) => r.status === 200,
    'tempo de resposta abaixo de 500ms': (r) => r.timings.duration < 500,
  });

  errorRate.add(!success);

  sleep(1);
}
