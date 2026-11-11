# Letícia Ribeiro Heidericke

# Questão 1

## a) O que a função faz?

A função calcula o valor de um produto após aplicar um desconto percentual. Verifica se o valor é válido e se o percentual está entre 0 e 100. Se os dados forem inválidos, dá um erro. Caso contrário, calcula o desconto e subtrai do preço original.

## b) Cenários de teste

| Cenário | Entrada (valor, percentual) | Resultado esperado |
|---|---|---|
| 1 | (100, 10) | 90 |
| 2 | (200, 50) | 100 |
| 3 | (100, 0) | 100 |
| 4 | (-20, 10) | Erro: Dados inválidos |

## c) Testes com Jest

```javascript
describe('calcularDesconto', () => {
  test('deve aplicar desconto de 10%', () => {
    expect(calcularDesconto(100, 10)).toBe(90);
  });

  test('deve aplicar desconto de 50%', () => {
    expect(calcularDesconto(200, 50)).toBe(100);
  });

  test('deve manter o valor quando o desconto for zero', () => {
    expect(calcularDesconto(100, 0)).toBe(100);
  });

  test('deve lançar erro para valor negativo', () => {
    expect(() => calcularDesconto(-20, 10)).toThrow('Dados inválidos');
  });
});
```

# Questão 2

## a) Como a função funciona?

A função recebe uma nota. Se ela for menor que 0 ou maior que 10, dá erro. Se estiver entre 0 e 10, verifica se é maior ou igual a 7. Nesse caso, retorna "Aprovado". Caso contrário, retorna "Reprovado".

## b) Cenários de teste

| Cenário | Nota | Resultado esperado |
|---|---|---|
| 1 | 8 | "Aprovado" |
| 2 | 6 | "Reprovado" |
| 3 | 7 | "Aprovado" |
| 4 | 11 | Erro: "Nota inválida" |

## c) Testes com Jest

```javascript
describe('verificarAprovacao', () => {
  test('deve aprovar uma nota maior que 7', () => {
    expect(verificarAprovacao(8)).toBe('Aprovado');
  });

  test('deve reprovar uma nota menor que 7', () => {
    expect(verificarAprovacao(6)).toBe('Reprovado');
  });

  test('deve aprovar a nota mínima para aprovação', () => {
    expect(verificarAprovacao(7)).toBe('Aprovado');
  });

  test('deve lançar erro para nota acima de 10', () => {
    expect(() => verificarAprovacao(11)).toThrow('Nota inválida');
  });
});
```

## d) Por que testar apenas uma nota de aprovação não é suficiente?

Porque também é necessário testar notas de reprovação, o limite mínimo de aprovação e notas inválidas. Assim, verificamos se todas as condições funcionam corretamente.

# Questão 3

## a) Condições para o cadastro ser válido

O nome não pode estar vazio nem conter apenas espaços, a idade deve estar dentro do limite permitido (18 a 100 anos) e o e-mail deve estar preenchido e conter o caractere @.

## b) Testes com Jest

```javascript
describe('validarCadastro', () => {
  test('deve aceitar todos os dados válidos', () => {
    expect(validarCadastro('Ana Silva', 25, 'ana@email.com')).toBe(true);
  });

  test('deve rejeitar todos os dados inválidos', () => {
    expect(validarCadastro(' ', 15, 'anaemail.com')).toBe(false);
  });

  test('deve rejeitar nome vazio', () => {
    expect(validarCadastro('', 25, 'ana@email.com')).toBe(false);
  });

  test('deve rejeitar nome com apenas espaços', () => {
    expect(validarCadastro(' ', 25, 'ana@email.com')).toBe(false);
  });

  test('deve rejeitar idade vazia', () => {
    expect(validarCadastro('Ana Silva', '', 'ana@email.com')).toBe(false);
  });

  test('deve rejeitar idade abaixo do limite', () => {
    expect(validarCadastro('Ana Silva', 17, 'ana@email.com')).toBe(false);
  });

  test('deve rejeitar idade acima do limite', () => {
    expect(validarCadastro('Ana Silva', 101, 'ana@email.com')).toBe(false);
  });

  test('deve rejeitar e-mail vazio', () => {
    expect(validarCadastro('Ana Silva', 25, '')).toBe(false);
  });

  test('deve rejeitar e-mail sem o caractere @', () => {
    expect(validarCadastro('Ana Silva', 25, 'anaemail.com')).toBe(false);
  });
});
```

## c) Resultado esperado quando apenas um dado é inválido

A função deve retornar false, pois todos os campos precisam ser válidos para que o cadastro seja aceito.

# Questão 4

## a) Testes com Jest

```javascript
describe('calcularFrete', () => {
  test('caso 1: compra acima de 200 deve ter frete grátis', () => {
    expect(calcularFrete(250, 10)).toBe(0);
  });

  test('caso 2: deve calcular o frete pelo dobro da distância', () => {
    expect(calcularFrete(100, 10)).toBe(20);
  });

  test('caso 3: compra exatamente igual a 200 deve ter frete grátis', () => {
    expect(calcularFrete(200, 5)).toBe(0);
  });

  test('caso 4: compra de valor zero deve calcular o frete', () => {
    expect(calcularFrete(0, 10)).toBe(20);
  });

  test('caso 5: deve lançar erro para valor de compra negativo', () => {
    expect(() => calcularFrete(-50, 10)).toThrow('Valores inválidos');
  });

  test('caso 6: deve lançar erro para distância negativa', () => {
    expect(() => calcularFrete(100, -5)).toThrow('Valores inválidos');
  });
});
```

## b) Por que o caso 3 deve retornar zero?

Porque a condição da função é valorCompra >= 200. Como a compra é exatamente R$ 200, ela já tem direito ao frete grátis.

# Questão 5

## a) Testes com Jest

```javascript
describe('converterCelsiusParaFahrenheit', () => {
  test('deve converter 0 °C para 32 °F', () => {
    expect(converterCelsiusParaFahrenheit(0)).toBe(32);
  });

  test('deve converter 100 °C para 212 °F', () => {
    expect(converterCelsiusParaFahrenheit(100)).toBe(212);
  });

  test('deve converter -40 °C para -40 °F', () => {
    expect(converterCelsiusParaFahrenheit(-40)).toBe(-40);
  });

  test('deve converter 25 °C para 77 °F', () => {
    expect(converterCelsiusParaFahrenheit(25)).toBe(77);
  });

  test('deve lançar erro quando receber uma string numérica', () => {
    expect(() => converterCelsiusParaFahrenheit('25'))
      .toThrow('A temperatura deve ser numérica');
  });

  test('deve lançar erro quando receber texto', () => {
    expect(() => converterCelsiusParaFahrenheit('abc'))
      .toThrow('A temperatura deve ser numérica');
  });
});
```

## b) Por que "25" deve provocar erro?

Porque "25" é uma string, ou seja, um texto. A função exige um valor do tipo int, mesmo que o conteúdo represente um número.

# Questão 6

## a) O que são testes unitários e por que são importantes?

São testes que verificam partes específicas de um programa. Eles ajudam a encontrar erros, confirmar os resultados e garantir que o código funcione corretamente.

## b) Análise dos testes

| Teste | Resultado | Justificativa |
|---|---|---|
| A | PASSA | 3 * 10 resulta em 30, como esperado. |
| B | PASSA | 0 * 10 resulta em 0. |
| C | PASSA | A quantidade negativa provoca o erro esperado. |
| D | FALHA | O preço negativo provoca um erro, mas o teste espera -10. |

## c) Teste com expectativa incompatível

O teste D está incorreto. A função verifica se precoUnitario < 0 e dá o erro "Valores inválidos". Portanto, calcularTotal(2, -5) não retorna -10, mas lança uma exceção. O teste deveria usar toThrow('Valores inválidos').

# Questão 7

## a) Quais testes passam e quais falham?

| Teste | Resultado | Justificativa |
|---|---|---|
| A | PASSA | A senha tem 8 caracteres e a função aceita esse tamanho. |
| B | PASSA | A senha tem 6 caracteres, menos que 8, então retorna false. |
| C | FALHA | A senha tem 10 caracteres, então a função retorna true, mas o teste espera false. |
| D | PASSA | A senha tem 12 caracteres, portanto retorna true. |

## b) Qual é o problema do teste C?

O teste espera que uma senha com 10 caracteres seja rejeitada, mas a função só rejeita senhas com menos de 8 caracteres. O resultado esperado deveria ser true.

## c) A função verifica letras maiúsculas, números ou caracteres especiais?

Não. Ela verifica apenas o tamanho da senha. Qualquer senha com 8 caracteres ou mais será aceita, independentemente dos tipos de caracteres utilizados.

# Questão 8

## a) Quais testes passam e quais falham?

| Teste | Resultado | Justificativa |
|---|---|---|
| A | PASSA | Há 20 unidades e foram solicitadas 5. O pedido é aprovado. |
| B | PASSA | Foram solicitadas 10 unidades, mas há apenas 5. O estoque é insuficiente. |
| C | PASSA | A quantidade solicitada é igual ao estoque, então o pedido é aprovado. |
| D | FALHA | A quantidade zero provoca um erro, mas o teste espera "Estoque insuficiente". |
| E | PASSA | A quantidade negativa provoca o erro esperado. |

## b) Por que o teste C deve passar?

Porque a condição verifica se a quantidade solicitada é maior que o estoque. Quando os valores são iguais, essa condição é falsa e o pedido é aprovado.

## c) Qual é o problema do teste D?

A função considera zero uma quantidade inválida e dá o erro "Quantidade inválida". O teste D espera "Estoque insuficiente", por isso falha. A expectativa correta seria usar toThrow('Quantidade inválida').

# Questão 9

## a) Análise dos cinco testes

| Teste | Resultado | Justificativa |
|---|---|---|
| 1 | PASSA | A média de 8 e 6 é 7. |
| 2 | PASSA | A média de 10 e 10 é 10. |
| 3 | PASSA | A média de 0 e 8 é 4. |
| 4 | FALHA | A nota -1 é inválida e provoca um erro, em vez de retornar 3,5. |
| 5 | FALHA | A nota 15 é inválida, pois ultrapassa o limite máximo de 10. |

O teste 5 falha porque a função rejeita notas maiores que 10. A chamada calcularMedia(5, 15) lança o erro "Notas inválidas", em vez de retornar 10.

## b) Três testes adicionais com Jest

```javascript
describe('testes adicionais de calcularMedia', () => {
  test('deve calcular a média de duas notas zero', () => {
    expect(calcularMedia(0, 0)).toBe(0);
  });

  test('deve calcular a média de duas notas no limite máximo', () => {
    expect(calcularMedia(10, 10)).toBe(10);
  });

  test('deve lançar erro quando a segunda nota for maior que 10', () => {
    expect(() => calcularMedia(8, 11)).toThrow('Notas inválidas');
  });
});
```