import React from "react";
import { api } from "../../services/api";
import { Container } from "./style";
export function TransactionTable() {

  React.useEffect(() => {
    api.get("transactions")
       .then(response => console.log(response.data));
  },[]);

  return (
    <>
      <Container>
        <table>
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Valor</th>
              <th>Categoria</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Desenvovimento de Website</td>
              <td className="deposit">R$12.000</td>
              <td>Desenvovimento</td>
              <td>20/02/2022</td>
            </tr>
            <tr>
              <td>Aluguel da Casa</td>
              <td className="withdraw">-R$2.200</td>
              <td>Casa</td>
              <td>15/02/2022</td>
            </tr>
          </tbody>
        </table>
      </Container>
    </>
  );
}
