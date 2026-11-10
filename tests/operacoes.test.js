/* -------------------------- QUESTÃO 1 -------------------------- */
describe("", () => {
    function calcularDesconto(valor, percentual) {
    if (valor <= 0 || percentual < 0 || percentual > 100) {
        throw new Error("Dados inválidos");
    }
    const desconto = valor * (percentual / 100);
    return valor - desconto;
}
});

/* -------------------------- QUESTÃO 2 -------------------------- */
describe("", () => {
    function verificarAprovacao(nota) {
    if (nota < 0 || nota > 10) {
        throw new Error("Nota inválida");
    }
    if (nota >= 7) {
        return "Aprovado";
    }
    return "Reprovado";
}
});

/* -------------------------- QUESTÃO 3 -------------------------- */
describe("", () => {
    function validarCadastro(nome, idade, email) {
    if (!nome || nome.trim() === "") {
        return false;
    }
    if (!idade || idade < 18 || idade > 100) {
        return false;
    }
    if (!email || !email.includes("@")) {
        return false;
    }
    return true;
}
});

/* -------------------------- QUESTÃO 4 -------------------------- */
describe("", () => {
    function calcularFrete(valorCompra, distancia) {
    if (valorCompra < 0 || distancia < 0) {
        throw new Error("Valores inválidos");
    }
    if (valorCompra >= 200) {
        return 0;
    }
    return distancia * 2;
}
});

/* -------------------------- QUESTÃO 5 -------------------------- */
describe("", () => {
    function converterCelsiusParaFahrenheit(celsius) {
    if (typeof celsius !== "number") {
        throw new Error("A temperatura deve ser numérica");
    }
    return (celsius * 9 / 5) + 32;
}
});

/* -------------------------- QUESTÃO 6 -------------------------- */
describe("", () => {
    function calcularTotal(quantidade, precoUnitario) {
    if (quantidade < 0 || precoUnitario < 0) {
        throw new Error("Valores inválidos");
    }
    return quantidade * precoUnitario;
}
});

    // teste A
    test("deve calcular o total corretamente", () => {
    expect(calcularTotal(3, 10)).toBe(30);
});

    // teste B
    test("deve retornar zero quando a quantidade for zero", () => {
    expect(calcularTotal(0, 10)).toBe(0);
});

    // teste C
    test("deve lançar erro quando a quantidade for negativa", () => {
    expect(() => calcularTotal(-2, 10)).toThrow("Valores inválidos");
});

    // teste D
    test("deve calcular o total com preço negativo", () => {
    expect(calcularTotal(2, -5)).toBe(-10);
});

/* -------------------------- QUESTÃO 7 -------------------------- */
describe("", () => {
    function validarSenha(senha) {
    if (senha.length < 8) {
        return false;
    }
    return true;
}
});

    // teste A
    test("deve aceitar senha com 8 caracteres", () => {
    expect(validarSenha("abc12345")).toBe(true);
});

    // teste B
    test("deve rejeitar senha com menos de 8 caracteres", () => {
    expect(validarSenha("abc123")).toBe(false);
});

    // teste C
    test("deve rejeitar senha com 10 caracteres", () => {
    expect(validarSenha("abc1234567")).toBe(false);
});

    // teste D
    test("deve aceitar senha com 12 caracteres", () => {
    expect(validarSenha("abc123456789")).toBe(true);
});

/* -------------------------- QUESTÃO 8 -------------------------- */
describe("", () => {
    function verificarEstoque(estoque, quantidadeSolicitada) {
    if (quantidadeSolicitada <= 0) {
        throw new Error("Quantidade inválida");
    }
    if (quantidadeSolicitada > estoque) {
        return "Estoque insuficiente";
    }
    return "Pedido aprovado";
}
});

    // teste A
    test("deve aprovar pedido quando há estoque suficiente", () => {
    expect(verificarEstoque(20, 5)).toBe("Pedido aprovado");
});

    // teste B
    test("deve informar estoque insuficiente", () => {
    expect(verificarEstoque(5, 10)).toBe("Estoque insuficiente");
});

    // teste C
    test("deve aprovar pedido com quantidade igual ao estoque", () => {
    expect(verificarEstoque(10, 10)).toBe("Pedido aprovado");
});

    // teste D
    test("deve retornar estoque insuficiente para quantidade zero", () => {
    expect(verificarEstoque(10, 0)).toBe("Estoque insuficiente");
});

    // teste E
    test("deve lançar erro para quantidade negativa", () => {
    expect(() => verificarEstoque(10, -2))
        .toThrow("Quantidade inválida");
});

/* -------------------------- QUESTÃO 9 -------------------------- */
describe("", () => {
    function calcularMedia(nota1, nota2) {
    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        throw new Error("Notas inválidas");
    }
    return (nota1 + nota2) / 2;
}
});

    // teste A
    test("Teste 1", () => {
    expect(calcularMedia(8, 6)).toBe(7);
});

test("Teste 2", () => {
    expect(calcularMedia(10, 10)).toBe(10);
});

test("Teste 3", () => {
    expect(calcularMedia(0, 8)).toBe(4);
});

    // teste B
    test("Teste 4", () => {
    expect(calcularMedia(-1, 8)).toBe(3.5);
});

test("Teste 5", () => {
    expect(calcularMedia(5, 15)).toBe(10);
});