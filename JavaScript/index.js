document.getElementById("calcular").addEventListener("click", function() {
    const pizzaSelect = document.getElementById("pizza");
    const pizzaPrice = parseInt(pizzaSelect.value);
    const cantidad = parseInt(document.getElementById("cantidad").value);
    
    let extrasTotal = 0;
    const extras = document.querySelectorAll("input[type='checkbox']:checked");
    let extrasList = [];

    extras.forEach(extra => {
        extrasTotal += parseInt(extra.value);
        extrasList.push(extra.parentNode.textContent.trim());
    });

    const total = (pizzaPrice + extrasTotal) * cantidad;

    let resultado = `<strong>Pizza Elegida:</strong> ${pizzaSelect.options[pizzaSelect.selectedIndex].text}<br>
                    <strong>Cantidad:</strong> ${cantidad}<br>`;

    if (extrasList.length > 0) {
        resultado += `<strong>Ingredientes Extras:</strong> ${extrasList.join(", ")}<br>`;
    } else {
        resultado += `<strong>Ingredientes Extras:</strong> Ninguno<br>`;
    }

    resultado += `<strong>Total a Pagar:</strong> $${total.toLocaleString()}`;

    document.getElementById("resultado").innerHTML = resultado;
});
